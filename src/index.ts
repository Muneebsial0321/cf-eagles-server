import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import { userRouter } from './routes/user.route';


dotenv.config();

const app: Application = express();


// Middleware
app.use(express.json());
app.use("/users", userRouter)


app.get("/", (req: Request, res: Response) => {
    res.json({ message: "some message" })
})

// routes


// Server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});
