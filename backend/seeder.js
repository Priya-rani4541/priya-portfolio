const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const Project = require('./models/Project');
const Skill = require('./models/Skill');
const Admin = require('./models/Admin');
const connectDB = require('./config/db');

dotenv.config();

const projects = [
  {
    title: "AI-Based Healthcare Triage Chatbot",
    description: "Created backend-driven healthcare chatbot to analyze user symptoms and provide severity-based recommendations (emergency, moderate, mild). Implemented REST APIs, decision-based logic for symptom classification, and integrated Google Gemini API for natural language understanding. Delivered real-time symptom analysis with ~90% consistency in severity classification, improving user guidance efficiency and ensuring safe recommendations without direct medical diagnosis.",
    techStack: ["Node.js", "Express.js", "MongoDB", "REST API", "Google Gemini API"],
    features: ["Real-time symptom analysis", "~90% consistency", "Severity-based recommendations", "Google Gemini Integration"],
    githubLink: "https://github.com/Priya-rani4541",
    liveLink: "",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
  },
  {
    title: "SwasthyaSaathi App",
    description: "Developed an Android app to improve healthcare accessibility by integrating key features like appointment booking, medical records management, health reminders, government schemes, and health tips.",
    techStack: ["XML", "Kotlin", "Firebase"],
    features: ["Appointment booking", "Medical records management", "Health reminders"],
    githubLink: "https://github.com/Priya-rani4541",
    liveLink: "",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
  },
  {
    title: "MealPass App",
    description: "The MealPass App fulfills the task requirements by displaying a student image, input fields, and a functional button using Jetpack Compose. The app demonstrates clean UI design and proper layout structure.",
    techStack: ["Kotlin", "Jetpack Compose"],
    features: ["Clean UI design", "Functional buttons", "Proper layout structure"],
    githubLink: "https://github.com/Priya-rani4541",
    liveLink: "",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3"
  },
  {
    title: "Covid-19 Case And Death By Race Ethnicity",
    description: "Analyzed COVID-19 case and death data across racial and ethnic groups to uncover disparities, identify trends, and evaluate the impact of demographic factors on the pandemic. Conducted data analysis in Python using Pandas and Seaborn to compute growth rates, compare age-adjusted and crude rates, and visualize trends in case and death data.",
    techStack: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn"],
    features: ["Data cleaning", "Statistical analysis", "Visualization", "Trend identification"],
    githubLink: "https://github.com/Priya-rani4541",
    liveLink: "",
    image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57"
  },
  {
    title: "Caste Census Dashboard",
    description: "Build an interactive Excel dashboard to analyze and visualize caste-based population data across Indian states, providing actionable insights for social research and policy planning. Performed state-wise caste population, literacy, and employment data in Excel using pivot tables, slicers, and charts for dynamic insights.",
    techStack: ["Excel"],
    features: ["Interactive dashboard", "Pivot tables", "Slicers", "Charts"],
    githubLink: "https://github.com/Priya-rani4541",
    liveLink: "",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c"
  }
];

const skills = [
  // Languages
  { name: "Python", category: "Languages", level: 75 },
  { name: "C", category: "Languages", level: 80 },
  { name: "C++", category: "Languages", level: 85 },
  { name: "Java", category: "Languages", level: 85 },
  { name: "XML", category: "Languages", level: 90 },
  { name: "Kotlin", category: "Languages", level: 90 },

  // Frontend
  { name: "HTML", category: "Frontend", level: 90 },
  { name: "CSS", category: "Frontend", level: 85 },
  { name: "Bootstrap", category: "Frontend", level: 75 },

  // Backend
  { name: "Node.js", category: "Backend", level: 80 },
  { name: "Express.js", category: "Backend", level: 80 },
  { name: "REST APIs", category: "Backend", level: 85 },

  // Databases
  { name: "MongoDB", category: "Databases", level: 85 },
  { name: "MySQL", category: "Databases", level: 75 },
  { name: "Firebase", category: "Databases", level: 70 },

  // Tools
  { name: "GitHub", category: "Tools", level: 85 },
  { name: "Power BI", category: "Tools", level: 80 },
  { name: "Figma", category: "Tools", level: 75 },
  { name: "Jupyter Notebook", category: "Tools", level: 80 },
  { name: "VS Code", category: "Tools", level: 90 }
];

const importData = async () => {
  try {
    await connectDB();

    await Project.deleteMany();
    await Skill.deleteMany();
    await Admin.deleteMany();

    await Project.insertMany(projects);
    await Skill.insertMany(skills);
    
    // Create Default Admin
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);
    await Admin.create({
      email: 'admin@portfolio.com',
      password: hashedPassword
    });

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
