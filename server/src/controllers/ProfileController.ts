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
            return res.status(200).json(decoded)
        }
    })
}

export default Profile;
