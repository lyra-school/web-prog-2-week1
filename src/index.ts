import express, {Application, Request, Response} from "express";
import morgan from "morgan";
import userRoutes from './routes/users';

const PORT = process.env.PORT || 3000;

const app:Application = express();

app.use(morgan("tiny"));

app.get("/ping", async (_req:Request, res:Response) => {
    res.send({
        message: "hello from Una"
    })
});

app.get("/bananas", async (_req:Request, res:Response) => {
    res.send('hello world, this is bananas');
});

app.use(express.json());

app.use('/api/v1/users', userRoutes);

var server = app.listen(PORT, function() {
    console.log("Listening on port: " + PORT)
});



