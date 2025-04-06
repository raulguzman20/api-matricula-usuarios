const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

// GET all registrations
router.get('/', registrationController.getRegistrations);

// GET single registration
router.get('/:id', registrationController.getRegistration);

// POST new registration
router.post('/', registrationController.createRegistration);

// PUT update registration
router.put('/:id', registrationController.updateRegistration);

// DELETE registration
router.delete('/:id', registrationController.deleteRegistration);

module.exports = router;