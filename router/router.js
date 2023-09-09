const express = require("express")
const router = express.Router()

const data = {
  username: "jamsheerply",
  password: 12345
}

// user login
router.post("/login", (req, res) => {
  if (req.body.username === data.username && req.body.password == data.password) {
    req.session.user = req.body.username
    res.redirect("/home")
  } else {
    res.redirect("/invalid")
  }
})
module.exports=router