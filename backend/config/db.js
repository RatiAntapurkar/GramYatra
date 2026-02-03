import mongoose from "mongoose";
export const connectDB =async()=>{
    await mongoose.connect('your_db_link_here').then(()=>console.log('DB connected'));
}
