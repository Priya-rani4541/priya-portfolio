const Skill = require('../models/Skill');

// @desc    Get all skills
// @route   GET /api/skills
// @access  Public
const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find({});
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a skill
// @route   POST /api/skills
// @access  Private
const createSkill = async (req, res) => {
  try {
    const { name, category, icon } = req.body;
    const skill = await Skill.create({ name, category, icon });
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getSkills, createSkill };
