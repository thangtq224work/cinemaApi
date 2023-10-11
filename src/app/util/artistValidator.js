const { body } = require('express-validator');
const occupation = require("../const/occupation");
const newArtistValidator = [
    body("name", "Họ tên từ 5 đến 255 kí tự").trim().isLength({ min: 5, max: 255 }),
    body("story", "Story từ 1 đến 1000 kí tự").optional().trim().isLength({ min: 1, max: 1000 }),
    body("birthday", "Vui lòng nhập ngày sinh với định dạng yyyy-MM-dd").isISO8601("yyyy-MM-dd"),
    body("nationality", "Nationality từ 1 đến 100 kí tự").trim().isLength({ min: 1, max: 100 }),
    body("gender", "Gender không hợp lệ").exists(),
    body("film","Film không hợp lệ").optional().custom(value=>{
        if(!Array.isArray(value)){
            throw new Error("film không hợp lệ1");
        }
        return true;
    }),
    body("occupation").optional().custom(value =>{
        if(!Array.isArray(value)){
            throw new Error("occupation không hợp lệ1");
        }
        const rs = value.every(item=>{
            return Object.values(occupation).some(i=>{
                return i == item;
            })
        });
        if(!rs){
            throw new Error("occupation không hợp lệ");
        }
        return rs;
    })
    
    // isArray({min:1}).contains(Object.values(occupation))
];

const editArtistValidator = [
    body("name", "Họ tên từ 5 đến 255 kí tự").trim().isLength({ min: 5, max: 255 }),
    body("story", "Story từ 1 đến 1000 kí tự").optional().trim().isLength({ min: 1, max: 1000 }),
    body("birthday", "Vui lòng nhập ngày sinh với định dạng yyyy-MM-dd").isISO8601("yyyy-MM-dd"),
    body("nationality", "Nationality từ 1 đến 100 kí tự").trim().isLength({ min: 1, max: 100 }),
    body("gender", "Gender không hợp lệ").exists(),
    body("occupation").custom(value =>{
        if(!Array.isArray(value)){
            throw new Error("occupation không hợp lệ1");
        }
        const rs = value.every(item=>{
            return Object.values(occupation).some(i=>{
                return i == item;
            })
        });
        if(!rs){
            throw new Error("occupation không hợp lệ");
        }
        return rs;
    })
    
    // isArray({min:1}).contains(Object.values(occupation))

];
module.exports = { newArtistValidator, editArtistValidator }