import {addClassToEveryChildOfDiv} from './hideCharts.js'

let graphSelection = document.getElementsByClassName("selection");
let graphShowrooms = document.getElementsByClassName("graph-showroom");

export function graphSwitching() {
for (let i=0; i < graphSelection.length; i++) { // loop over all selection graphs
  graphSelection[i].addEventListener('change', (event) => {
    let selectedValueChildIndex = event.target.value;
    addClassToEveryChildOfDiv(graphShowrooms[i]);
    graphShowrooms[i].children[selectedValueChildIndex].classList.remove("hidden-element");
  });
}
}