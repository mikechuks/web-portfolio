const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FifthSecSchema = new Schema({
    col2: [{
        imgDetails:{
            type:String
        },
        imgName:{
            typeFifth
        },
        content:{
            type:String
        }
    }],
}, {
    timestamps: true
});

const User = mongoose.model('fifthSecSchema', FifthSecSchema);

module.exports = User;
