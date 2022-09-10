const router = require("express").Router();
const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");
const {req, res} = require("express");

const saltRounds = 10;

router.post("/sign-up", async (req, res) => {
  try {
    const { password } = req.body;

    if (
      !password ||
      !password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
      )
    ) {
      return res
        .status(400)
        .json({ message: "Senha não tem os requisitos necessários." });
    }

    const salt = await bcrypt.genSalt(saltRounds);
    console.log(salt);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await UserModel.create({
      ...req.body,
      passwordHash: hashedPassword,
    });

    delete user._doc.passwordHash;

    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;