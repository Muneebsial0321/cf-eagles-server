import { Request, Response } from "express"


const GetOne = async (req: Request, res: Response) => {
    res.json({ users: [] })
}

const GetAll = async (req: Request, res: Response) => {
    res.json({ users: [] })
}
const Update = async (req: Request, res: Response) => {

}
const Delete = async (req: Request, res: Response) => {

}

export { GetAll, Delete, GetOne, Update }