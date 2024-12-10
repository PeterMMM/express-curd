const bcrypt = require('bcrypt');
const User = require("../models/userModel");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      message: 'Login success',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      }
    })
  } else {
    res.status(400).json({
      message: 'Login fail'
    })
  }
}

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).send({
      message: 'User created'
    });
  } catch (error) {
    res.status(400).json({
      message: 'Fail to create new account!'
    });
  }
}
