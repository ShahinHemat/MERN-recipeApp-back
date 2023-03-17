// Setting up our server
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// Connecting to our environment variable
import dotenv from 'dotenv'; 
dotenv.config();

import { userRouter } from './routes/users.js';
import { recipesRouter } from './routes/recipes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use('/auth', userRouter);
app.use('/recipes', recipesRouter);

// Connecting to our database
mongoose.connect(`mongodb+srv://shahin:${process.env.MY_DATABASE_PASSWORD}@recipes.swm0uee.mongodb.net/recipes?retryWrites=true&w=majority`);

app.listen(3001, () => console.log('Server started on port 3001!'));