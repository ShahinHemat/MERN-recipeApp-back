import mongoose from "mongoose";

// This is like setting constraints/rules for the fields in your database column (here called 'users') in postgreSQL's CREATESCRIPT
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipes" }],
});

export const UserModel = mongoose.model('users', UserSchema);