import express from 'express';
import { createSeekerUser } from '../controller/seekerRegistrationController.js';

const router = new express.Router()

router.post('/seeker-registration', createSeekerUser)

export default router