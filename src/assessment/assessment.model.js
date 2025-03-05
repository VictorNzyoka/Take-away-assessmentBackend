const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    strand: { type: String, required: true },
    subStrand: { type: String, required: true },
    date: { type: String, required: true },
    completion: { type: String },
    allDay: { type: Boolean },
    alert: { type: Boolean }
});

module.exports = mongoose.model("Assessment", assessmentSchema);