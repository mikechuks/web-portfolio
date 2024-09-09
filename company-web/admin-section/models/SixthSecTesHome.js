const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SixthSecSchema = new Schema({
    tesTitle:{
        type:String
    },
    col2: [{        
        imgTes:{
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

const User = mongoose.model('SixthSecSchema', SixthSecSchema);

module.exports = User;
