const jwt = require("jsonwebtoken");

const generateToken = (userInfo) => {
  const payload = {
    email: userInfo.email,
    role: userInfo.role,
  };

  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "2m",
  });

  return token;
};

module.exports = { generateToken };
