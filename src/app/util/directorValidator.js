const { body } = require('express-validator');

const newActorValidator = [
    body("name", "Họ tên từ 5 đến 255 kí tự").trim().isLength({ min: 5, max: 255 }),
    body("story", "Story từ 1 đến 1000 kí tự").optional().trim().isLength({ min: 1, max: 1000 }),
    body("birthday", "Vui lòng nhập ngày sinh với định dạng yyyy-MM-dd").isISO8601("yyyy-MM-dd"),
    body("nationality", "Nationality từ 1 đến 100 kí tự").trim().isLength({ min: 1, max: 100 }),
    body("gender", "Gender không hợp lệ").exists(),

];
const loginValidator = [
    body("username", "Username hoặc mật khẩu không hợp lệ").trim().isLength({ min: 1, max: 20 }),
    body("password", "Username hoặc mật khẩu không hợp lệ").trim().isLength({ min: 1, max: 20 }),
];
module.exports = { newActorValidator, loginValidator }