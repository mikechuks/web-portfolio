const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SevSecSchema = new Schema({
    col2: [{
        blogDetails:{
            type:String
        },
        blogTitle:{
            typeFifth
        },
        content:{
            type:String
        }
    }],
}, {
    timestamps: true
});

const User = mongoose.model('SevSecSchema', SevSecSchema);

module.exports = User;
