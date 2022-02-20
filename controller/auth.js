// const authService = require('../service/auth');
const users = require("../schema/newuser")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

async function login(req, res) {
    const {email, password} = req.body;
    
    // perform payload validation
    // in prod, always use a validation library like joi
    // for this tutorial, we only do basic validation
    if (!email || !password) {
        return res.status(400).json('Bad request params - you need to provide an email and a password');
    }
    
    const user = await users.findOne({ email: email })
    
    try {
        if (user) {
            const check = bcrypt.compareSync(password, user.password)
            if (check) {
                const token = jwt.sign({ email: email }, process.env.JWT_SECRET)
                req.session.authenticated = true
                req.session.token = token
                // res.cookie("token", token).send("authenticated")
                res.send("authenticated")
                // console.log(token);
            } else {
                next({ message: "incorrect password" })
            }
        } else {
            next({ message: "incorrect email" })
        }
    } catch (err) {
        // next(err)
        console.log(err);
    }
}

async function logout (req, res){
    try{
        req.session.destroy()
        res.send({message: "session destroyed"})
        console.log("session destroyed");
    }catch(err){
        console.log(err);
    }
}

async function verifytoken (req, res){
    try{
        let token = req.session.token
        if (token){
            res.send({message: "success"})
        }else{
            res.send({message: "fail"})
        }
        console.log(token);
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    login,
    logout,
    verifytoken
};