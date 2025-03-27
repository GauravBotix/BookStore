const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');

const Signup = async (req, res) => {
    try {
        
        const { name,email, password } = req.body;
        let user = await userModel.findOne({ email }); 
        if (user) {
            res.status(200).json({ message: 'Already a user' })
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            user = await userModel.create({
                name,
                email,
                password:hashedPassword,
            });
            res.status(201).json(user);
           
        }    
        
    } catch (err) {
        res.json({ error: err.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user ) {
            return res.json({ message: 'no record' });
        } 
        const matchPswd = await bcrypt.compare(password, user.password);
        if (matchPswd) {
            res.json({ message: 'success' });
        } else {
            res.json({ message: 'Invalid Username or Password' });
        }
        

    } catch (err) {
        res.json({ error: err.message });
    }
};

module.exports={Signup,login}
