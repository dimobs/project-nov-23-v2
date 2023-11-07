const authController = require('express').Router();
const { body, validationResult } = require('express-validator');

const { register, login, logout, getAllUsers } = require('../services/auth');
const { parseError } = require('../services/parseErrorExpress');


authController.post('/register',
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 2 }).withMessage('Password must be at least 3 characters long'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }

            const token = await register(
                req.body.email,
                req.body.password
                );

            res.json(token);
            
        } catch (error) {
            const message = parseError(error);
            res.status(400).json({ message });
        }
    });

authController.post('/login', async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password);
        res.json(token);
    } catch (error) {
        const message = parseError(error);
        res.status(401).json({ message });
    }
});

authController.get('/logout', async (req, res) => {
    console.log('logged out...');
    const token = req.token;
    await logout(token);
    res.status(204).end();
});

authController.get('/users', async (req, res) => {
    console.log('/users1');
    try {
        console.log('/users2');
        const getAll = await getAllUsers();
        
        console.log('/users3', getAll);
        return getAll
    } catch (error) {
        const message = parseError(error);
        res.status(200).json({ message });
    }
});

// authController.get('/users', async (req, res) =>{
//     const data = await User.find({});
//     console.log(data);
//     return data
// });

module.exports = authController;