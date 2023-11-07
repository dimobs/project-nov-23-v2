const authController = require('express').Router();
const { body, validationResult } = require('express-validator');

const { register, login, logout, getAllUsers, getUserByUsername } = require('../services/auth');
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
    const token = req.token;
    token ? await logout(token) : ""
    res.status(204).end();
});

authController.get('/users', async(req, res) => {
const data = await getAllUsers();
console.log(data);
res.json(data)
});


authController.get('/getUser', async(req, res) => {
    const data = await getUserByUsername("dimo");
    console.log(data);
    res.json(data)
    });
 

// authController.get('/users', async (req, res) =>{
//     const data = await User.find({});
//     console.log(data);
//     return data
// });

module.exports = authController;