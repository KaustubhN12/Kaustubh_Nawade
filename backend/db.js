const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://kaustubh:kaustubhnawade@cluster0.mwnpyuz.mongodb.net/Ads?retryWrites=true&w=majority");

module.exports = {
    connection
}