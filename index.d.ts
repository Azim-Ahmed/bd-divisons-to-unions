/**
 * A single administrative unit (Division, District, Upazila, or Union).
 * The `value` field is a numeric string in Bangla data and a number in English data.
 */
export interface AdminUnit {
    value: string | number;
    title: string;
}

/** Map of parent ID → child admin units */
export type AdminUnitMap = Record<string, AdminUnit[]>;

/** Language selector — pass `"en"` for English; omit for Bangla (default). */
export type Language = 'en' | undefined;

/**
 * Returns all 8 divisions of Bangladesh.
 *
 * @param type - `"en"` for English labels; omit for Bangla.
 * @returns Array of division objects.
 *
 * @example
 * import { getAllDivision } from 'bd-divisions-to-unions';
 * const divisionsBn = getAllDivision();       // Bangla
 * const divisionsEn = getAllDivision('en');   // English
 */
export function getAllDivision(type?: Language): AdminUnit[];

/**
 * Returns all districts grouped by their parent division value.
 *
 * @param type - `"en"` for English labels; omit for Bangla.
 * @returns Object mapping division ID → array of district objects.
 *
 * @example
 * import { getAllDistrict } from 'bd-divisions-to-unions';
 * const all = getAllDistrict();          // { '10': [...], '20': [...] }
 * const allEn = getAllDistrict('en');
 */
export function getAllDistrict(type?: Language): AdminUnitMap;

/**
 * Returns all upazilas grouped by their parent district value.
 *
 * @param type - `"en"` for English labels; omit for Bangla.
 * @returns Object mapping district ID → array of upazila objects.
 *
 * @example
 * import { getAllUpazila } from 'bd-divisions-to-unions';
 * const all = getAllUpazila();
 */
export function getAllUpazila(type?: Language): AdminUnitMap;

/**
 * Returns all unions grouped by their parent upazila value.
 *
 * @param type - `"en"` for English labels; omit for Bangla.
 * @returns Object mapping upazila ID → array of union objects.
 *
 * @example
 * import { getAllUnion } from 'bd-divisions-to-unions';
 * const all = getAllUnion();
 */
export function getAllUnion(type?: Language): AdminUnitMap;

/**
 * Returns the districts that belong to the given division.
 *
 * @param division_value - The `value` of the division (e.g. `'30'` or `30` for Dhaka).
 * @param type - `"en"` for English labels; omit for Bangla.
 * @returns Array of district objects, or `undefined` if the division ID is not found.
 *
 * @example
 * import { getDistricts } from 'bd-divisions-to-unions';
 * const dhakaDistricts = getDistricts('30');
 * const dhakaDistrictsEn = getDistricts('30', 'en');
 */
export function getDistricts(division_value: string | number, type?: Language): AdminUnit[] | undefined;

/**
 * Returns the upazilas that belong to the given district.
 *
 * @param district_value - The `value` of the district (e.g. `'26'` for Dhaka district).
 * @param type - `"en"` for English labels; omit for Bangla.
 * @returns Array of upazila objects, or `undefined` if the district ID is not found.
 *
 * @example
 * import { getUpazilas } from 'bd-divisions-to-unions';
 * const upazilas = getUpazilas('26');
 */
export function getUpazilas(district_value: string | number, type?: Language): AdminUnit[] | undefined;

/**
 * Returns the unions that belong to the given upazila.
 *
 * @param upazila_value - The `value` of the upazila.
 * @param type - `"en"` for English labels; omit for Bangla.
 * @returns Array of union objects, or `undefined` if the upazila ID is not found.
 *
 * @example
 * import { getUnions } from 'bd-divisions-to-unions';
 * const unions = getUnions('317');
 */
export function getUnions(upazila_value: string | number, type?: Language): AdminUnit[] | undefined;
