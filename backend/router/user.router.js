const express = require("express");
const connection = require("../services/dbConnection.services");
const router = express.Router();

router.post("/signup", (req, res) => {
  let user = req.body;
  query = "SELECT email,paswword,role,status from user where email=?";
  connection.query(query, [user.email], (err, result) => {
    if (!err) {
      if (result.length <= 0) {
        query =
          "insert into user(name,contactNumber,email,password,status,role) values(?,?,?,?,'false','user)";
        connection.query(
          query,
          [user.name, user.contactNumber, user.email, user.password],
          (err, result) => {
            if (!err) {
              return res
                .status(200)
                .json({ message: "Succesfull registered." });
            } else {
              return res.status(500).json(err);
            }
          }
        );
      } else {
        return res.status(400).json({ message: "Email already exits." });
      }
    } else {
      return res.status(500).json(err);
    }
  });
});

module.exports = router;
