const { response } = require('express')
const cricketexpense = require('../models/cricketexpense')

const show = (req,res,next)=>{
    cricketexpense.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occoured'
        })
    })
}

const credit =(req,res,next) =>{
    let CricketExpense = new cricketexpense({
        Name:req.body.Name,
        Amount:req.body.Amount,
        Type:req.body.Type,
        Date:req.body.Date
    })
    CricketExpense.save()
    .then(response =>{
        res.json({
            message: 'Credited successfully'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error occoured'
        })
    })
}
module.exports = {credit, show}