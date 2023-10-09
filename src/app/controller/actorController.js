const actorSchema = require('../model/Actor');
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
    }
}
module.exports = actorController;