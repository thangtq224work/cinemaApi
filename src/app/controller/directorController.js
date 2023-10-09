const directorSchema = require('../model/DirectorModel');
const {validationResult } = require('express-validator');
const directorController = {
    getDirector: async (req, resp, next) => {
        await directorSchema.find({}).then(data => {
            return resp.json(data);
        }).catch(err => {
            resp.status(400).json({ message: "Error" });
        });
    },
    newDirector: async (req, resp, next) => {
        const valid = validationResult(req);
        if (!valid.isEmpty()) {
            return resp.json({ errors: valid.array()[0].msg });
        }
        const director = new directorSchema(req.body);
        const directorSaved = await director.save();
        return resp.json(directorSaved);
    },
    editDirector: async (req, resp, next) => {
        const valid = validationResult(req);
        if (!valid.isEmpty()) {
            return resp.json({ errors: valid.array()[0].msg });
        }
        console.log(typeof req.params.id);
        await directorSchema.findOneAndUpdate({ _id: req.params.id }, req.body, { 
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
module.exports = directorController;