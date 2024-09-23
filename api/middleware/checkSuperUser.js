// middleware/checkSuperUser.js


export const checkSuperUser = (req, res, next) => {
    if (req.user && req.user.isSuperUser) {
      next(); // User is a super user, proceed to the next middleware/controller
    } else {
      res.status(403).json({ message: 'Access denied. You are not a super user.' });
    }
  };
  

// const checkSuperUser = (req, res, next) => {
//     if (req.user && req.user.isSuperUser) {
//       next();
//     } else {
//       res.status(403).json({ message: 'Access denied. Super user privileges required.' });
//     }
//   };
  
//   module.exports = checkSuperUser;
  