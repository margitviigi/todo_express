const express = require('express')
const path = require('path')
const app = express()
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))
app.get('/', (req, res)=>{
    const tasks = ['Study HTML','Study CSS', 'Study JS'] 
    
    res.render('index',{tasks: tasks} )
})
app.listen(3001, () =>{
    console.log('Server is started http://http://localhost:3001')
} )
