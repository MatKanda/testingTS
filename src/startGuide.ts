import {guideInit} from "./init";

export function guide(input: string[]) {
    window.elements = [];
    window.numberOfElements = 0;
    window.currentPopupDivsIndex = 0;
    window.idCounter = 0;
    window.bodyElement = null;
    window.allHtmlElements = [];
    guideInit(input);
}

guide(["prva", "druha", "tretia", "stvrta"]);
