// controllers/stakeholderController.js
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Stakeholder from '../models/Stakeholder.js'; // Adjust the path if necessary

// Function to log in a stakeholder
export const loginStakeholder = async (req, res) => {
    const { email, password } = req.body;
    try {
        const stakeholder = await Stakeholder.findOne({ email });
        if (!stakeholder) return res.status(404).json({ message: 'Stakeholder not found' });

        const isValidPassword = await bcrypt.compare(password, stakeholder.password);
        if (!isValidPassword) return res.status(401).json({ message: 'Invalid password' });

        const token = jwt.sign({ id: stakeholder._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

// Function to create a new stakeholder
export const createStakeholder = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newStakeholder = new Stakeholder({ name, email, password: hashedPassword });
        await newStakeholder.save();
        res.status(201).json({ message: 'Stakeholder created successfully', stakeholder: newStakeholder });
    } catch (error) {
        res.status(500).json({ message: 'Error creating stakeholder', error });
    }
};

// Function to get a stakeholder by ID
export const getStakeholderById = async (req, res) => {
    const { id } = req.params;
    try {
        const stakeholder = await Stakeholder.findById(id);
        if (!stakeholder) return res.status(404).json({ message: 'Stakeholder not found' });

        res.status(200).json(stakeholder);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving stakeholder', error });
    }
};

// Function to update a stakeholder
export const updateStakeholder = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedStakeholder = await Stakeholder.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedStakeholder) return res.status(404).json({ message: 'Stakeholder not found' });

        res.status(200).json(updatedStakeholder);
    } catch (error) {
        res.status(500).json({ message: 'Error updating stakeholder', error });
    }
};

// Function to delete a stakeholder
export const deleteStakeholder = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedStakeholder = await Stakeholder.findByIdAndDelete(id);
        if (!deletedStakeholder) return res.status(404).json({ message: 'Stakeholder not found' });

        res.status(200).json({ message: 'Stakeholder deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting stakeholder', error });
    }
};
