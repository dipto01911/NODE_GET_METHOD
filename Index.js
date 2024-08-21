
const express = require('express');
var cors=require('cors');
var bodyParser = require('body-parser')
const app = express();
app.use(cors())
app.use(bodyParser.json())

const person=[{nam:'jamil',roll:'1914024',id:'1'},
              {nam:'karim',roll:'1914025',id:'2'},
              {nam:'supto',roll:'1914023',id:'3'},
              {nam:'rahim',roll:'1914024',id:'4'}
];

app.get('/person/:id',(req,res)=>{
    const Id=req.params.id;
    console.log(person[Id]);
    res.json(person[Id]);
}) 





app.listen(3000,()=>console.log('Listen'));