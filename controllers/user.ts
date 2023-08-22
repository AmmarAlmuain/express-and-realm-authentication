import { realmApp } from "../config/realm";
import { Request, Response } from "express";
import { User } from "../models/user";

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  let { email } = req.body;
  email = email.toLowerCase();
  console.log(email);
  if (!username) {
    return res.status(400).send({
      statusCode: 400,
      message: "You must provide a username to create an account.",
    });
  } else if (!email) {
    return res.status(400).send({
      statusCode: 400,
      message: "You must provide an email address to create an account.",
    });
  } else if (!password) {
    return res.status(400).send({
      statusCode: 400,
      message: "You must provide a password to create an account.",
    });
  }
  const checkUsername = await User.findOne({ username });
  const checkEmail = await User.findOne({ email });
  if (checkUsername) {
    return res.status(409).send({
      statusCode: 409,
      message: "This name is already taken.",
    });
  } else if (checkEmail) {
    return res.status(409).send({
      statusCode: 409,
      message: "This email address is already in use.",
    });
  }
  const registerUser = new User({
    username,
    email,
    password,
  });

  try {
    const response = await registerUser.save();
    if (response) {
      try {
        await realmApp.emailPasswordAuth.registerUser({
          email,
          password,
        });
        return res.status(200).send("Registration successful.");
      } catch (err) {
        return res.status(500).send("Registration failed.");
      }
    }
  } catch (error: any) {
    return res.status(400).send({
      statusCode: 400,
      message: `${error.message}.`,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { password } = req.body;
  let { email } = req.body;
  email = email.toLowerCase();

  if (!email) {
    return res.status(400).send({
      statusCode: 400,
      message: "You must provide an email address to sign in.",
    });
  } else if (!password) {
    return res.status(400).send({
      statusCode: 400,
      message: "You must provide a password to sign in.",
    });
  }

  const userData: any = await User.findOne({ email });

  if (!userData) {
    res.status(404).send({
      statusCode: 404,
      message:
        "User not found. Please check your email or username and try again. If you don't have an account, please sign up.",
    });
  }

  const isPasswordValid = await userData.verifyPasswordSync(password);

  if (!isPasswordValid) {
    res.status(401).send({
      statusCode: 401,
      message:
        "Invalid credentials. Please enter a valid email or username and password.",
    });
  }

  const credentials = Realm.Credentials.emailPassword(email, password);

  try {
    const user = await realmApp.logIn(credentials);
    res.status(200).send({
      statusCode: 200,
      message: "Login successful",
    });
  } catch (err) {
    res.status(401).send({
      statusCode: 401,
      message:
        "Invalid credentials. Please enter a valid email or username and password.",
    });
  }
};
