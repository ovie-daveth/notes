const express = require('express');
const { RegisterUser, loginUser, getAllProfiles, getProfile, getMyProfile } = require('../controller/userControllers');
const tokenaccess = require('../middlewares/tokenaccess');

const router = express.Router();

router.post("/register", RegisterUser)
router.post("/login", loginUser)
router.get("/profiles", getAllProfiles)
router.get("/profile/:id", getProfile)
router.get("/me", tokenaccess, getMyProfile)


module.exports = router