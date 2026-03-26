const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({}).sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a project
// @route   POST /api/projects
// @access  Private (In a real app, you'd add auth here)
const createProject = async (req, res) => {
  try {
    const { title, description, techStack, features, githubLink, liveLink, image } = req.body;
    const project = await Project.create({
      title, description, techStack, features, githubLink, liveLink, image
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getProjects, createProject };
