const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const vehicleRoute = require("./routes/cars");

const app = express();
mongoose.set("strictQuery", false);
mongoose
    .connect(config.connURL, { dbName: config.dbn })
    .then(() => console.log("Connection Established"))
    .catch((err) => console.log(err));
app.listen(config.port, function () {
    console.log("Server Started", config.port);
})


app.use(bodyParser.json());
app.use(cors());


// app.use("/",defaultRoute);
app.use("/app/v1/vehicles",vehicleRoute);
