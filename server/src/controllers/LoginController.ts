import UserModel from "../models/UserModel";
import Express from "express";
import { compare, hash } from 'bcrypt'
import {sign} from 'jsonwebtoken'

const Login = async (req: Express.Request, res: Express.Response) => {
    const { username, password } = req.headers;
    
    await UserModel.findOne({username}).then((user) => {
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        if (!password) {
            return res.status(400).json({ error: "Password not provided" });
        }

        compare(password as string, user.passwordHash).then(async (result: boolean) => {
            if (result) {
                sign({username: user.username, email: user.email}, process.env.JWT_SECRET as string,{},(error: Error|null,token: string|undefined)=>{
                    if(error){
                        console.log(error);
                        return res.status(500).json({error: error})
                    }
                    else
                    {
                        // console.log(token);
                        res.cookie('token',token).json({ok: true,token: token,username: user.username,email: user.email})
                    }
                });
            }
            else
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

const Register = (req: Express.Request, res: Express.Response) => {
    const { username, email, password } = req.body;
    // console.log(req.body);

    UserModel.findOne({ $or: [{ username: username }, { email: email }] }).then((user) => {
        if (user) {
            return res.status(400).json({ error: "User already exists" })
        }
    }).catch((err) => {
        console.log(err);
        return res.status(500).json({ error: err })
    })

    hash(password, 10).then((passwordHash) => {
        UserModel.create({
            username: username,
            email: email,
            passwordHash: passwordHash
        }).then((user) => {
            user.save()
            return res.status(201).json({ok: true})
        }).catch((err) => {
            console.log(err);
        })
    }).catch((err) => {
        console.log(err);
        return res.status(500).json({ error: err })
    }
    )
}

export { Login, Register }