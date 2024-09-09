const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FourthSecSchema = new Schema({
    col2: [{
        imgDetails:{
            type:String
        },
        imgName:{
            type:String
        },
        amount:{
            type:String
        }
    }],
    col1title: {
        type: String,
        required: true,
        unique: true
    },
    col2content: {
        type: String,
        required: true,
        unique: true
    },
    col3buttonDetails: {
        type: String,
        required: true,
        unique: true
    },
}, {
    timestamps: true
});

const User = mongoose.model('fourthSecSchema', FourthSecSchema);

module.exports = User;
