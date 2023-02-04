# bd-divisons-to-unions

### Hello everyone I just created a npm package where you will find all data based on Bangladesh.
 - Divisions
 - Districts
 - Upazillas
 - Unions

  ### Let's talk about how you will use it.



you have to use this only for any node environment.
Use this command in your terminal `npm install bd-divisions-to-unions`

then you need call the specific function to use these.


` import {getAllDivision, getAllDistricts, getAllUpazila, getAllUnion  } from'bd-divisions-to-unions'; `
` console.log(getAllDivision())`

To achieve all data you just call 4 functions

- `getAllDivision()` if you pass the `en` parameter then you will get the english written divisions. `getAllDivisions("en")`

- `getAllDistricts()` if you pass the `en` parameter then you will get the english written Zilla. `getAllDistricts("en")`
- `getAllUpazila()` if you pass the `en` parameter then you will get the english written upazila. `getAllUpazila("en")`
- `getAllUnion()` if you pass the `en` parameter then you will get the english written union.  `getAllUnion("en")`


