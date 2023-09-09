const mongoose = require("mongoose");

function generatePaymentID() {
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000); // Generate a 10-digit random number
    return `PAY${randomNumber}`; // Concatenate "PAY" with the random number
}

const invoiceSchema = new mongoose.Schema({
    issueDate: Date,
    dueDate: Date
});

// const paymentsSchema = new mongoose.Schema({
//     mode: String,
//     status: String,
//     invoiceFile: String
// });

const paymentSchema = new mongoose.Schema(
    {    
        invoiceID: {
            type: String
        },
        reservationID: {
            type: String
        },
        userID: {
            type: String
        },
        invoiceDate:{
            type: invoiceSchema
        },
        charges:{
            type:String
        },
        addOnCharges:{
            type:String
        },
        taxes:{
            type:String
        },
        totalCharges:{
            type:String
        },
        promoCodeDeductions:{
            type:String
        },
        chargesAfterPromoCode:{
            type:String
        },
        paymentStatus:{
            type:String
        },
        paymentMethod:{
            type:String
        }
    },
    {versionKey: false}
);

const paymentModel = mongoose.model("master invoice", paymentSchema);

module.exports = paymentModel;