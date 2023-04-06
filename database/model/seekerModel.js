import mongoose from "mongoose";
import validator from 'validator';

const seekerModel = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        validate(value) {
            if (!value.match(/^[A-Za-z]+$/)) throw new Error('Invalid firstname.')
        },
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        validate(value) {
            if (!value.match(/^[A-Za-z]+$/)) throw new Error('Invalid lastname.')
        },
        required: true
    },
    email: {
        type: String,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error('Invalid email.')
        },
        unique: true,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) throw new Error('Invalid phone number.')
        },
        minLength: [10, 'Invalid phone number.'],
        maxLenght: [10, 'Invalid phone number.'],
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: [8, "invalid password"],
        maxLength: [16, "invalid password"],
        required: true
    }
});

const Seeker = new mongoose.model('Seeker', seekerModel);

export default Seeker