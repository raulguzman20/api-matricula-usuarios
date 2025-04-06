const Registration = require('../models/Registration');

// Get all registrations
exports.getRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.find();
        res.json(registrations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single registration
exports.getRegistration = async (req, res) => {
    try {
        const registration = await Registration.findById(req.params.id);
        if (!registration) {
            return res.status(404).json({ message: 'Registration not found' });
        }
        res.json(registration);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create registration
exports.createRegistration = async (req, res) => {
    const registration = new Registration({
        cliente: req.body.cliente,
        estudiante: req.body.estudiante,
        fecha_inicio: new Date(req.body.fecha_inicio),
        fecha_fin: new Date(req.body.fecha_fin)
    });

    try {
        const newRegistration = await registration.save();
        res.status(201).json(newRegistration);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update registration
exports.updateRegistration = async (req, res) => {
    try {
        const registration = await Registration.findById(req.params.id);
        if (!registration) {
            return res.status(404).json({ message: 'Registration not found' });
        }

        registration.cliente = req.body.cliente;
        registration.estudiante = req.body.estudiante;
        registration.fecha_inicio = new Date(req.body.fecha_inicio);
        registration.fecha_fin = new Date(req.body.fecha_fin);
        const updatedRegistration = await registration.save();
        res.json(updatedRegistration);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete registration
exports.deleteRegistration = async (req, res) => {
    try {
        const registration = await Registration.findById(req.params.id);
        if (!registration) {
            return res.status(404).json({ message: 'Registration not found' });
        }

        await registration.remove();
        res.json({ message: 'Registration deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};