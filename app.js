import express from "express"

const pets=[
    {id:1,
    "name":"mestan"},
    {
    id:2,
    "name":"toplan",
    }
]
const app=express()
app.get ("/pets", (req, res)=>{
 
})
app.get("/pets/:id" ,(req, res)=>{
    return res.json(pets.find(({id})=> id ===+req.params.id))
})
app.listen (10000,()=>{
    console.log('salam')
})