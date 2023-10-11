const mongoose = require('mongoose');
const slugGenerator = require('mongoose-slug-updater');
const occupation = require("../const/occupation");
// create an schema
mongoose.plugin(slugGenerator);
const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 255
    },
    story: {
        type: String,
        required: false,
        maxLength: 1000
    },
    birthday: {
        type:Date,
        required: true,
    },
    nationality: {
        type:String,
        required: true,
        maxLength:100
    },
    gender: {
        type:Boolean,
        require:true,
    },
    film:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Film"
    },
    occupation:{
        type:[String],
        enum: Object.values(occupation),
        default:[occupation.ACTOR]
    },
    slug: { type: String, slug: ["name"], unique:true }

},{ timestamps: true });

module.exports = mongoose.model("Artist", artistSchema); 