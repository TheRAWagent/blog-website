import { Request, Response } from 'express';
import { verify, VerifyErrors } from 'jsonwebtoken';

const Profile = async (req: Request, res: Response) => {
    const {token} = req.cookies;
    if(!token){
        return res.status(401).json({error: "Unauthorized"})
    }
    verify(token,process.env.JWT_SECRET as string,(error: VerifyErrors | null,decoded: any)=>{
        if(error){
            console.log(error);
            return res.status(500).json({error: error})
        }
        else{
            res.json({email: decoded.email,username: decoded.username})
        }
    })
}

export default Profile;
