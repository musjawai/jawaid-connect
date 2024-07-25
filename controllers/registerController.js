const User = require("../model/User");
const userProfile = require("../model/userProfile");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd, firstname, lastname } = req.body;
  if (!user || !pwd || !firstname || !lastname) {
    return res.status(400).json({
      message:
        "Username, password, first name, and last name requried for login",
    });
  }
  const duplicate = await User.findOne({ username: user }).exec();
  if (duplicate) return res.sendStatus(409);

  try {
    const hashedPwd = await bcrypt.hash(pwd, 10);

    const auth = await User.create({
      username: user,
      password: hashedPwd,
    });

    const profile = await userProfile.create({
      userId: auth._id,
      username: user,
      firstName: firstname,
      lastName: lastname,
    });

    res.status(201).json({ message: `${user} successfully created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
