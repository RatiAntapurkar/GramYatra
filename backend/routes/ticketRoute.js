import express from 'express'
import { addTicket , listTicket, removeTicket} from '../controllers/ticketController.js'
import multer from 'multer'

const ticketRouter = express.Router();

//Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

ticketRouter.post("/add",upload.single("image"),addTicket)

ticketRouter.get("/list",listTicket)

ticketRouter.post('/remove',removeTicket)

export default ticketRouter;