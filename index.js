const {divisions, districts, upazilas, unions} = require("./@response-from-this-folder/bangla.js")
const {unions_en, districts_en, divisions_en, upazilas_en} = require("./@response-from-this-folder/english.js")

function getAllDivision(type) {
    return type === "en"? divisions_en : divisions;
}
function getAllDistrict(type) {
    return type === "en"? districts_en : districts;
}
function getAllUpazila(type) {
    return type === "en"? upazilas_en : upazilas;
}
function getAllUnion(type) {
    return type === "en"? unions_en : unions;
}

module.exports = {
    getAllDivision,
    getAllUpazila,
    getAllUnion,
    getAllDistrict,
}