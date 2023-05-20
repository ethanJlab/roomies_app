import express from 'express';
import path from 'path';
import cors from 'cors';
export const exampleRouter = express.Router();

exampleRouter.post('/', (req, res) => {
    console.log("Hello Wolrld!!");
    res.send("Hello World!!");
});


export default exampleRouter;