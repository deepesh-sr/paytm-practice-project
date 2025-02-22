const z = require("zod");
const { User } = require(".././db");
// const express = require("express");
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config')

const signupBody = z.object({
  firstName: z.string().require(),
  lastName: z.string().require(),
  password: z.string().require(),
  email: z.string(),
});

// const result = mySchema.safeParse(User);

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect Inputs",
    });
  }

  const existingUser = await User.findOne({
    email: req.body.email,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "email already taken",
    });
  }

  const user = await User.create({
    firstName: req.body.firstName, 
    lastName : req.body.lastName,
    email : req.body.email,
    password : req.body.password
  })

  const userId = user._id;

  const token = jwt.sign({
    userId 
  } , JWT_SECRET)
});

res.json({
    message : "User created successfully" , 
    token: token
})
