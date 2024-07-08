import express from 'express';
import morgan from 'morgan';
import 'dotenv/config.js';

const app = express()

//import routes
import userRoutes from './routes/users.routes.js';
import taskRoutes from './routes/tasks.routes.js';
import authRoutes from './routes/auth.routes.js';
import { authenticateToken } from './middlewares/authenticate.middleware.js';
//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', authenticateToken ,taskRoutes);
app.use('/api/login', authRoutes);

export default app;