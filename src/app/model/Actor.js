const mongoose = require('mongoose');
const slugGenerator = require('mongoose-slug-updater');
// create an schema
mongoose.plugin(slugGenerator);
const actorSchema = new mongoose.Schema({
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
    slug: { type: String, slug: ["name"], unique:true }

},{ timestamps: true });

module.exports = mongoose.model("Actor", actorSchema); 