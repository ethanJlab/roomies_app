import express from 'express';
import { Router } from 'express';
import path from 'path';
import cors from 'cors';
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



export default router;
