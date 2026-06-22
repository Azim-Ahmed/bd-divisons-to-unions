<div align="center">

# 🇧🇩 bd-divisions-to-unions

**Complete Bangladesh administrative hierarchy data — Divisions, Districts, Upazilas & Unions in Bangla and English.**

[![npm version](https://img.shields.io/npm/v/bd-divisions-to-unions.svg?style=flat-square&color=brightgreen)](https://www.npmjs.com/package/bd-divisions-to-unions)
[![npm downloads](https://img.shields.io/npm/dm/bd-divisions-to-unions.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/bd-divisions-to-unions)
[![license](https://img.shields.io/npm/l/bd-divisions-to-unions.svg?style=flat-square&color=orange)](./LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D12-brightgreen?style=flat-square)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-blue?style=flat-square&logo=typescript)](./index.d.ts)

<br/>

> A zero-dependency, offline-first npm package that gives you the full 4-level Bangladesh administrative hierarchy — instantly, without any API calls.

<br/>

[Installation](#-installation) · [Quick Start](#-quick-start) · [API Reference](#-api-reference) · [Data Shape](#-data-shape) · [Examples](#-examples) · [TypeScript](#-typescript-support) · [FAQ](#-faq)

</div>

---

## 📦 What's Inside

Bangladesh is organized into a 4-tier administrative hierarchy:

| Level | Bangla | Count |
|-------|--------|-------|
| **Division** (বিভাগ) | ঢাকা, চট্টগ্রাম, রাজশাহী … | **8** |
| **District** (জেলা) | Grouped by Division | **64** |
| **Upazila** (উপজেলা) | Grouped by District | **492+** |
| **Union** (ইউনিয়ন) | Grouped by Upazila | **4,500+** |

All data is available in **Bangla** (default) and **English** via an optional `"en"` parameter.

---

## 🚀 Installation

```bash
# npm
npm install bd-divisions-to-unions

# yarn
yarn add bd-divisions-to-unions

# pnpm
pnpm add bd-divisions-to-unions
```

> **Requirements:** Node.js ≥ 12

---

## ⚡ Quick Start

```js
const {
  getAllDivision,
  getAllDistrict,
  getAllUpazila,
  getAllUnion,
  getDistricts,
  getUpazilas,
  getUnions,
} = require('bd-divisions-to-unions');

// Get all 8 divisions in Bangla
const divisions = getAllDivision();
console.log(divisions);
// → [{ value: '30', title: 'ঢাকা' }, { value: '20', title: 'চট্টগ্রাম' }, ...]

// Get all divisions in English
const divisionsEn = getAllDivision('en');
console.log(divisionsEn);
// → [{ value: 30, title: 'Dhaka' }, { value: 20, title: 'Chattagram' }, ...]

// Drill down: get districts of Dhaka division (value: '30')
const dhakaDistricts = getDistricts('30');
console.log(dhakaDistricts);
// → [{ value: '26', title: 'ঢাকা' }, { value: '29', title: 'গাজীপুর' }, ...]

// Get upazilas of Dhaka district (value: '26')
const upazilas = getUpazilas('26');

// Get unions of a specific upazila
const unions = getUnions('317');
```

---

## 📚 API Reference

All functions accept an optional `type` parameter. Pass `"en"` for English data; omit it (or pass anything else) for Bangla data.

---

### `getAllDivision(type?)`

Returns all **8 divisions** of Bangladesh as a flat array.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | `string` | No | Pass `"en"` for English; omit for Bangla |

**Returns:** `Array<{ value: string \| number, title: string }>`

```js
getAllDivision();       // Bangla divisions
getAllDivision('en');   // English divisions
```

---

### `getAllDistrict(type?)`

Returns **all 64 districts** grouped by their parent division value.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | `string` | No | Pass `"en"` for English; omit for Bangla |

**Returns:** `{ [divisionId: string]: Array<{ value: string \| number, title: string }> }`

```js
const allDistricts = getAllDistrict();
// { '10': [ ...Barisal districts ], '20': [ ...Chattogram districts ], ... }
```

---

### `getAllUpazila(type?)`

Returns **all upazilas** grouped by their parent district value.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | `string` | No | Pass `"en"` for English; omit for Bangla |

**Returns:** `{ [districtId: string]: Array<{ value: string \| number, title: string }> }`

```js
const allUpazilas = getAllUpazila();
const allUpazilasEn = getAllUpazila('en');
```

---

### `getAllUnion(type?)`

Returns **all unions** grouped by their parent upazila value.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | `string` | No | Pass `"en"` for English; omit for Bangla |

**Returns:** `{ [upazilaId: string]: Array<{ value: string \| number, title: string }> }`

```js
const allUnions = getAllUnion();
```

---

### `getDistricts(division_value, type?)`

Returns the districts belonging to a **specific division**.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `division_value` | `string \| number` | Yes | The `value` of the division |
| `type` | `string` | No | Pass `"en"` for English; omit for Bangla |

**Returns:** `Array<{ value: string \| number, title: string }> | undefined`

```js
getDistricts('30');         // Districts of Dhaka division (Bangla)
getDistricts('30', 'en');   // Districts of Dhaka division (English)
getDistricts(30, 'en');     // Also works with numeric value
```

---

### `getUpazilas(district_value, type?)`

Returns the upazilas belonging to a **specific district**.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `district_value` | `string \| number` | Yes | The `value` of the district |
| `type` | `string` | No | Pass `"en"` for English; omit for Bangla |

**Returns:** `Array<{ value: string \| number, title: string }> | undefined`

```js
getUpazilas('26');          // Upazilas in Dhaka district (Bangla)
getUpazilas('26', 'en');    // Upazilas in Dhaka district (English)
```

---

### `getUnions(upazila_value, type?)`

Returns the unions belonging to a **specific upazila**.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `upazila_value` | `string \| number` | Yes | The `value` of the upazila |
| `type` | `string` | No | Pass `"en"` for English; omit for Bangla |

**Returns:** `Array<{ value: string \| number, title: string }> | undefined`

```js
getUnions('317');           // Unions in the given upazila (Bangla)
getUnions('317', 'en');     // Unions in the given upazila (English)
```

---

## 🗂 Data Shape

Each administrative unit is an object with two fields:

```ts
{
  value: string | number,  // Unique numeric ID (string in Bangla data, number in English)
  title: string            // Human-readable name in the selected language
}
```

**Bangla example:**
```js
{ value: '30', title: 'ঢাকা' }
```

**English example:**
```js
{ value: 30, title: 'Dhaka' }
```

> **Tip:** When looking up nested data with `getDistricts`, `getUpazilas`, or `getUnions`, use the `value` from the parent — both numeric strings and numbers are accepted.

---

## 💡 Examples

### Build a cascading address selector (Node.js / Express)

```js
const {
  getAllDivision,
  getDistricts,
  getUpazilas,
  getUnions,
} = require('bd-divisions-to-unions');

// Step 1 — list all divisions
app.get('/divisions', (req, res) => {
  const lang = req.query.lang; // 'en' or undefined
  res.json(getAllDivision(lang));
});

// Step 2 — districts for a selected division
app.get('/districts/:divisionId', (req, res) => {
  const lang = req.query.lang;
  const result = getDistricts(req.params.divisionId, lang);
  res.json(result ?? []);
});

// Step 3 — upazilas for a selected district
app.get('/upazilas/:districtId', (req, res) => {
  const lang = req.query.lang;
  res.json(getUpazilas(req.params.districtId, lang) ?? []);
});

// Step 4 — unions for a selected upazila
app.get('/unions/:upazilaId', (req, res) => {
  const lang = req.query.lang;
  res.json(getUnions(req.params.upazilaId, lang) ?? []);
});
```

---

### Use inside a React component

```jsx
import { getAllDivision, getDistricts, getUpazilas, getUnions } from 'bd-divisions-to-unions';
import { useState } from 'react';

export default function AddressForm() {
  const [divisionId, setDivisionId] = useState('');
  const [districtId, setDistrictId] = useState('');
  const [upazilaId, setUpazilaId] = useState('');

  const divisions = getAllDivision('en');
  const districts  = divisionId ? getDistricts(divisionId, 'en') ?? [] : [];
  const upazilas   = districtId ? getUpazilas(districtId, 'en') ?? [] : [];
  const unions     = upazilaId  ? getUnions(upazilaId,  'en') ?? [] : [];

  return (
    <form>
      <select onChange={e => { setDivisionId(e.target.value); setDistrictId(''); setUpazilaId(''); }}>
        <option value="">Select Division</option>
        {divisions.map(d => <option key={d.value} value={d.value}>{d.title}</option>)}
      </select>

      <select onChange={e => { setDistrictId(e.target.value); setUpazilaId(''); }} disabled={!divisionId}>
        <option value="">Select District</option>
        {districts.map(d => <option key={d.value} value={d.value}>{d.title}</option>)}
      </select>

      <select onChange={e => setUpazilaId(e.target.value)} disabled={!districtId}>
        <option value="">Select Upazila</option>
        {upazilas.map(u => <option key={u.value} value={u.value}>{u.title}</option>)}
      </select>

      <select disabled={!upazilaId}>
        <option value="">Select Union</option>
        {unions.map(u => <option key={u.value} value={u.value}>{u.title}</option>)}
      </select>
    </form>
  );
}
```

---

### Print full hierarchy for a division

```js
const { getAllDivision, getDistricts, getUpazilas, getUnions } = require('bd-divisions-to-unions');

const divisions = getAllDivision('en');

divisions.forEach(division => {
  console.log(`\n📍 Division: ${division.title}`);
  const districts = getDistricts(division.value, 'en') ?? [];

  districts.forEach(district => {
    console.log(`  🏙 District: ${district.title}`);
    const upazilas = getUpazilas(district.value, 'en') ?? [];

    upazilas.forEach(upazila => {
      const unions = getUnions(upazila.value, 'en') ?? [];
      console.log(`    🏘 Upazila: ${upazila.title} (${unions.length} unions)`);
    });
  });
});
```

---

## 🔷 TypeScript Support

This package ships with full TypeScript definitions out of the box. No `@types/` package required.

```ts
import {
  getAllDivision,
  getDistricts,
  getUpazilas,
  getUnions,
  AdminUnit,
  AdminUnitMap,
} from 'bd-divisions-to-unions';

const divisions: AdminUnit[] = getAllDivision('en');
const districts: AdminUnit[] = getDistricts('30', 'en') ?? [];
const upazilas: AdminUnit[]  = getUpazilas('26') ?? [];
const unions: AdminUnit[]    = getUnions('317') ?? [];
```

**Available types:**

| Type | Description |
|------|-------------|
| `AdminUnit` | `{ value: string \| number; title: string }` |
| `AdminUnitMap` | `Record<string, AdminUnit[]>` |
| `Language` | `'en' \| undefined` |

---

## ❓ FAQ

<details>
<summary><strong>Does this work in the browser?</strong></summary>

The package uses CommonJS `require()`. It works out of the box in Node.js, and in the browser when processed through bundlers like **Webpack**, **Vite**, or **Parcel** (which handle `require()` automatically).

</details>

<details>
<summary><strong>Can I use ES Module import syntax?</strong></summary>

Yes, when using a bundler (Webpack, Vite, Rollup) or Next.js, you can use named imports:

```js
import { getAllDivision, getDistricts } from 'bd-divisions-to-unions';
```

In pure Node.js ESM (`"type": "module"` in your `package.json`), use dynamic import:

```js
const { getAllDivision } = await import('bd-divisions-to-unions');
```

</details>

<details>
<summary><strong>Why does <code>getDistricts</code> return <code>undefined</code>?</strong></summary>

The function returns `undefined` when the provided `division_value` does not match any key in the data. Make sure you're using the correct `value` from the division object returned by `getAllDivision()`.

```js
const divisions = getAllDivision();
const first = divisions[0];
const districts = getDistricts(first.value); // ✓ safe — value comes from data
```

</details>

<details>
<summary><strong>Are the division/district IDs the official government codes?</strong></summary>

Yes. The numeric `value` fields correspond to Bangladesh's official BARD/BBS administrative codes used in government systems.

</details>

<details>
<summary><strong>How do I get Bangla data? How do I get English data?</strong></summary>

- **Bangla (default):** Call any function without the `type` parameter, e.g. `getAllDivision()`
- **English:** Pass `"en"` as the last argument, e.g. `getAllDivision('en')`

</details>

---

## 🗺 Division Reference

| Value | Bangla | English |
|-------|--------|---------|
| `10` | বরিশাল | Barisal |
| `20` | চট্টগ্রাম | Chattagram |
| `30` | ঢাকা | Dhaka |
| `40` | খুলনা | Khulna |
| `45` | ময়মনসিংহ | Mymensingh |
| `50` | রাজশাহী | Rajshahi |
| `55` | রংপুর | Rangpur |
| `60` | সিলেট | Sylhet |

---

## 🤝 Contributing

Contributions, bug reports, and data corrections are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b fix/data-correction`
3. Commit your changes: `git commit -m 'fix: correct upazila names in Sylhet'`
4. Push to the branch: `git push origin fix/data-correction`
5. Open a Pull Request

Please open an [issue](https://github.com/Azim-Ahmed/bd-divisons-to-unions/issues) first for major changes.

---

## 📄 License

[ISC](./LICENSE) © [Azim Uddin Ahamed](https://www.visualflow.dev)

---

<div align="center">

### Made with ❤️ by [Azim Uddin Ahamed](https://www.visualflow.dev)

**[🌐 VisualFlow — React Flow Templates & Workflow UI](https://www.visualflow.dev)**  
*Production-ready React Flow templates for automation workflows, AI builders, mind maps, and more.*

<br/>

**If this package helped you, consider supporting the work:**

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support-orange?style=for-the-badge&logo=buy-me-a-coffee)](https://buymeacoffee.com/azimahmed)

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-Azim--Ahmed-black?style=flat-square&logo=github)](https://github.com/Azim-Ahmed)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Azim%20Uddin%20Ahamed-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/azim-uddin-ahamed)
[![Email](https://img.shields.io/badge/Email-azimaahmed36%40gmail.com-red?style=flat-square&logo=gmail)](mailto:azimaahmed36@gmail.com)

</div>
