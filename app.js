// import
const express = require("express")
const path = require("path")
const app = express()
const session = require("express-session")
const port = 3000
const bodyParser = require('body-parser')
const router = require("./router/router")
const nocache = require("nocache")

// view engine
app.set("view engine", "ejs")

// static file
app.use("/static", express.static(path.join(__dirname, "public")));

// session
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}))
// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/route", router)
app.use(nocache());

// route
app.get("/", (req, res) => {
  if(req.session.user){ 
    res.render("home.ejs")
  }else{
    res.render("index",{data:""})
  }
})
app.get("/invalid",(req,res)=>{
  if(req.session.user){ 
    res.render("home.ejs")
  }else{
  res.render("index",{data:"invalid username or password"})
  }
})

app.get("/home",(req,res)=>{
  if(req.session.user){ 
    res.render("home.ejs")
  }else{
    res.send("unauthorize User")
  }
})
app.get("/logout",(req,res)=>{
  req.session.destroy((err)=>{
    if(err){
      console.log(err)
    }else{
      res.render("index",{data:"logout sucesssfully"})
    }
  })
})
// listen
app.listen(port, (req, res) => {
  console.log(`server started http://localhost:${port}`)
})