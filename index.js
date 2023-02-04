const {divisions, districts, upazillas, unions} = require("./@response-from-this-folder/bangla.js")

function getAllDivision() {
    return divisions
}
function getAllZilla() {
    return districts;
}
function getAllUpazila() {
    return upazillas
}
function getAllUnion() {
    return unions
}

module.exports = {
    getAllDivision,
    getAllUpazila,
    getAllUnion,
    getAllZilla,
}