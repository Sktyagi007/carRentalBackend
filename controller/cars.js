const { default: mongoose } = require("mongoose");
const reservationTypeModel = require("../models/reservationType");

const vehicleModel = require("../models/cars")

exports.getSelfVehicles = async (req,res)=>{
    let data = req.body;
    console.log(data);
    try {
        
        await vehicleModel.find({},{"self":1}).then((response)=>{
            console.log(response[0].self);
            res.status(200).send({
                result:response[0].self
            })
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
        await vehicleModel.find({},{"chauffer":1}).then((response)=>{
            console.log(response[0].chauffer);
            res.status(200).send({
                result:response[0].chauffer
            })
        }).catch((err)=>{
            console.log(err);
        });
        
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



exports.creatSelfAndChaufferVehicle = async (req,res)=>{
    let data = req.body;
    console.log(data);
    try {
        let vehicle = await vehicleModel.exists(data);
        if(vehicle){
            res.status(200).json({
                selfExists:true,
                selfCreated:false
            })
        }else{
            await vehicleModel.create(data).then(()=>{
                res.status(200).json({
                    selfExists:false,
                    selfCreated:true
                })
            }).catch((err)=>{
                console.log(err);
                res.status(200).json({
                    selfExists:false,
                    selfCreated:false
                })
            })
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            result:"api failure"
        })
    }
}

