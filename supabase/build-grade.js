/* Copies the IB criteria from honey-rubrics.js into the grading function, so the page and the grader always agree.
   After changing honey-rubrics.js run:  node supabase/build-grade.js
   then redeploy the function (supabase/HONEY-SETUP.md, step 3). */
const fs = require("fs"), path = require("path");
const H = require(path.join(__dirname, "..", "honey-rubrics.js"));
const file = path.join(__dirname, "functions", "grade", "index.ts");
const src = fs.readFileSync(file, "utf8");
const data = { TASKS: H.TASKS, SUBJECTS: H.SUBJECTS, IA_BANDS: H.IA_BANDS, EE_BANDS: H.EE_BANDS, MAX_MB: H.MAX_MB, DAILY: H.DAILY };
const block = `/* BEGIN RUBRICS */\nconst R = ${JSON.stringify(data, null, 1)} as const;\n/* END RUBRICS */`;
const out = src.replace(/\/\* BEGIN RUBRICS \*\/[\s\S]*?\/\* END RUBRICS \*\//, block);
if (out === src && !src.includes(block)) throw new Error("BEGIN/END RUBRICS markers not found");
fs.writeFileSync(file, out);
console.log(`grade/index.ts: ${Object.keys(H.TASKS).length} tasks, ${Object.keys(H.SUBJECTS).length} subjects`);
