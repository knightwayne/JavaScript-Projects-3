
//import export in javascript
//doesnt work inside module pattern - IIFE

import * as ModuleExport from './script3.js';


ModuleExport.cd();

console.log(ModuleExport.ab);
console.log(ModuleExport.ef);   //doesnt work as ef isnt exported

ModuleExport.sum(45,9);


