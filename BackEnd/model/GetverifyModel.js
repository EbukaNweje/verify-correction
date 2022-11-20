const mongoose = require("mongoose")

const GetVerifySchema = new mongoose.Schema({
    fristName: {
        type: String,
        require : [true, "First Name is Require"]
    },
    lastName: {
        type: String,
        require : [true, "First Name is Require"]
    },
    userName: {
        type: String,
        require : [true, "First Name is Require"]
    },
    email: {
        type: String,
        require : [true, "First Name is Require"]
    },
    phoneNumber: {
        type: String,
        require : [true, "First Name is Require"]
    },
    address: {
        type: String,
        require : [true, "First Name is Require"]
    },
    townCity: {
        type: String,
        require : [true, "First Name is Require"]
    },
    postCode: {
        type: Number,
        require : [true, "First Name is Require"]
    },
    country: {
        type: String,
        require : [true, "First Name is Require"]
    },
    state: {
        type: String,
        require : [true, "First Name is Require"]
    },
    OrderSummary: {
        type: String,
        require : [false, "First Name is Require"]
    },
    amount: {
        type: Number,
        require : [true, "First Name is Require"]
    },
},
{
    timestamps: true
}
)

const GetVerify = mongoose.model('GetVerify', GetVerifySchema)
module.exports = GetVerify