const express = require('express');

const router = express.Router();

const {getexperience,addexperience,deleteexperience,updateexperience} = require('../../controllers/experience')

router
    .route('/')
    .get(getexperience)
    .post(addexperience);

router
    .route('/:id')
    .delete(deleteexperience)
    .put(updateexperience)







module.exports = router