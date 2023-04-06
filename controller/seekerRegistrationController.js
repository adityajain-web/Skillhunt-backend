import Seeker from "../database/model/seekerModel.js";

export const createSeekerUser = async (req, res) => {
    const newSeeker = new Seeker(req.body);
    try {
        const response = await newSeeker.save();
        res.status(201).send(response)
    } catch (error) {
        res.status(400).send(error)
    }
}