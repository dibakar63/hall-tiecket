const mongoose=require("mongoose");

const TicketSchema=new mongoose.Schema(
    {
        username:{
            type:Boolean,
            required:true,
            unique:true,
        }
    }
)

export default mongoose.model("Ticket,TicketSchema");