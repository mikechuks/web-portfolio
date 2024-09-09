const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FotterSecSchema = new Schema({
    fotterTitle:{
        type:String
    },
    fotterContent:{
        type:String
    },
    col2: [{        
        links:{
            type:String
        },
    }],
    col3: [{        
        links:{
            type:String
        },
    }],
    col4: [{        
        links:{
            type:String
        },
    }],
    col5: [{        
        links:{
            type:String
        },
    }],
}, {
    timestamps: true
});

const User = mongoose.model('fotterSecSchema', FotterSecSchema);

module.exports = User;
