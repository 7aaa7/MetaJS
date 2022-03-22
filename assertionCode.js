let functionToImplement = (data, numbers, instructionsMapping = undefined) => {
  // Implement the logic of the function here Or call your application start function;
  //
	
  return undefined;
}; 

let functionToCheck = (func) => { return func }; 

function check(expected, output) {
  let assertionCode = `expected === output`;
  function getAssertionEvalCode(assertionCode) {
    return `expected(${expected}) === Got(${output})`;
  }
  console.log(`${getAssertionEvalCode(assertionCode)}? ${eval(assertionCode)}`);
}


let testMap = {};
let n = 2;
let expected = undefined;

let func = functionToImplement;

let output = functionToCheck(func)(testMap, n);
check(expected, output);


testMap = {};
n = 6; 
expected = undefined

output = functionToCheck(func)(testMap, n);
check(expected, output);
