import { hashPassword } from "../helpers/hashPassword.js";
import { User } from "../models/user.model.js";
import { passport } from "../config/passport/passport.config.js";

export async function registerUser(req, res) {
  const { username, email, password } = req.body;

  try {
    const checkIfDocExist = await User.exists({ email });

    if (checkIfDocExist) {
      throw { status: 409, message: "Email already registered" };
    }

    const hashedPassword = await hashPassword(password);

    const newUserDoc = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    const userDoc = await User.findById(newUserDoc.id).select("-__v -password");

    req.logIn(userDoc, (err) => {
      if (err) return res.status(500).send("Login error :" + err);
      return res.send(userDoc);
    });
  } catch (error) {
    res.status(error.status).send(error.message);
  }
}

export async function loginUser(req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(404).send("Authentication error :" + err);

    if (!user) return res.status(401).send(info.message);

    req.logIn(user, (err) => {
      if (err) return res.status(404).send("Login error :" + err);
      return res.send(user);
    });
  })(req, res, next);
}

export function logoutUser(req, res) {
  req.logOut(() => {
    res.send("User logged out");
  });
}

export function userStatus(req, res) {
  if (req.isAuthenticated()) {
    return res.send(req.user);
  } else {
    return res.status(401).send("Session is expired");
  }
}
