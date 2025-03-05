const express = require("express");
const router = express.Router();
const Assessment = require("./assessment.model");

// ? Get all assessments
router.get("/", async (req, res) => {
    try {
        const assessments = await Assessment.find();
        res.status(200).json({
            success: true,
            data: assessments,
        });
    } catch (err) {
        console.error("Error fetching assessments:", err);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

// ? Create a new assessment
router.post("/create-assessment", async (req, res) => {
    try {
        const { title, strand, subStrand, date, completion, allDay, alert } = req.body;

        console.log(req.body);

        if (!title || !strand || !subStrand || !date) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        if (completion !== undefined && (isNaN(parseInt(completion)) || parseInt(completion) < 0 || parseInt(completion) > 100)) {
            return res.status(400).json({ success: false, message: "Invalid completion percentage" });
        }

        // ? Save the validated assessment
        const newAssessment = new Assessment({
            title,
            strand,
            subStrand,
            date: new Date(date), // Convert to Date type
            completion: completion ? `${parseInt(completion)}%` : undefined, // Ensure it's formatted correctly
            allDay,
            alert,
        });

        const savedAssessment = await newAssessment.save();

        res.status(201).json({
            success: true,
            message: "Assessment created successfully",
            data: savedAssessment,
        });
    } catch (err) {
        console.error("Error creating assessment:", err);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

module.exports = router;
