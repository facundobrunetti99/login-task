import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { email,username, password } = req.body;

  const pwhash = await bcrypt.hash(password, 10);

  try {

    const userFound= await User.findOne({email})
    if(userFound) 
      return res.status(400).json(["El correo ya esta en uso"]);

    const newUser = new User({
      username,
      email,
      password: pwhash,
    });
    const userSaved = await newUser.save();

  /*   const token = await createAccessToken({ id: userSaved._id });
    res.cookie("token", token);
      Esto lo comento por que si me registro y envio la cookie
      en este caso ya estoy como inciado por lo tanto no deberia ser asi
      solo la cookie la voy a utilizar cuando inicie sesion osea en el login
    */

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email:userSaved.email,
      createdAt: userSaved.createdAt,
      updateAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};
export const login = async (req, res) => {
  const {email, password } = req.body;
  try {
      const userFound =await User.findOne({email})

    if(!userFound)return res.status(400).json({message:"User not found"})
    const isMatch= await bcrypt.compare(password, userFound.password)

    if(!isMatch)return res.status(400).json({message:"User not found1"})

    const token = await createAccessToken({ id: userFound._id });
    res.cookie("token", token);

    res.json({
      id: userFound._id,
      username: userFound.username,
      email:userFound.email,
      createdAt: userFound.createdAt,
      updateAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({message: error.message})
  }

};

export const logout= (req,res)=>{
  res.cookie('token',"",{
  expires: new Date(0)
  })
  return res.sendStatus(200);
}

export const profile =async (req,res)=>{

  const userFound= await User.findById(req.user.id)
  if(!userFound)return res.satatus(400).json({message:"Usuario no encontrado"})
    res.json({
      id: userFound._id,
      username: userFound.username,
      emai:userFound.email,
      createdAt: userFound.createdAt,
      updateAt: userFound.updatedAt,
    });
}