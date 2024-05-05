// import {test1, test2} from './export.js'; //named exports
// test1();
// test2();

import * as  myModule from "./export.js"; //and if we want all the function, variable, or classes to import  together
myModule.test1();
myModule.test2();
myModule.test3();

// import test1 from './export.js';
// test1;