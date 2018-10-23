import bodyParser from 'body-parser';
import cors from "@robertoachar/express-cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan"; 
import { catchAll , notFound } from "./error";
import userRouter from "./user/user.router";

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'It works!' });
});

app.use('/api/users', userRouter);

app.use(notFound);
app.use(catchAll);

module.exports = app;
