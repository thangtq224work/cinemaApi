const actorSchema = require('../model/ActorModel');
const {validationResult } = require('express-validator');
const actorController = {
    getActor: async (req, resp, next) => {
        await actorSchema.find({}).then(data => {
            return resp.json(data);
        }).catch(err => {
            resp.status(400).json({ message: "Error" });
        });
    },
    newActor: async (req, resp, next) => {
        console.log(req.body);
        const valid = validationResult(req);
        if (!valid.isEmpty()) {
            return resp.json({ errors: valid.array()[0].msg });
        }
        const actor = new actorSchema(req.body);
        const actorSaved = await actor.save();
        return resp.json(actorSaved);
    },
    editActor: async (req, resp, next) => {
        const valid = validationResult(req);
        if (!valid.isEmpty()) {
            return resp.json({ errors: valid.array()[0].msg });
        }
        
        await actorSchema.findOneAndUpdate({ _id: req.params.id }, req.body, { 
            // return object after update
            new: true }).then(data => {
            if(data){
                return resp.json(data);
            }
            return resp.json({message:`Id ${req.params.id} not found` });
        }).catch(err => {
            resp.status(400).json({ message: 'error' });
        });
    },
}
module.exports = actorController;