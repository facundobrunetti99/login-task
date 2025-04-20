import mongoose from "mongoose";


export const conectDB = async () =>{

    try{
        await  mongoose.connect('mongodb://localhost/DBproject')
        console.log("Base de datos conectada")
    }
    catch (error){
        console.log(error, "Error en la conexion de la base de datos")

    }

}