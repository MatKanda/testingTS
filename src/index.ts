import {guide} from "./startGuide";

export * from './startGuide';
export * from './init';
export * from './popupDiv';
export * from './animations';

document.getElementById("guide").addEventListener("click",()=>guide(["prva", "druha", "tretia", "stvrta"]));