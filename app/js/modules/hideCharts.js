

/*
export function AAAaddClassHiddenExceptThe(graphSectionIndex, exceptionIndex = 0) {
  let graphShowrooms = document.getElementsByClassName("graph-showroom");
  let showroomLength = graphShowrooms.length;
  let howManyCategoriesDoWeHave = 4;  // CHANGE THIS IF YOU ADD NEW CATEGORIES!!!!
  for (let showroomIndex=0; showroomIndex< showroomLength; showroomIndex++) {
    for (let chartI=1;  chartI < howManyCategoriesDoWeHave; chartI++) {
       graphShowrooms[showroomIndex].children[chartI].classList.add("hidden-element");
    }
  }
  }
}
*/

/* this function will add class .hidden-element to the every children of a specific div, except the one*/

export function addClassToEveryChildOfDiv(div, childExceptionIndex, classForChilds = "hidden-element") {
    let howManyCategoriesDoWeHave = 4;  // CHANGE THIS IF YOU ADD NEW CATEGORIES!!!!
      for (let chartI=0;  chartI < howManyCategoriesDoWeHave; chartI++) {
        if (chartI != childExceptionIndex) {
         div.children[chartI].classList.add(classForChilds);
       }
      }
    }
