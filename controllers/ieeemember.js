const { response } = require('express')
const member = require('../models/ieeemember')

const show = (req,res,next)=>{
    member.find()
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
    let Member = new member({
        Name:req.body.Name,
        Sic:req.body.Sic,
        Branch:req.body.Branch,
        Contact:req.body.Contact
    })
    Member.save()
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
    let memberid = req.body.memberid
    // member.find( memberid )
    // .then(() =>{
    //     res.body({
    //         res.json({
    //             message:'member deleted'
    //         })
    //     })
    // })
    member.deleteOne( memberid )
    .then(() =>{    
        res.json({
            
                    message:'member deleted'
                })
        })   
    .catch(error =>{
        res.json({
            message : 'An error occoured'
        })
    })
}

module.exports = {show, add, destroy}