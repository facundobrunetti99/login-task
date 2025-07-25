import History from "../model/history.model.js"

export const getHistories =async(req, res)=>{
    try{
        const histories=await History.find({
            project:req.project.id
        })
        if(!histories){
            throw new Error("Hitories  no encontradas")
        }

    }catch(error){
        res.status(404).json({message:error.message})

    }
}