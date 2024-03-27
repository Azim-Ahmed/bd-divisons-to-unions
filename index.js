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

function getDistricts(division_value, type) {
    return type === "en"? districts_en[division_value] : districts[division_value];
}
function getUpazilas(district_value, type) {
    return type === "en"? upazilas_en[district_value] : upazilas[district_value];
}
function getUnions(upazila_value, type) {
    return type === "en"? unions_en[upazila_value] : unions[upazila_value];
}

module.exports = {
    getAllDivision,
    getAllUpazila,
    getAllUnion,
    getAllDistrict,
    getDistricts,
    getUpazilas,
    getUnions
}