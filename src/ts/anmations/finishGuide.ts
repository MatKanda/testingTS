import {popupDivs,currentPopupDivsIndex,bodyElement,allHtmlElements} from "../variables";

export function finishGuide(){
    popupDivs[currentPopupDivsIndex++].style.display="none";
    bodyElement.style.background = "rgba(255, 255, 255, 0)";
    allHtmlElements.forEach(function (element){
        element.style.background=element.getAttribute("data-background");
        element.style.color=element.getAttribute("data-color");
        element.style.opacity="1";
        element.removeAttribute("data-background");
        element.removeAttribute("data-color");
    });
}