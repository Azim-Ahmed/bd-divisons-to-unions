'use strict';

const { divisions, districts, upazilas, unions } = require('./@response-from-this-folder/bangla.js');
const { unions_en, districts_en, divisions_en, upazilas_en } = require('./@response-from-this-folder/english.js');

/**
 * Returns all 8 divisions of Bangladesh.
 *
 * @param {string} [type] - Pass `"en"` for English, omit for Bangla.
 * @returns {Array<{value: string|number, title: string}>} Array of division objects.
 *
 * @example
 * const { getAllDivision } = require('bd-divisions-to-unions');
 * getAllDivision();       // Bangla  → [{ value: '30', title: 'ঢাকা' }, ...]
 * getAllDivision('en');   // English → [{ value: 30,   title: 'Dhaka' }, ...]
 */
function getAllDivision(type) {
    return type === 'en' ? divisions_en : divisions;
}

/**
 * Returns all districts grouped by division value.
 *
 * @param {string} [type] - Pass `"en"` for English, omit for Bangla.
 * @returns {Object.<string, Array<{value: string|number, title: string}>>} Map of divisionId → districts[].
 *
 * @example
 * const { getAllDistrict } = require('bd-divisions-to-unions');
 * getAllDistrict();       // { '10': [...], '20': [...], ... }
 * getAllDistrict('en');   // English version
 */
function getAllDistrict(type) {
    return type === 'en' ? districts_en : districts;
}

/**
 * Returns all upazilas grouped by district value.
 *
 * @param {string} [type] - Pass `"en"` for English, omit for Bangla.
 * @returns {Object.<string, Array<{value: string|number, title: string}>>} Map of districtId → upazilas[].
 *
 * @example
 * const { getAllUpazila } = require('bd-divisions-to-unions');
 * getAllUpazila();        // { '1': [...], '2': [...], ... }
 */
function getAllUpazila(type) {
    return type === 'en' ? upazilas_en : upazilas;
}

/**
 * Returns all unions grouped by upazila value.
 *
 * @param {string} [type] - Pass `"en"` for English, omit for Bangla.
 * @returns {Object.<string, Array<{value: string|number, title: string}>>} Map of upazilaId → unions[].
 *
 * @example
 * const { getAllUnion } = require('bd-divisions-to-unions');
 * getAllUnion();          // { '1': [...], '2': [...], ... }
 */
function getAllUnion(type) {
    return type === 'en' ? unions_en : unions;
}

/**
 * Returns the districts that belong to a specific division.
 *
 * @param {string|number} division_value - The `value` of the division (e.g. `'30'` for Dhaka).
 * @param {string} [type] - Pass `"en"` for English, omit for Bangla.
 * @returns {Array<{value: string|number, title: string}>|undefined} Array of district objects, or `undefined` if the division is not found.
 *
 * @example
 * const { getDistricts } = require('bd-divisions-to-unions');
 * getDistricts('30');        // Districts in Dhaka (Bangla)
 * getDistricts('30', 'en');  // Districts in Dhaka (English)
 */
function getDistricts(division_value, type) {
    const key = String(division_value);
    return type === 'en' ? districts_en[key] : districts[key];
}

/**
 * Returns the upazilas that belong to a specific district.
 *
 * @param {string|number} district_value - The `value` of the district (e.g. `'26'` for Dhaka district).
 * @param {string} [type] - Pass `"en"` for English, omit for Bangla.
 * @returns {Array<{value: string|number, title: string}>|undefined} Array of upazila objects, or `undefined` if the district is not found.
 *
 * @example
 * const { getUpazilas } = require('bd-divisions-to-unions');
 * getUpazilas('26');         // Upazilas in Dhaka district (Bangla)
 * getUpazilas('26', 'en');   // Upazilas in Dhaka district (English)
 */
function getUpazilas(district_value, type) {
    const key = String(district_value);
    return type === 'en' ? upazilas_en[key] : upazilas[key];
}

/**
 * Returns the unions that belong to a specific upazila.
 *
 * @param {string|number} upazila_value - The `value` of the upazila.
 * @param {string} [type] - Pass `"en"` for English, omit for Bangla.
 * @returns {Array<{value: string|number, title: string}>|undefined} Array of union objects, or `undefined` if the upazila is not found.
 *
 * @example
 * const { getUnions } = require('bd-divisions-to-unions');
 * getUnions('317');          // Unions in the given upazila (Bangla)
 * getUnions('317', 'en');    // Unions in the given upazila (English)
 */
function getUnions(upazila_value, type) {
    const key = String(upazila_value);
    return type === 'en' ? unions_en[key] : unions[key];
}

module.exports = {
    getAllDivision,
    getAllDistrict,
    getAllUpazila,
    getAllUnion,
    getDistricts,
    getUpazilas,
    getUnions,
};
