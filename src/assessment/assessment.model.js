const mongoose = require("mongoose");

const AssessmentSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
  assessments: [
    {
      title: { type: String, required: true },
      strand: { type: String, required: true },
      subStrand: { type: String, required: true },
      allDay: { type: Boolean, default: false },
      alert: { type: Boolean, default: false },
      completion: { type: String, default: "0%" },
      date: { type: String, required: true },
    },
  ],
});

const Assessment = mongoose.model("Assessment", AssessmentSchema);
module.exports = Assessment;
