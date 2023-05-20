import express from 'express';
import { Router } from 'express';
import path from 'path';
import cors from 'cors';
import {MongoClient, ServerApiVersion} from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config();

//test

// setup database connection
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

// ping the database to confirm connection

await client.db("doadmin").command({ ping: 1 });
console.log("Connected successfully to Database");

// set up routes
const router = Router();

const app = express();
const port = 5000;

// set the views engine and views path
app.set('views', path.join(import.meta.url, '..', 'views'));
app.set('view engine', 'jade');

// put the router variables here
import exampleRouter from './routes/example.js';

// initialize the app with cors
app.use(cors());

// define the routes
app.use('/example', exampleRouter);

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});



export default {router, server, client};
