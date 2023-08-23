import UserModel from "../models/UserModel";
import Express from "express";
import { compare, hash } from 'bcrypt'

const Login = (req: Express.Request, res: Express.Response) => {
    const { username, email, password } = req.body;

    console.log(req.body);
    
    UserModel.findOne({ $or: [{ username: username }, { email: email }] }).then((user) => {
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        compare(password, user.passwordHash).then((result) => {
            if (result) {
                return res.status(200).json({ message: "Success", user: user });
            }
            return res.status(401).json({ error: "Wrong password" });
        }
        ).catch((err) => {
            console.log('error detected')
            console.log(err);
            
            return res.status(500).json({ error: err });
        }
        );

    });
};

const Register=(req: Express.Request,res: Express.Response)=>{
    const {username,email,password}=req.body;
    // console.log(req.body);
    
    UserModel.findOne({$or:[{username:username},{email:email}]}).then((user)=>{
        if(user){
            return res.status(400).json({error:"User already exists"})
        }
    }).catch((err)=>{
        console.log(err);
        return res.status(500).json({error:err})
    })

    hash(password,10).then((passwordHash)=>{
        UserModel.create({
            username:username,
            email:email,
            passwordHash:passwordHash
        }).then((user)=>{
            user.save()
            return res.status(201).json({message:"User created",user:user})
        }).catch((err)=>{
            console.log(err);
        })
    }).catch((err)=>{
        console.log(err);
        return res.status(500).json({error:err})
    }
    )
}

export {Login,Register}