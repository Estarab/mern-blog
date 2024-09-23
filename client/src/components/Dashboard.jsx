// src/components/Dashboard.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [stakeholder, setStakeholder] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }
        axios.get('/api/stakeholders/me', { headers: { Authorization: token } })
            .then(response => setStakeholder(response.data))
            .catch(() => navigate('/login'));
    }, [navigate]);

    const handlePostSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post(`/api/stakeholders/${stakeholder._id}/posts`, { title, description, imageUrl }, {
                headers: { Authorization: token }
            });
            // Fetch updated data
            const response = await axios.get('/api/stakeholders/me', { headers: { Authorization: token } });
            setStakeholder(response.data);
            setTitle('');
            setDescription('');
            setImageUrl('');
        } catch (error) {
            console.error('Error creating post', error);
        }
    };

    if (!stakeholder) return <p>Loading...</p>;

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-extrabold mb-6">Welcome, {stakeholder.name}</h1>
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
                <form onSubmit={handlePostSubmit} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">Image URL</label>
                        <input
                            type="text"
                            id="imageUrl"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        Add Post
                    </button>
                </form>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4">Your Posts</h2>
                <ul className="space-y-4">
                    {stakeholder.posts.map((post) => (
                        <li key={post._id} className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold">{post.title}</h3>
                            <p className="text-gray-700">{post.description}</p>
                            {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="mt-4 max-w-full rounded-lg" />}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
