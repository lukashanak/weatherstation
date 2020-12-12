let graphSelection = document.getElementsByClassName("selection");
let graphShowrooms = document.getElementsByClassName("graph-showroom");

function addClassToEveryChildOfDiv(div, childExceptionIndex, classForChilds = "hidden-element") {
  let howManyCategoriesDoWeHave = 4;  // CHANGE THIS IF YOU ADD NEW CATEGORIES!!!!
    for (let chartI=0;  chartI < howManyCategoriesDoWeHave; chartI++) {
      if (chartI != childExceptionIndex) {
       div.children[chartI].classList.add(classForChilds);
     }
    }
    console.log("wtf");
  }

export function graphSwitching() {
for (let i=0; i < graphSelection.length; i++) { // loop over all selection graphs
  graphSelection[i].addEventListener('change', (event) => {
    let selectedValueChildIndex = event.target.value;
    addClassToEveryChildOfDiv(graphShowrooms[i]);
    graphShowrooms[i].children[selectedValueChildIndex].classList.remove("hidden-element");
  });
}
}