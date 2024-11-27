// const UserModel = require("../models/userModel");

exports.login = async (req, res) => {

  const { email, password } = req.body;


  if (email == 'admin@juice.com' && password == 'adminpass') {
    res.status(200).json({
      message: 'Login success',
      user: {
        id: 1,
        username: 'admin',
        email: 'admin@juice.com'
      }
    })
  } else {
    res.status(400).json({
      message: 'Login fail'
    })
  }


}
