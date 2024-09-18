import { Request, Response } from "express";

export const getUsers = (req:Request, res:Response) => {
    //TODO: get all users from the database
    res.json({"message":"getUsers received"})
};

export const getUserById = (req:Request, res:Response) => {
    // get a single user ID from the database
    let id:string = req.params.id;
    res.json({"message":`get a user ${id} received`});
};

export const createUser = (req:Request, res:Response) => {
    // create new user in database

    console.log(req.body); // log data for now

    res.json({"message":`create a new user with data from post message`});
};

export const updateUser = (req:Request, res:Response) => {
    console.log(req.body); // log data for now

    res.json({"message":`update user ${req.params.id} with data from post message`});
}

export const deleteUser = (req:Request, res:Response) => {
    // logic to delete user by ID from database
    
    res.json({"message": `delete user ${req.params.id} from the database`})
};