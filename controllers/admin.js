const { response } = require('express')
const admin = require('../models/admin')

const show = (req,res,next)=>{
    admin.find()
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

const add =(req,res,next) =>{
    let Admin = new admin({
        Username: req.body.Username,
        Password: req.body.Password,
        Clubname: req.body.Clubname
    })
    Admin.save()
    .then(response =>{
        res.json({
            message: 'Added successfully'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error occoured'
        })
    })
}
const destroy = (req,res,next)=>{
    let username = req.body.Username
    
    admin.findOneAndDelete( {Username : username} )
    .then((response) =>{   
        if(response){
            res.json({
                message : 'member deleted'
                })
        } 
        else{
            res.json({
                message : 'member not found'
                    })
        }
        })   
    .catch(error =>{
        res.json({
            message : 'An error occoured'
        })
    })
}

module.exports = {show, add, destroy}