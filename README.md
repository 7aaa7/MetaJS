### Checking if JS can be converted into strict Meta programming language which could create C code which is more or like human readable, essentially this code could be fed back to OS enabling a usermode higher level language run a highly efficient code in kernel as module. Via this a separate thought of creating a new (Web?) Operating system can be spawned by the thinker concurrently constrained by the scope. (%%%)
<Experimental>
Experiment
</Experimental>

```
saurabh@c1:~/Code/MetaJS$ BASE_LOC=~/Code/MetaJS/ DEBUG=true node createScript.js
saurabh@c1:~/Code/MetaJS$ ls
assertionCode.js  createScript.js  newScript.js  README.md
saurabh@c1:~/Code/MetaJS$ cat newScript.js 
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

```
