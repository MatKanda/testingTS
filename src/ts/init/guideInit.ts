import {arrangeOrder} from "./arrangeOrder";
import {createPopupDiv} from "../popupDiv";
import {animationShow} from "../anmations";

var elements: HTMLElement[] = [];
var popupDivs: HTMLElement[] = [];
var numberOfElements:number;
var currentPopupDivsIndex:number;
var idCounter:number;
var bodyElement:HTMLElement;
var allHtmlElements:HTMLElement[] = [];


export function guideInit(input){
    var currentNode, ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);

    //clear arrays and variables in case of another start of Guide function
    while(elements.length > 0) {
        elements.pop();
    }
    while(popupDivs.length > 0) {
        popupDivs.pop();
    }
    numberOfElements=0;
    currentPopupDivsIndex=0;
    idCounter=1;

    var search:number;
    var tmpArray=[];
    while (currentNode = ni.nextNode()) {
        if (currentNode.getAttribute("data-guide") === "true") {
            tmpArray.push(currentNode);
            numberOfElements++;
        }

        if (search===1){
            allHtmlElements.push(currentNode);
            currentNode.setAttribute("data-backGround",getComputedStyle(currentNode).getPropertyValue('backGround'));
            currentNode.setAttribute("data-color",getComputedStyle(currentNode).getPropertyValue('color'));
            currentNode.style.background="rgba(255,255,255,0)";
            currentNode.style.color="#000000";
        }

        if (currentNode.tagName==="BODY"){
            bodyElement=currentNode;
            currentNode.style.background = "rgba(0, 0, 0, 0.85)";
            search=1;
        }

    }

    arrangeOrder(tmpArray);
    for(var i=0;i<numberOfElements;i++)
        createPopupDiv(elements[i],input);

    popupDivs[currentPopupDivsIndex].style.display="block";
    popupDivs[currentPopupDivsIndex].style.opacity="0";
    //@ts-ignore
    $( popupDivs[currentPopupDivsIndex]).animate({
        opacity:1
    }, 1000 );
    animationShow(elements[currentPopupDivsIndex]);

}

export {elements,popupDivs,numberOfElements,currentPopupDivsIndex,idCounter,bodyElement,allHtmlElements};
