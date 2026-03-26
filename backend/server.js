const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// Routes
const projectRoutes = require('./routes/projectRoutes');
const skillRoutes = require('./routes/skillRoutes');
const contactRoutes = require('./routes/contactRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Load environment variables
dotenv.config();

const startServer = async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    await connectDB();
    
    const app = express();

    // Middleware
    app.use(cors());
    app.use(express.json());

    // API Routes
    app.use('/api/projects', projectRoutes);
    app.use('/api/skills', skillRoutes);
    app.use('/api/contact', contactRoutes);
    app.use('/api/admin', adminRoutes);

    // Root route
    app.get('/', (req, res) => {
      res.send('API is running...');
    });

    // Error Middleware
    app.use(notFound);
    app.use(errorHandler);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

startServer();
