import Outage from "../models/Outage";

export const add = async (req, res) => {
    try {
        // Extract data from the request body
        const { coordinate, areas, title, description, image, rating, tobe, reason, status } = req.body;

        const newOutage = new Outage({
            coordinate,
            areas,
            title,
            description,
            image,
            rating,
            tobe,
            reason,
            status,
        });
        const savedOutage = await newOutage.save();

        res.status(201).json({ message: 'Outage added successfully', outage: savedOutage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add outage' });
    }
};



export const getAll = async (req, res) => {
    try {
        const outages = await Outage.find();
        res.status(200).json(outages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve outage data' });
    }
};