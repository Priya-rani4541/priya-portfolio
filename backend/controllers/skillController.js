const Skill = require('../models/Skill');

// @desc    Get all skills
// @route   GET /api/skills
// @access  Public
const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find({}).sort({ createdAt: 1 });

    // DEBUG (optional)
    console.log("Skills fetched:", skills);

    res.status(200).json(skills);

  } catch (error) {
    console.error("GET SKILLS ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a skill
// @route   POST /api/skills
// @access  Private
const createSkill = async (req, res) => {
  try {
    const { name, category, level, icon } = req.body;

    // Validation
    if (!name || !category || !level || !icon) {
      return res.status(400).json({
        message: "All fields (name, category, level, icon) are required"
      });
    }

    const skill = await Skill.create({
      name,
      category,
      level,   // ✅ FIXED
      icon     // ✅ FIXED
    });

    res.status(201).json(skill);

  } catch (error) {
    console.error("CREATE SKILL ERROR:", error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getSkills, createSkill };