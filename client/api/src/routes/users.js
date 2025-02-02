import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js"

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    try {
        const users = await User.getAll();
        res.status(200).send(users);  
    } catch(e) {
        console.error(e);
        res.status(500).send("There was a server issue getting users.");
    }
  })
  .post(async (req, res) => {
    try {      
      const hashedPassword = await bcrypt.hash(req.body.password, 10); 
      await User.addUser(req.body.firstName, req.body.lastName, hashedPassword, req.body.email)  // add user with hashed password to database
      res.status(201).send("User created successfully.");
    } catch (e) {
      console.error(e);
      res.status(500).send("There was a server issue adding user. " + e);
    }
  });


export default router;
