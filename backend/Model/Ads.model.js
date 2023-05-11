const mongoose = require("mongoose");

const adSchema = mongoose.Schema({
    companyName:String,
    companyId:Number,
    primaryText:String,
    headline:String,
    description:String,
    CTA:String,
    imageUrl:String,
})

const AdsModel = mongoose.model("Ad",adSchema);

module.exports = {
    AdsModel
}