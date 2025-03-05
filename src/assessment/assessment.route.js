const express = require("express");
const router = express.Router();
const Assessment = require("./assessment.model");

// ? Middleware for error handling
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// ? Get all assessments
router.get(
    "/",
    asyncHandler(async (req, res) => {
        const assessments = await Assessment.find();
        res.status(200).json({ 
            success: true, 
            count: assessments.length, 
            data: assessments 
        });
    })
);

// ? Create a new assessment
router.post(
    "/create-assessment",
    asyncHandler(async (req, res) => {
        const { assessments } = req.body; // ? Extracting the array
        console.log(assessments)

        if (!Array.isArray(assessments) || assessments.length === 0) {
            return res.status(400).json({ success: false, message: "Invalid or empty assessments array" });
        }

        // ? Map through assessments and validate each
        const validatedAssessments = assessments.map((assessment) => {
            const { title, strand, subStrand, date, completion, allDay, alert } = assessment;

            if (!title || !strand || !subStrand || !date) {
                throw new Error("Missing required fields");
            }

            if (completion && (isNaN(parseInt(completion)) || parseInt(completion) < 0 || parseInt(completion) > 100)) {
                throw new Error("Invalid completion percentage");
            }

            return {
                title,
                strand,
                subStrand,
                date,
                completion: typeof completion === "number" ? `${completion}%` : completion, // Ensure correct format
                allDay,
                alert
            };
        });

        // ? Save the validated assessments
        const newAssessment = new Assessment({ assessments: validatedAssessments });
        const savedAssessment = await newAssessment.save();

        res.status(201).json({ 
            success: true, 
            message: "Assessment created successfully", 
            data: savedAssessment 
        });
    })
);

// ? Global error handler middleware
router.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(500).json({ success: false, message: err.message || "Internal Server Error" });
});

module.exports = router;
