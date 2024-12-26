import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://mewacoustic1221:01644962130Aa@cluster0.layq3.mongodb.net/food-del").then(()=>console.log("DB Connected"));
}