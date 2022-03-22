const BASE_LOC = process.env["BASE_LOC"] || "./";
const assertionCodeFilename = "assertionCode.js";
const newScriptTemplate = `newScript.js`;
const DEBUG = process.env["DEBUG"]; 


let assertionCode = undefined;
let fs = require("fs");
let notify = (e) => { 
  if (DEBUG) { 
    console.log(`DEBUG FLAG IS ON, PRINTING STACKTRACE.`); 
    throw e;
  }
  console.log(`I/O Failed, Implement Notifiction. Error: ${e.message}`);
}


try {
  // Basic Error Handling for now
  assertionCode = fs.readFileSync(assertionCodeFilename).toString();
  fs.writeFileSync(BASE_LOC + newScriptTemplate, assertionCode);
} catch (e) {
  notify(e); 
}
