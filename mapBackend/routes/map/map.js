const express = require('express')
const router = express.Router()
const Map = require('../../models/map/mapSchema')

router.get('/', async(req, res)=>{
    const map = await Map.find()
    res.status(200).json(map)
})

router.post('/', async(req, res) => {
    try{
        const {lat, lon} = req.body
        if(!lat || !lon){
            res.status(401).json({message: 'text is required'})
        }
        const map = await Map.create({
            lat, lon
        })
        await map.save()
        res.status(200).json(map)
    }catch(err){
        res.status(500).json({message: "Server error"})
    }
})

module.exports = router