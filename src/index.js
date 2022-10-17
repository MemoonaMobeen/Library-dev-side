// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
//   res.json({"mona":222, })
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended:true}));
 
//  console.log(path.join(__dirname, '../public'))
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));



app.get("/", (req, res)=>{
    res.send("<h1>Hi there, Today m focusing on a JavaScript runtime built on Chrome's V8 JavaScript engine Likewise.</h1>");
});
// app.get("/about", (req, res)=>{
//     res.send("<h1>Marvellous mona's keys :))</h1> ");
// })
// app.get("/contact", (req,res)=>{
//     res.send("<h1>monamoon612@gmail.com</h1>");
// })
// app.get("/HomeTour", (req, res)=>{
//     res.send("My Room Beauty :))")
    
// })
// app.get("/BMI", (req, res)=>{
//     res.sendFile(__dirname+"/index.html")
// })
// app.post("/BMI",(req,res)=>{
//     console.log(req.body);
//     let n1 = req.body.v1;
//     let n2 = req.body.v2;
// let  sum = n1 / (n1*n2);
// res.send("<h1>Your BMI is: </h1>" + sum);
// })
 
app.listen(port,  (req,res)=>{
    console.log("server is running on 5000");
    
    
});