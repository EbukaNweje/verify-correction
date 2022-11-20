const express = require("express")
const app = express()
const GetVerifyRouter = require("./Router/GetVerifyRouter")

app.use("/v1/getverify", GetVerifyRouter)

app.use("/", (req, res)=>{
    res.status(200).json({
        message: "My Api is working"
    })
})

module.exports = app
