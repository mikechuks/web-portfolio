const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    col2: [{
        imgDetails:{
            type:String
        },
        imgName:{
            type:String
        },
        des:{
            type:String
        },
        officePos:{
            type:String
        }
    }],
}, {
    timestamps: true
});

const User = mongoose.model('TeamSchema', TeamSchema);

module.exports = User;
