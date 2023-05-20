import express from 'express';
import path from 'path';
import cors from 'cors';
import {MongoClient, ServerApiVersion} from 'mongodb';
export const exampleRouter = express.Router();
import * as dotenv from 'dotenv';
dotenv.config();


const uri = process.env.MONGO_URI;
const client = new MongoClient(uri,  {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);
await client.connect();

exampleRouter.post('/', (req, res) => {
    console.log("Hello Wolrld!!");
    res.send("Hello World!!");
});

exampleRouter.get('/', (req, res) => {
    let temp = client.db("roomies-app-db").collection("Users").find({}).toArray()
    .then((result) => {
        console.log(result);
        res.send(result);
    })  
    .catch((err) => {
        console.log(err);

    });
});


export default exampleRouter;