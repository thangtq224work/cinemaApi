const { body } = require('express-validator');
const artistModel = require("../model/ArtistModel");
const mongoose = require('mongoose');
const newFilmValidator = [
    body("name", "Name từ 1 đến 255 kí tự").trim().isLength({ min: 1, max: 255 }),
    body("story", "Story từ 1 đến 2000 kí tự").optional().trim().isLength({ min: 1, max: 2000 }),
    body("timing", "timing là một số lớn hơn 0").isInt({ min: 1 }),
    body("release", "Vui lòng nhập release với định dạng yyyy-MM-dd").isISO8601("yyyy-MM-dd"),
    body("producer", "producer từ 1 đến 200 kí tự").trim().isLength({ min: 1, max: 200 }),
    body("director").custom(async (value) => {
        if(!value && value != 0){
            throw new Error('Director không hợp lệ');
        }
        const existingUser = await artistModel.find({ _id: new mongoose.Types.ObjectId(value) });
        if (existingUser) {
            throw new Error('Director không tồn tại');
        }
        return true;
    }),
    body("actor").custom((value) => {
        if(!Array.isArray(value)){
            throw new Error('actor không hợp lệ');
        }
        const existingUser = value.every(async (item)=>{
            const tmp = await artistModel.find({ _id: new mongoose.Types.ObjectId(item) });
            return tmp;
        });
        if (!existingUser) {
            throw new Error('actor không tồn tại');
        }
        return true;
    }),


];
module.exports = { newFilmValidator }