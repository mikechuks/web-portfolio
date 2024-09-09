const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const firstSecSchema = new Schema({
    logo: {
        type: String,
        required: true,
        unique: true
    },
    menu: [{
        menus:{
            type:String
        }
    }],
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true,
        unique: true
    },
    buttonDetails: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const User = mongoose.model('firstSecHome', firstSecSchema);

module.exports = User;
