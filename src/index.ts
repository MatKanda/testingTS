import {guide} from "./startGuide";

export * from './startGuide';
export * from './init';
export * from './popupDiv';
export * from './animations';

// @ts-ignore
window.guide=guide;

//document.getElementById("guide").addEventListener("click",()=>guide(["prva", "druha", "tretia", "stvrta"]));