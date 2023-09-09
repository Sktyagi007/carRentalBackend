const paymentModel = require("../models/invoice");
const reservationModel = require("../models/reservation");
const reservationTypeModel = require("../models/reservationType");
const userModel = require("../models/user");

async function createInvoice(reservationID, userID, invoiceID) {
    try {
        let query = {
            invoiceID: invoiceID,
            reservationID: reservationID,
            userID: userID,
            invoiceDate: {
                issueDate: `${Date.now()}`,
                dueDate: `${Date.now()}`
            },
            charges: "",
            addOnCharges: "",
            taxes: "",
            totalCharges: "",
            promoCodeDeductions: "",
            chargesAfterPromoCode: "",
            paymentStatus: "",
            paymentMethod: ""
        }

        let response = await paymentModel.create(query);
        // console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}



exports.createReservation = async (req, res) => {
    let data = req.body;
    // console.log(data);
    try {
        let epochTime = Date.now();
        // console.log(epochTime);
        let reservationID = `RES${epochTime}`;
        let invoiceID = `IN${epochTime}`;
        // console.log(reservationID,userID,invoiceID);
        data.reservationID = reservationID;
        data.invoiceID = invoiceID;
        let userID = data.userID;
        // console.log(data);

        await reservationModel.create(data).then(async () => {

            let invoiceGeneration = await createInvoice(reservationID, userID, invoiceID);
            if(invoiceGeneration){
                res.status(200).json({
                    reservationCreated:true,
                    invoiceCreated:true,
                    reservationID:reservationID,
                    invoiceID:invoiceID
                })
            }else{
                res.status(200).json({
                    reservationCreated:true,
                    invoiceCreated:false
                })
            }
        }).catch((err) => {
            console.log(err);
            res.status(200).json({
                reservationCreated:false,
                invoiceCreated:false
            })
        })
        


    } catch (error) {
        console.log(error);
        res.status(500).json({
            result:"api faliure"
        })
        
    }
}


exports.editReservation = async (req,res) => {
    let data = req.body;
    console.log(data);
    try {
        let query = {
            reservationID:data.reservationID
        }
        let reservation = reservationModel.exists(query);
        if(reservation){
            
        }else{
            res.status(200).json({
                reservationExist:false,
            })
        }

    } catch (error) {
        console.log(error);
    }
}


exports.createReservationType = async (req,res) => {
    let data = req.body;
    console.log(data);
    try {
        
        // let reservation = reservationTypeModel.exists(query);
        // if(reservation){
        //     res.status(200).json({
        //         reservationTypeExist:true,
        //         reservationTypeCreated:false
        //     })
        // }else{
            await reservationTypeModel.create(data).then(()=>{
                res.status(200).json({
                    reservationTypeExist:false,
                    reservationTypeCreated:true
                })
            }).catch((err)=>{
                console.log(err);
            })
        // }

    } catch (error) {
        console.log(error);
    }
}