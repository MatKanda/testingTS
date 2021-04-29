import {guideInit} from "./init";

export function guide(input: string[]) {
    window.elements = [];
    window.popupDivs=[];
    window.numberOfElements = 0;
    window.currentPopupDivsIndex = 0;
    window.idCounter = 0;
    window.bodyElement = null;
    window.allHtmlElements = [];
    guideInit(input);
}

// document.getElementById("guide").addEventListener("click",()=>guide(["prva", "druha", "tretia", "stvrta"]));