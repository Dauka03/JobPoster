import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './config/database'; // Убедитесь, что путь правильный
import jobRoutes from './routes/jobPosts';
import applicationRoutes from './routes/applicationRoutes';
import authRoutes from './routes/authRoutes'; // Добавьте этот импорт

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/auth', authRoutes); // Добавьте этот маршрут

// Start server
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');
    await sequelize.sync(); // Синхронизация моделей с базой данных
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Завершение процесса в случае ошибки
  }
};

startServer();
