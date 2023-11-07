const User = require('../models/Users'); //userSchema
const { userSession } = require('../middlewares/userSession');

async function register(session, username, password, email, gender) {
    const existing = await getUserByUsername(username);

    if (existing) {
        throw new Error('Username is taken')
    }
    const user = new User({
        username,
        email,
        hashedPassword: password,
        gender
    });
    await user.save();

    session.user = {
        id: user._id,
        username: user.username
    };
};

async function getUserByUsername(username) {
    const user = await User.findOne({ username: new RegExp(`^${username}$`, 'i') });
    return user;
}

async function getAllUsers() {
    console.log('stage4');
    const users = await User.find({})
    return users
};

async function login(session, username, password) { //req.session, ...params
    const user = await User.findOne({ username });

    if (user && await user.comparePassword(password)) {
        session.user = {
            id: user._id,
            username: user.username
        };
        return true;
    } else {
        throw new Error('Incorrect username or password')
    }
}

function logout(session) {
    delete session.user
}

async function userUpdate(session, username, newUser, password) {
    const user = await User.findOne({ username });
    if (newUser) {
        username = newUser;
        user.username = username;
    }
    if (password) {
        console.log('new pass');
        user.hashedPassword = password;
    }
    await user.save();
    return true;
}


module.exports = () => (req, res, next) => {
    if (req.session.user) {
        res.locals.user = req.session.user;
        res.locals.hasUser = true;
    }

    req.auth = {
        register: (...params) => register(req.session, ...params),
        login: (...params) => login(req.session, ...params),
        userUpdate: (...params) => userUpdate(req.session, ...params),
        logout: () => logout(req.session),
        getAllUsers: () => getAllUsers(),
        getUserByUsername: () => getUserByUsername()
    };

    next();
}



// module.exports = () => (req, res, next) => {
//     if (req.session.user) {
//         res.locals.user = req.session.user;
//         res.locals.hasUser = true;
//     }

//     req.auth = {
//         register: (...params) => register(req.session, ...params),
//         login: (...params) => login(req.session, ...params),
//         userUpdate: (...params) => userUpdate(req.session, ...params),
//         logout: () => logout(req.session)
//     };

//     next();
// }
