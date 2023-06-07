// ***Student API operations----------
const express = require('express');
require('../config');
const Student = require('./student');

const app = express();
app.use(express.json());

// ************create********************
app.post("/create", async (req,resp)=>{
    let data = new Student(req.body);
    let results = await data.save();  
    resp.send(results)
    console.log("created")
    // Request Type:POST
})
// ***************Find*****************
app.get('/list', async (req, resp)=>{
    let data = await Student.find();
    resp.send(data);
    // Request Type:GET
})

// **************Delete*****************
app.delete('/delete/:_id', async (req, resp)=>{
   console.log(req.params);
   let data = await Student.deleteOne(req.params);
    resp.send('Deleted');
    // Request Type: DELETE
})

// ***************UPDATE*****************
app.put('/update/:_id', async (req, resp)=>{
    console.log(req.params);
    let data = await Student.updateOne(
        req.params,{$set: req.body}
    );
    resp.send(data);
    // Request Type: PUT
})

// **************Search****************
app.get('/search/:key', async (req, resp)=>{
    let data = await Student.find({'$or':[
        {sname:{$regex:req.params.key}},
        {sclass:{$regex:req.params.key}}
    ]});
    resp.send(data);
})

app.listen(5002);