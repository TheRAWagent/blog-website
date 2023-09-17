import { Request,Response } from "express";


const Logout = async (req: Request, res: Response) => {
    console.log("Logout");
    res.cookie('token','').json({message: "Logged out"})
}

export default Logout;