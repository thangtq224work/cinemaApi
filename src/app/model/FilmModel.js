const mongoose = require('mongoose');

const slugGenerator = require('mongoose-slug-updater');
// create an schema
mongoose.plugin(slugGenerator);
const filmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 255
    },
    description: {
        type: String,
        required: false,
        maxLength: 2000
    },
    timing: {
        type:Number,
        required: false,
    },
    release: {
        type:Date,
        required: true,
    },
    producer: {
        type:String,
        require:false,
        maxLength:200
    },
    actor:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Actor"
    },
    director:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Director"
    },
    slug: { type: String, slug: ["name"], unique:true }

},{ timestamps: true });

module.exports = mongoose.model("Film", filmSchema); 