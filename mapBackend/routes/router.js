const express = require('express')
const router = express.Router()
const api = '/api/mapApp/'

router.use(`${api}user`, require('./user/user'))
router.use(`${api}map`, require('./map/map'))

module.exports = router