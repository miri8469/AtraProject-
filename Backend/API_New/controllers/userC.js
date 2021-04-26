const User = require('../models/User')
const env = require("dotenv")
const jwt = require("jsonwebtoken")
// env.config()

const login = (req, res) => {
    let userdetails = req.body;
    console.log(userdetails)
    User.findOne({ name: userdetails.name, pass: userdetails.pass })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: 'User not exists' });
            }
            else {
                // console.log(user);
                return res.status(200).json(user);
            }
        }).catch((err) => {
            res.status(500).json({ err });
        })
}

const createUser = async (req, res) => {
    console.log('create user');
    try {
        console.log(req.body);
        let user = new User(req.body);
        await user.save();
        //צריך לבדוק אם המשתמש כבר קיים
        // const token = jwt.sign({ userName: userName, password: password }, process.env.SECRET)
        // res.status(200).json({ user: user, token: token })

        console.log(user);
        return res.status(200).json(user)
    } catch (err) {
        return res.status(500).json({ "err": err.message })

    }
}


const findUserById = (req, res) => {
    User.findById(req.query.id)
        .then((user) => {
            if (!user) {
                return res.status(500).send(user)
            }
            return res.status(200).send(user);
        }).catch((err) => {
            console.log(`err ${err}`);
        })
}
module.exports = { login, findUserById, createUser, }
