const express = require("express")
const app = express();

const bodyParser = require("body-parser")
const {mongoose} = require("./db/db");

const userController = require("./controllers/userController")
const customerController = require("./controllers/customerController")
const itemController = require("./controllers/itemController")
const invoiceController = require("./controllers/invoiceController")

app.use(bodyParser.urlencoded({encoded: false}));
app.use(bodyParser.json());

app.use("/user", userController)
app.use("/customer", customerController)
app.use("/item", itemController)
app.use("/invoice", invoiceController)

app.listen(3333, () => {
    console.log("server running on port:3333")
})
