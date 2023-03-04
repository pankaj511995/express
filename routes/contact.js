const path = require('path');

const express = require('express');

const contact = require('../controller/contactus');


const router = express.Router();

router.get('/fillform', contact.getShopProduct );
router.use('/success',contact.postcontact)

module.exports = router;
