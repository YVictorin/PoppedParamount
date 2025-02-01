import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

import indexRouter from "../server/src/routes/index.js";
import userRouter from "../server/src/routes/users.js"; 
import productRouter from "../server/src/routes/products.js";
import supportBotRouter from "../server/src/routes/supportBotRoute.js";
import loginRoute from "../server/src/routes/login.js";
import registerRoute from "../server/src/routes/register.js";
import accountRoute from "../server/src/routes/account.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

app.use(express.static(path.resolve(__dirname, '../client/dist')));

// use routers
app.use('/', indexRouter);
app.use('/api/users', userRouter); 
app.use('/api/products', productRouter);
app.use('/api/supportBot', supportBotRouter);
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);
app.use('/api/account', accountRoute);

// Simple error-handling middleware for development, used by login related routes
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error", error: err.message });
});

// Redirect all requests to index.html for frontend routing (React, Vue, etc.)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

// Export the app to Vercel serverless function
export default function handler(req, res) {
  app(req, res);
}
