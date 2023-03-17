import mongoose from "mongoose";

// This is like setting constraints/rules for the fields in your database column (here called 'users') in postgreSQL's CREATESCRIPT
const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ingredients: [{
        type: String,
        required: true
    }],
    instructions: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    cookingTime: {
        type: Number,
        required: true
    },
    userOwner: {
        type: mongoose.Schema.Types.ObjectId, ref: "users",
        required: true
    },
});

export const RecipeModel = mongoose.model('recipes', RecipeSchema);