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
// router.get("/logout",(req,res)=>{
//   req.session.destroy((err)=>{
//     if(err){
//       console.log(err)
//     }else{
//       res.render("index",{data:"logout sucesssfully"})
//     }
//   })
// })

module.exports=router