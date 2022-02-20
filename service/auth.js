// const userDAO = require('../dao/user');
const users = require("../schema/newuser")
const bcrypt = require('bcrypt');

async function login(email, password) {
    try {
        // const user = await userDAO.findUserByEmail(email);
        const user = await users.findOne({ email: email })

        // we do not need to hash our plain text password
        // before we pass it to bcrypt.compare
        // bcrypt.compare will always return resolved Promise with a boolean value
        // indicating whether the password hashes match
        const match = await bcrypt.compareSync(password, user.password);

        if (match) {
            return {id: user.id, roles: user.roles};
        } else {
            return Promise.reject('wrong username or password');
        }
    } catch(err) {
        return Promise.reject('user not found');
    }
}

module.exports = {login};