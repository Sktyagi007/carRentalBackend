const userModel = require("../models/user");

exports.createUser = async (req,res)=>{
    let data = req.body;
    console.log(data);
    try {
        let query = {
            emailID : data.emailID
        }
        let user = await userModel.exists(query);
        if(user){
            await userModel.findOne({"_id":user._id}).then((response)=>{
                res.status(200).json({
                    userCreated: false,
                    userExist : true,
                    userID:response.userID
                })
            }).catch((err)=>{
                console.log(err);
            })
            
            
        }else{
            let userID = `US${Math.floor(Math.random() * 10000000000)}`
            let query1 = {
                userID: userID,
                firstName: data.firstName,
                lastName: data.lastName,
                contact: data.contact,
                country: "",
                address: "",
                city: "",
                postalCode: "",
                emailID: data.emailID,
                password: ""
            }

            await userModel.create(query1).then((response)=>{
                // console.log(response);
                res.status(200).json({
                    userCreated: true,
                    userExist : false,
                    userID:userID 
                })
            }).catch((err)=>{
                console.log(err);
                res.status(200).json({
                    userCreated: false,
                    userExist : false 
                })
            })

        }
        
    } catch (error) {
        console.log(error);
    }
}