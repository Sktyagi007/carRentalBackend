const { default: mongoose } = require("mongoose");
const vehicleModel = require("../models/cars");
const reservationTypeModel = require("../models/reservationType");

exports.getSelfVehicles = async (req,res)=>{
    let data = req.body;
    console.log(data);
    try {
        let reservationType = data["reservation type"];
        console.log(reservationType);

        let query = { [`${reservationType}`]: { $exists: true } };
        console.log(query);

        await reservationTypeModel.findOne(query).then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        })
        
        
    } catch (error) {
        console.log(error);
    }
}

exports.getchaufferVehicles = async (req,res)=>{
    let data = req.body;
    console.log(data);
    try {
        let query = {
            drivenType : data.drivenType
        }
        
    } catch (error) {
        
    }
}


exports.addSelfVehicles = async (req,res)=>{
    let data = req.body;
    console.log(data);
    try {
        await vehicleModel.findOneAndUpdate({},{$push:{"self": data}},{new:true}).then((response)=>{
            console.log(response);
            res.status(200).json({
                result:"self driven car added"
            })
        }).catch((err)=>{
            console.log(err);
            res.status(200).json({
                result:"unable to add self driven car"
            })
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            result:"api failure"
        })
    }
}


exports.addChaufferVehicles = async (req,res)=>{
    let data = req.body;
    console.log(data);
    try {
        await vehicleModel.findOneAndUpdate({},{$push:{"chauffer": data}},{new:true}).then((response)=>{
            console.log(response);
            res.status(200).json({
                result:"chauffer driven car added"
            })
        }).catch((err)=>{
            console.log(err);
            res.status(200).json({
                result:"unable to add chauffer driven car"
            })
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            result:"api failure"
        })
    }
}