import ticketModel from "../models/ticketModel.js";
import fs from 'fs';


const addTicket = async (req,res)=>{

    let image_filename = `${req.file.filename}`;

    const ticket = new ticketModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await ticket.save();
        res.json({success:true,message:"Ticket Added"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}


const listTicket = async(req,res)=>{
    try {
        const tickets = await ticketModel.find({});
        res.json({success:true,data:tickets})
    } catch (error) {
        res.json({success:false,message:"Error"})
    }
}


const removeTicket=async(req,res)=>{
    try {
        const ticket = await ticketModel.findById(req.body.id);
        fs.unlink(`uploads/${ticket.image}`,()=>{})

        await ticketModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Ticket Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addTicket,listTicket,removeTicket}



