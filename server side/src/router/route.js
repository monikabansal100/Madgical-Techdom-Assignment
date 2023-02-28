const express = require("express")
const route = express.Router()
const {createTicket,getTickets }= require("../controller/ticketController")

route.post("/dbCreate",createTicket)
route.get("/", getTickets)



module.exports = route