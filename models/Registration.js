const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    cliente: {
        type: String,
        required: true
    },
    estudiante: {
        type: String,
        required: true
    },
    fecha_inicio: {
        type: Date,
        required: true
    },
    fecha_fin: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Registration', registrationSchema, 'registrations');