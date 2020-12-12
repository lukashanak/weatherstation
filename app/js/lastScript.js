import {addClassToEveryChildOfDiv} from './modules/addClassToEveryChildOfDiv.js'

let graphShowrooms = document.getElementsByClassName("graph-showroom");
addClassToEveryChildOfDiv(graphShowrooms[0], 0);
addClassToEveryChildOfDiv(graphShowrooms[1], 0);
addClassToEveryChildOfDiv(graphShowrooms[2], 0);
addClassToEveryChildOfDiv(graphShowrooms[3], 0);

console.log("lastScript.js");