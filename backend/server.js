// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const { notFound, errorHandler } = require('./middleware/errorMiddleware');
// import certificateRoutes from "./routes/certificateRoutes.js";



// // Routes
// const projectRoutes = require('./routes/projectRoutes');
// const skillRoutes = require('./routes/skillRoutes');
// const contactRoutes = require('./routes/contactRoutes');
// const adminRoutes = require('./routes/adminRoutes');

// // Load environment variables
// dotenv.config();

// const startServer = async () => {
//   try {
//     console.log('Attempting to connect to MongoDB...');
//     await connectDB();
    
//     const app = express();

//     // Middleware
//     app.use(cors());
//     app.use(express.json());

//     // API Routes
//     app.use('/api/projects', projectRoutes);
//     app.use('/api/skills', skillRoutes);
//     app.use('/api/contact', contactRoutes);
//     app.use('/api/admin', adminRoutes);
//     app.use("/api/certificates", certificateRoutes);

//     // Root route
//     app.get('/', (req, res) => {
//       res.send('API is running...');
//     });

//     // Error Middleware
//     app.use(notFound);
//     app.use(errorHandler);

//     const PORT = process.env.PORT || 5000;

//     app.listen(PORT, () => {
//       console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error(`Failed to start server: ${error.message}`);
//     process.exit(1);
//   }
// };

// startServer();


import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Routes
import projectRoutes from './routes/projectRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import certificateRoutes from "./routes/certificateRoutes.js";

// Load env
dotenv.config();

const startServer = async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    await connectDB();

    const app = express();

    // Middleware
    app.use(cors());
    app.use(express.json());

    // Routes
    app.use('/api/projects', projectRoutes);
    app.use('/api/skills', skillRoutes);
    app.use('/api/contact', contactRoutes);
    app.use('/api/admin', adminRoutes);
    app.use('/api/certificates', certificateRoutes);

    app.get('/', (req, res) => {
      res.send('API is running...');
    });

    app.use(notFound);
    app.use(errorHandler);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

startServer();