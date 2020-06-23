var mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    orderid:String,
    custid:String,
    prodid:String,
    instruction:String,
    quantity:String,
    total:String},
    {
    versionKey:false
    }
);

module.exports = mongoose.model('orders',orderSchema);