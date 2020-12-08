const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

//admin
const adminRoutes = require('./routes/admin')

//club_expense
const memberRoutes = require('./routes/member')
const AuthRoutes = require('./routes/auth')
const ExpenseRoutes  = require('./routes/expense')
const MusicExpenseRoutes  = require('./routes/musicexpense')
const CricketExpenseRoutes  = require('./routes/cricketexpense')
const RoboticsExpenseRoutes  = require('./routes/roboticsexpense')
const badmintonexpenseRoutes  = require('./routes/badmintonexpense')
const basketballexpenseRoutes  = require('./routes/basketballexpense')
const ieeeexpenseRoutes  = require('./routes/ieeeexpense')
const ddxexpenseRoutes  = require('./routes/ddxexpense')
const greenexpenseRoutes  = require('./routes/greenexpense')
const photographyexpenseRoutes  = require('./routes/photographyexpense')
const scholarexpenseRoutes  = require('./routes/scholarexpense')
const theatreexpenseRoutes  = require('./routes/theatreexpense')


//club_member
const BadmintonmemberRoutes = require('./routes/badmintonmember')
const BasketballmemberRoutes = require('./routes/basketballmember')
const CricketmemberRoutes = require('./routes/cricketmember')
const DdxmemberRoutes = require('./routes/ddxmember')
const GreenmemberRoutes = require('./routes/greenmember')
const IeeememberRoutes = require('./routes/ieeemember')
const MusicmemberRoutes = require('./routes/musicmember')
const PhotographymemberRoutes = require('./routes/photographymember')
const RoboticsmemberRoutes = require('./routes/roboticsmember')
const ScholarmemberRoutes = require('./routes/scholarmember')
const TheatrememberRoutes = require('./routes/theatremember')


mongoose.connect('mongodb+srv://chinmay:chinmay1@cluster0.rleec.mongodb.net/testdb?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology:true})
const db = mongoose.connection

db.on('error', (err) =>{
    console.log(err)
})

db.once('open', () =>{
    console.log('Database Connection Established!')
})

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/uploads',express.static('uploads'))
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})
app.get("/", (req, res) => {
    res.send("Hello to the server");
  });

//admin
app.use('/api/admin', adminRoutes)

//club_expense
app.use('/api/member', memberRoutes)
app.use('/api/', AuthRoutes)
app.use('/api/expense', ExpenseRoutes)
app.use('/api/musicexpense', MusicExpenseRoutes)
app.use('/api/cricketexpense', CricketExpenseRoutes)
app.use('/api/roboticsexpense', RoboticsExpenseRoutes)
app.use('/api/badmintonexpense', badmintonexpenseRoutes)
app.use('/api/basketballexpense', basketballexpenseRoutes)
app.use('/api/ieeeexpense', ieeeexpenseRoutes)
app.use('/api/ddxexpense', ddxexpenseRoutes)
app.use('/api/greenexpense', greenexpenseRoutes)
app.use('/api/scholarexpense', scholarexpenseRoutes)
app.use('/api/photographyexpense', photographyexpenseRoutes)
app.use('/api/theatreexpense', theatreexpenseRoutes)

//club_members
app.use('/api/badmintonmember', BadmintonmemberRoutes)
app.use('/api/basketballmember', BasketballmemberRoutes)
app.use('/api/cricketmember', CricketmemberRoutes)
app.use('/api/ddxmember', DdxmemberRoutes)
app.use('/api/greenmember', GreenmemberRoutes)
app.use('/api/ieeemember', IeeememberRoutes)
app.use('/api/musicmember', MusicmemberRoutes)
app.use('/api/photographymember', PhotographymemberRoutes)
app.use('/api/roboticsmember', RoboticsmemberRoutes)
app.use('/api/scholarmember', ScholarmemberRoutes)
app.use('/api/theatremember', TheatrememberRoutes)
