const filmSchema = require('../model/FilmModel');
const {validationResult } = require('express-validator');
const filmController = {
    getFilm: async (req, resp, next) => {
        await filmSchema.find({}).then(data => {
            return resp.json(data);
        }).catch(err => {
            resp.status(400).json({ message: "Error" });
        });
    },
    newFilm: async (req, resp, next) => {
        const valid = validationResult(req);
        if (!valid.isEmpty()) {
            return resp.json({ errors: valid.array()[0].msg });
        }
        const film = new filmSchema(req.body);
        const filmSaved = await film.save();
        return resp.json(filmSaved);
    },
    editFilm: async (req, resp, next) => {
        const valid = validationResult(req);
        if (!valid.isEmpty()) {
            return resp.json({ errors: valid.array()[0].msg });
        }
        
        await filmSchema.findOneAndUpdate({ _id: req.params.id }, req.body, { 
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
module.exports = filmController;