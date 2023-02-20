const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../../models/user/userSchema')

router.get('/', async(req, res) => {
    const user = await User.find()
    res.status(200).json(user)
})

router.post('/', async(req, res) => {
    try {
        console.log(req.body);
    if (!req.body) {
        return res.status(400).json({ message: 'Request body is missing' });
    }

    const { name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    return res.json(user);
    } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
    }
})
router.post('/login', async(req, res)=>{
    try{
        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).json({message: "Email and password are required"})
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json({message: "User not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(401).json({message: "Invalid credentials"})
        }
        res.status(200).json(user)
    }catch(err){
        res.status(400).json({message: "Server error"})
    }
})


module.exports = router