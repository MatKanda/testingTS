/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animations/animationHide.ts":
/*!*****************************************!*\
  !*** ./src/animations/animationHide.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationHide": () => (/* binding */ animationHide)
/* harmony export */ });
function animationHide(element) {
    var start = [40, 40, 40, 0];
    var end = [255, 255, 255, 1];
    console.log("hiding element :" + element.id, "current popupDiv index : " + currentPopupDivsIndex);
    //@ts-ignore
    $(element).animate({ 'aaa': 0 }, {
        duration: 500,
        step: function (now) {
            $(this).css('background-color', 'rgba(' +
                parseInt((start[0] + (end[0] - start[0]) * now).toString()) + ',' +
                parseInt((start[1] + (end[1] - start[1]) * now).toString()) + ',' +
                parseInt((start[2] + (end[2] - start[2]) * now).toString()) + ')');
        }
    });
}


/***/ }),

/***/ "./src/animations/animationShow.ts":
/*!*****************************************!*\
  !*** ./src/animations/animationShow.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationShow": () => (/* binding */ animationShow)
/* harmony export */ });
function animationShow(element) {
    console.log("showing element :" + element.id, "current popupDiv index : " + currentPopupDivsIndex);
    var start = [40, 40, 40, 0];
    var end = [255, 255, 255, 1];
    //@ts-ignore
    $(element).animate({ 'aaa': 1 }, {
        duration: 500,
        step: function (now) {
            $(this).css('background-color', 'rgba(' +
                parseInt((start[0] + (end[0] - start[0]) * now).toString()) + ',' +
                parseInt((start[1] + (end[1] - start[1]) * now).toString()) + ',' +
                parseInt((start[2] + (end[2] - start[2]) * now).toString()) + ')');
        }
    });
}


/***/ }),

/***/ "./src/animations/finishGuide.ts":
/*!***************************************!*\
  !*** ./src/animations/finishGuide.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "finishGuide": () => (/* binding */ finishGuide)
/* harmony export */ });
function finishGuide() {
    popupDivs.forEach(function (div) { div.style.display = "none"; });
    // popupDivs[currentPopupDivsIndex++].style.display = "none";
    bodyElement.style.background = "rgba(255, 255, 255, 0)";
    allHtmlElements.forEach(function (element) {
        element.style.background = element.getAttribute("data-background");
        element.style.color = element.getAttribute("data-color");
        element.style.opacity = "1";
        element.removeAttribute("data-background");
        element.removeAttribute("data-color");
    });
}


/***/ }),

/***/ "./src/animations/index.ts":
/*!*********************************!*\
  !*** ./src/animations/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationHide": () => (/* reexport safe */ _animationHide__WEBPACK_IMPORTED_MODULE_0__.animationHide),
/* harmony export */   "animationShow": () => (/* reexport safe */ _animationShow__WEBPACK_IMPORTED_MODULE_1__.animationShow),
/* harmony export */   "finishGuide": () => (/* reexport safe */ _finishGuide__WEBPACK_IMPORTED_MODULE_2__.finishGuide)
/* harmony export */ });
/* harmony import */ var _animationHide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animationHide */ "./src/animations/animationHide.ts");
/* harmony import */ var _animationShow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationShow */ "./src/animations/animationShow.ts");
/* harmony import */ var _finishGuide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finishGuide */ "./src/animations/finishGuide.ts");





/***/ }),

/***/ "./src/init/arrangeOrder.ts":
/*!**********************************!*\
  !*** ./src/init/arrangeOrder.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrangeOrder": () => (/* binding */ arrangeOrder)
/* harmony export */ });
// export function arrangeOrder(array: HTMLElement[]) {
//     elements.splice(0, elements.length);
//     for (let i = 1; i <= numberOfElements; i++) {
//         elements.push(...array.filter(element => element.getAttribute("data-guide-step") === i.toString()))
//         // problem s porovnanim bolo treba tostring
//     }
// }
function arrangeOrder(array) {
    for (var i = 1; i <= numberOfElements; i++)
        for (var j = 0; j < array.length; j++)
            if (array[j].hasAttribute("data-guide-step")) {
                if (array[j].getAttribute("data-guide-step") === i.toString()) //problem s porovnanim bolo treba tostring
                    elements.push(array[j]);
            }
            else {
                console.log("ERROR : Missing guide-step in your HTML element");
            }
}


/***/ }),

/***/ "./src/init/guideInit.ts":
/*!*******************************!*\
  !*** ./src/init/guideInit.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "guideInit": () => (/* binding */ guideInit)
/* harmony export */ });
/* harmony import */ var _arrangeOrder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrangeOrder */ "./src/init/arrangeOrder.ts");
/* harmony import */ var _popupDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popupDiv */ "./src/popupDiv/index.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/animations/index.ts");



function guideInit(input) {
    var currentNode, ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);
    // clear arrays and variables in case of another start of Guide function
    // while (elements.length > 0) {
    //     elements.pop();
    // }
    // while (popupDivs.length > 0) {
    //     popupDivs.pop();
    // }
    numberOfElements = 0;
    currentPopupDivsIndex = 0;
    idCounter = 1;
    var search;
    var tmpArray = [];
    while (currentNode = ni.nextNode()) {
        if (currentNode.getAttribute("data-guide") === "true") {
            tmpArray.push(currentNode);
            numberOfElements++;
        }
        if (search === 1) {
            allHtmlElements.push(currentNode);
            currentNode.setAttribute("data-backGround", getComputedStyle(currentNode).getPropertyValue('backGround'));
            currentNode.setAttribute("data-color", getComputedStyle(currentNode).getPropertyValue('color'));
            currentNode.style.background = "rgba(255,255,255,0)";
            currentNode.style.color = "#000000";
        }
        if (currentNode.tagName === "BODY") {
            bodyElement = currentNode;
            currentNode.style.background = "rgba(0, 0, 0, 0.85)";
            search = 1;
        }
    }
    (0,_arrangeOrder__WEBPACK_IMPORTED_MODULE_0__.arrangeOrder)(tmpArray);
    for (var i = 0; i < numberOfElements; i++)
        (0,_popupDiv__WEBPACK_IMPORTED_MODULE_1__.createPopupDiv)(elements[i], input);
    popupDivs[currentPopupDivsIndex].style.display = "block";
    popupDivs[currentPopupDivsIndex].style.opacity = "0";
    //@ts-ignore
    $(popupDivs[currentPopupDivsIndex]).animate({
        opacity: 1
    }, 500);
    (0,_animations__WEBPACK_IMPORTED_MODULE_2__.animationShow)(elements[currentPopupDivsIndex]);
}


/***/ }),

/***/ "./src/init/index.ts":
/*!***************************!*\
  !*** ./src/init/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "guideInit": () => (/* reexport safe */ _guideInit__WEBPACK_IMPORTED_MODULE_0__.guideInit)
/* harmony export */ });
/* harmony import */ var _guideInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guideInit */ "./src/init/guideInit.ts");



/***/ }),

/***/ "./src/popupDiv/buttons.ts":
/*!*********************************!*\
  !*** ./src/popupDiv/buttons.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNextButton": () => (/* binding */ createNextButton),
/* harmony export */   "createPrevButton": () => (/* binding */ createPrevButton)
/* harmony export */ });
/* harmony import */ var _nextWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextWindow */ "./src/popupDiv/nextWindow.ts");
/* harmony import */ var _prevWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prevWindow */ "./src/popupDiv/prevWindow.ts");


function createNextButton(newDiv) {
    var nextButton = document.createElement("button");
    if (newDiv.id === "popupDiv" + numberOfElements)
        nextButton.appendChild(document.createTextNode("Finish"));
    else
        nextButton.appendChild(document.createTextNode("Next"));
    nextButton.style.marginLeft = "17px";
    nextButton.style.display = "inline-block";
    nextButton.style.borderRadius = "50px";
    nextButton.id = "nextButton" + (idCounter - 1);
    nextButton.addEventListener("click", function () { (0,_nextWindow__WEBPACK_IMPORTED_MODULE_0__.nextWindow)(); });
    return nextButton;
}
function createPrevButton(newDiv) {
    var prevButton = document.createElement("button");
    prevButton.appendChild(document.createTextNode("Prev"));
    prevButton.style.marginLeft = "5px";
    prevButton.style.borderRadius = "50px";
    prevButton.id = "prevButton" + (idCounter - 1);
    prevButton.addEventListener('click', function () { (0,_prevWindow__WEBPACK_IMPORTED_MODULE_1__.prevWindow)(); });
    newDiv.appendChild(prevButton);
    return prevButton;
}


/***/ }),

/***/ "./src/popupDiv/createPopupDiv.ts":
/*!****************************************!*\
  !*** ./src/popupDiv/createPopupDiv.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopupDiv": () => (/* binding */ createPopupDiv)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations */ "./src/animations/index.ts");
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setStyle */ "./src/popupDiv/setStyle.ts");
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progressBar */ "./src/popupDiv/progressBar.ts");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons */ "./src/popupDiv/buttons.ts");




function createPopupDiv(currentNode, inputMessage) {
    var newDiv = document.createElement("div");
    newDiv.id = "popupDiv" + idCounter;
    popupDivs.push(newDiv);
    idCounter++;
    var exitButton = document.createElement("button");
    exitButton.appendChild(document.createTextNode("X"));
    exitButton.addEventListener("click", function () {
        (0,_animations__WEBPACK_IMPORTED_MODULE_0__.finishGuide)();
    });
    newDiv.appendChild(exitButton);
    var newP = document.createElement("p");
    if (inputMessage[idCounter - 2] !== null && inputMessage[idCounter - 2] !== undefined)
        newP.appendChild(document.createTextNode(inputMessage[idCounter - 2]));
    else
        newP.appendChild(document.createTextNode("NO MESSAGE WRITTEN"));
    // newP.appendChild(document.createTextNode(currentNode.getAttribute("data-guide-message")));
    newP.style.marginLeft = "12px";
    newP.style.marginRight = "12px";
    newP.style.marginTop = "0";
    newDiv.appendChild(newP);
    // const nextButton = document.createElement("button") as HTMLButtonElement;
    //
    // if (newDiv.id === "popupDiv" + numberOfElements)
    //     nextButton.appendChild(document.createTextNode("Finish"));
    // else
    //     nextButton.appendChild(document.createTextNode("Next"));
    //
    // nextButton.style.marginLeft = "17px";
    // nextButton.style.display = "inline-block";
    // nextButton.style.borderRadius = "50px";
    // nextButton.id="nextButton"+(idCounter-1);
    //
    // nextButton.addEventListener("click", () => {nextWindow();});
    var nextButton = (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.createNextButton)(newDiv);
    newDiv.appendChild(nextButton);
    if (newDiv.id !== "popupDiv1") { // aby prve okno nemalo previous button
        // const prevButton = document.createElement("button");
        // prevButton.appendChild(document.createTextNode("Prev"));
        // prevButton.style.marginLeft = "5px";
        // prevButton.style.borderRadius = "50px";
        // prevButton.id="prevButton"+(idCounter-1);
        // prevButton.addEventListener('click', () => {prevWindow();});
        // newDiv.appendChild(prevButton);
        var prevButton = (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.createPrevButton)(newDiv);
        newDiv.appendChild(prevButton);
    }
    // const progress = document.createElement("progress") as HTMLProgressElement;
    // progress.style.marginLeft = "5px";
    // progress.value = idCounter - 2;
    // progress.max = elements.length;
    var progress = (0,_progressBar__WEBPACK_IMPORTED_MODULE_2__.createProgressBar)();
    newDiv.appendChild(progress);
    document.body.appendChild(newDiv);
    (0,_setStyle__WEBPACK_IMPORTED_MODULE_1__.setStyle)(newDiv, currentNode, exitButton);
}


/***/ }),

/***/ "./src/popupDiv/index.ts":
/*!*******************************!*\
  !*** ./src/popupDiv/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopupDiv": () => (/* reexport safe */ _createPopupDiv__WEBPACK_IMPORTED_MODULE_0__.createPopupDiv),
/* harmony export */   "setStyle": () => (/* reexport safe */ _setStyle__WEBPACK_IMPORTED_MODULE_1__.setStyle),
/* harmony export */   "nextWindow": () => (/* reexport safe */ _nextWindow__WEBPACK_IMPORTED_MODULE_2__.nextWindow),
/* harmony export */   "prevWindow": () => (/* reexport safe */ _prevWindow__WEBPACK_IMPORTED_MODULE_3__.prevWindow)
/* harmony export */ });
/* harmony import */ var _createPopupDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopupDiv */ "./src/popupDiv/createPopupDiv.ts");
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setStyle */ "./src/popupDiv/setStyle.ts");
/* harmony import */ var _nextWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nextWindow */ "./src/popupDiv/nextWindow.ts");
/* harmony import */ var _prevWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prevWindow */ "./src/popupDiv/prevWindow.ts");






/***/ }),

/***/ "./src/popupDiv/nextWindow.ts":
/*!************************************!*\
  !*** ./src/popupDiv/nextWindow.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nextWindow": () => (/* binding */ nextWindow)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations */ "./src/animations/index.ts");

function nextWindow() {
    if (currentPopupDivsIndex >= popupDivs.length - 1) {
        // alert("koniec");
        (0,_animations__WEBPACK_IMPORTED_MODULE_0__.finishGuide)();
    }
    else {
        // popupDivs[currentPopupDivsIndex++].style.display = "none";  //
        //@ts-ignore
        $(popupDivs[currentPopupDivsIndex]).animate({
            opacity: 0.0
        }, 500);
        (0,_animations__WEBPACK_IMPORTED_MODULE_0__.animationHide)(elements[currentPopupDivsIndex]);
        document.getElementById("nextButton" + (currentPopupDivsIndex + 1)).disabled = true;
        document.getElementById("prevButton" + (currentPopupDivsIndex + 2)).disabled = false;
        (0,_animations__WEBPACK_IMPORTED_MODULE_0__.animationShow)(elements[currentPopupDivsIndex + 1]);
        setTimeout(function () {
            if (currentPopupDivsIndex === 0)
                popupDivs[0].style.display = "none";
            else
                popupDivs[currentPopupDivsIndex - 1].style.display = "none";
        }, 500);
        currentPopupDivsIndex++;
        popupDivs[currentPopupDivsIndex].style.display = "block";
        popupDivs[currentPopupDivsIndex].style.opacity = "0";
        //@ts-ignore
        $(popupDivs[currentPopupDivsIndex]).animate({
            opacity: 1
        }, 500);
        // popupDivs[currentPopupDivsIndex].style.display = "block"; //
    }
}


/***/ }),

/***/ "./src/popupDiv/prevWindow.ts":
/*!************************************!*\
  !*** ./src/popupDiv/prevWindow.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prevWindow": () => (/* binding */ prevWindow)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations */ "./src/animations/index.ts");

function prevWindow() {
    if (currentPopupDivsIndex < 1) {
        alert("koniec");
        popupDivs[currentPopupDivsIndex--].style.display = "none";
    }
    else {
        // popupDivs[currentPopupDivsIndex--].style.display = "none";   //
        // popupDivs[currentPopupDivsIndex].style.display = "block";   //
        //@ts-ignore
        $(popupDivs[currentPopupDivsIndex]).animate({
            opacity: 0.0
        }, 500);
        (0,_animations__WEBPACK_IMPORTED_MODULE_0__.animationShow)(elements[currentPopupDivsIndex - 1]);
        document.getElementById("nextButton" + (currentPopupDivsIndex)).disabled = false;
        document.getElementById("prevButton" + (currentPopupDivsIndex + 1)).disabled = true;
        (0,_animations__WEBPACK_IMPORTED_MODULE_0__.animationHide)(elements[currentPopupDivsIndex]);
        setTimeout(function () {
            popupDivs[currentPopupDivsIndex + 1].style.display = "none";
        }, 500);
        currentPopupDivsIndex--;
        popupDivs[currentPopupDivsIndex].style.display = "block";
        popupDivs[currentPopupDivsIndex].style.opacity = "0";
        //@ts-ignore
        $(popupDivs[currentPopupDivsIndex]).animate({
            opacity: 1
        }, 500);
    }
}


/***/ }),

/***/ "./src/popupDiv/progressBar.ts":
/*!*************************************!*\
  !*** ./src/popupDiv/progressBar.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProgressBar": () => (/* binding */ createProgressBar)
/* harmony export */ });
function createProgressBar() {
    var progress = document.createElement("progress");
    progress.style.marginLeft = "5px";
    progress.value = idCounter - 2;
    progress.max = elements.length;
    return progress;
}


/***/ }),

/***/ "./src/popupDiv/setStyle.ts":
/*!**********************************!*\
  !*** ./src/popupDiv/setStyle.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setStyle": () => (/* binding */ setStyle)
/* harmony export */ });
function setStyle(div, currentNode, exitButton) {
    var position = currentNode.getAttribute("data-guide-position");
    // console.log(position);
    // div.style.display="none";
    // problem v ziskani pozicie kedze som nastavil najprv display none a potom zistoval poziciu
    div.style.position = "absolute";
    div.style.borderRadius = "20px";
    div.style.maxWidth = "20%";
    div.style.minWidth = "300px";
    div.style.width = "auto";
    div.style.height = "auto";
    div.style.backgroundColor = "white";
    div.style.zIndex = "200";
    div.style.opacity = "1";
    exitButton.style.background = "#ffffff";
    exitButton.style.border = "none";
    exitButton.style.color = "red";
    exitButton.style.position = "relative";
    if (position === "U") {
        div.style.top = currentNode.offsetTop - div.offsetHeight - 4 + 'px';
        div.style.left = currentNode.offsetLeft + 'px';
        exitButton.style.paddingTop = "2%";
        exitButton.style.left = div.offsetWidth - exitButton.offsetWidth + 'px';
    }
    else if (position === "R") {
        div.style.top = currentNode.offsetTop - currentNode.offsetHeight / 2 + 'px';
        div.style.left = currentNode.offsetLeft + currentNode.offsetWidth + 1 + 'px';
        exitButton.style.paddingTop = "2%";
        exitButton.style.left = div.offsetWidth - exitButton.offsetWidth + 'px';
    }
    else if (position === "L") {
        div.style.top = currentNode.offsetTop - currentNode.offsetHeight / 2 + 'px';
        div.style.left = currentNode.offsetLeft - div.offsetWidth - 1 + 'px';
        exitButton.style.paddingTop = "2%";
        exitButton.style.left = div.style.width + 'px';
    }
    else {
        div.style.top = currentNode.offsetTop + currentNode.offsetHeight + 1 + 'px';
        div.style.left = currentNode.offsetLeft + 'px';
        exitButton.style.paddingTop = "2%";
        exitButton.style.left = div.offsetWidth - exitButton.offsetWidth + 'px';
    }
    div.style.display = "none";
}


/***/ }),

/***/ "./src/startGuide.ts":
/*!***************************!*\
  !*** ./src/startGuide.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "guide": () => (/* binding */ guide)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/init/index.ts");

function guide(input) {
    window.elements = [];
    window.popupDivs = [];
    window.numberOfElements = 0;
    window.currentPopupDivsIndex = 0;
    window.idCounter = 0;
    window.bodyElement = null;
    window.allHtmlElements = [];
    (0,_init__WEBPACK_IMPORTED_MODULE_0__.guideInit)(input);
}
// document.getElementById("guide").addEventListener("click",()=>guide(["prva", "druha", "tretia", "stvrta"]));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "guide": () => (/* reexport safe */ _startGuide__WEBPACK_IMPORTED_MODULE_0__.guide),
/* harmony export */   "guideInit": () => (/* reexport safe */ _init__WEBPACK_IMPORTED_MODULE_1__.guideInit),
/* harmony export */   "createPopupDiv": () => (/* reexport safe */ _popupDiv__WEBPACK_IMPORTED_MODULE_2__.createPopupDiv),
/* harmony export */   "nextWindow": () => (/* reexport safe */ _popupDiv__WEBPACK_IMPORTED_MODULE_2__.nextWindow),
/* harmony export */   "prevWindow": () => (/* reexport safe */ _popupDiv__WEBPACK_IMPORTED_MODULE_2__.prevWindow),
/* harmony export */   "setStyle": () => (/* reexport safe */ _popupDiv__WEBPACK_IMPORTED_MODULE_2__.setStyle),
/* harmony export */   "animationHide": () => (/* reexport safe */ _animations__WEBPACK_IMPORTED_MODULE_3__.animationHide),
/* harmony export */   "animationShow": () => (/* reexport safe */ _animations__WEBPACK_IMPORTED_MODULE_3__.animationShow),
/* harmony export */   "finishGuide": () => (/* reexport safe */ _animations__WEBPACK_IMPORTED_MODULE_3__.finishGuide)
/* harmony export */ });
/* harmony import */ var _startGuide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startGuide */ "./src/startGuide.ts");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./src/init/index.ts");
/* harmony import */ var _popupDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popupDiv */ "./src/popupDiv/index.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./src/animations/index.ts");





// @ts-ignore
window.guide = _startGuide__WEBPACK_IMPORTED_MODULE_0__.guide;
//document.getElementById("guide").addEventListener("click",()=>guide(["prva", "druha", "tretia", "stvrta"]));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9hbmltYXRpb25zL2FuaW1hdGlvbkhpZGUudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvYW5pbWF0aW9ucy9hbmltYXRpb25TaG93LnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthLy4vc3JjL2FuaW1hdGlvbnMvZmluaXNoR3VpZGUudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvYW5pbWF0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9pbml0L2FycmFuZ2VPcmRlci50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9pbml0L2d1aWRlSW5pdC50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9pbml0L2luZGV4LnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthLy4vc3JjL3BvcHVwRGl2L2J1dHRvbnMudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvcG9wdXBEaXYvY3JlYXRlUG9wdXBEaXYudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvcG9wdXBEaXYvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvcG9wdXBEaXYvbmV4dFdpbmRvdy50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9wb3B1cERpdi9wcmV2V2luZG93LnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthLy4vc3JjL3BvcHVwRGl2L3Byb2dyZXNzQmFyLnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthLy4vc3JjL3BvcHVwRGl2L3NldFN0eWxlLnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthLy4vc3JjL3N0YXJ0R3VpZGUudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2Evd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2Evd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2Evd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLFNBQVMsYUFBYSxDQUFDLE9BQW9CO0lBQzlDLElBQU0sS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUIsSUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUUvQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxFQUFFLEVBQUUsMkJBQTJCLEdBQUcscUJBQXFCLENBQUMsQ0FBQztJQUNsRyxZQUFZO0lBQ1osQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRTtRQUMzQixRQUFRLEVBQUUsR0FBRztRQUFFLElBQUksWUFBQyxHQUFHO1lBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsT0FBTztnQkFDbkMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsR0FBRztnQkFDakUsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENB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QUFJLEdBQUcsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDL0MsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ25DLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7S0FDM0U7U0FBTSxJQUFJLFFBQVEsS0FBSyxHQUFHLEVBQUU7UUFDekIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDNUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDN0UsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ25DLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7S0FDM0U7U0FBTSxJQUFJLFFBQVEsS0FBSyxHQUFHLEVBQUU7UUFDekIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDNUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckUsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ25DLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFJLEdBQXNCLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7S0FDdEU7U0FBTTtRQUNILEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzVFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQy9DLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUNuQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0tBQzNFO0lBR0QsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQy9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q2dDO0FBRTFCLFNBQVMsS0FBSyxDQUFDLEtBQWU7SUFDakMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsTUFBTSxDQUFDLFNBQVMsR0FBQyxFQUFFLENBQUM7SUFDcEIsTUFBTSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztJQUM1QixNQUFNLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLE1BQU0sQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLGdEQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckIsQ0FBQztBQUVELCtHQUErRzs7Ozs7OztVQ2IvRztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBRU47QUFDTjtBQUNJO0FBQ0U7QUFFN0IsYUFBYTtBQUNiLE1BQU0sQ0FBQyxLQUFLLEdBQUMsOENBQUssQ0FBQztBQUVuQiw4R0FBOEciLCJmaWxlIjoibGlia2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYW5pbWF0aW9uSGlkZShlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBbNDAsIDQwLCA0MCwgMF07XHJcbiAgICBjb25zdCBlbmQgPSBbMjU1LCAyNTUsIDI1NSwgMV07XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJoaWRpbmcgZWxlbWVudCA6XCIgKyBlbGVtZW50LmlkLCBcImN1cnJlbnQgcG9wdXBEaXYgaW5kZXggOiBcIiArIGN1cnJlbnRQb3B1cERpdnNJbmRleCk7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgICQoZWxlbWVudCkuYW5pbWF0ZSh7J2FhYSc6IDB9LCB7ICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBkdXJhdGlvbjogNTAwLCBzdGVwKG5vdykgeyAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAncmdiYSgnICtcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KChzdGFydFswXSArIChlbmRbMF0gLSBzdGFydFswXSkgKiBub3cpLnRvU3RyaW5nKCkpICsgJywnICtcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KChzdGFydFsxXSArIChlbmRbMV0gLSBzdGFydFsxXSkgKiBub3cpLnRvU3RyaW5nKCkpICsgJywnICtcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KChzdGFydFsyXSArIChlbmRbMl0gLSBzdGFydFsyXSkgKiBub3cpLnRvU3RyaW5nKCkpICsgJyknXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBhbmltYXRpb25TaG93KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNob3dpbmcgZWxlbWVudCA6XCIgKyBlbGVtZW50LmlkLCBcImN1cnJlbnQgcG9wdXBEaXYgaW5kZXggOiBcIiArIGN1cnJlbnRQb3B1cERpdnNJbmRleCk7XHJcblxyXG4gICAgY29uc3Qgc3RhcnQgPSBbNDAsIDQwLCA0MCwgMF07XHJcbiAgICBjb25zdCBlbmQgPSBbMjU1LCAyNTUsIDI1NSwgMV07XHJcbi8vQHRzLWlnbm9yZVxyXG4gICAgJChlbGVtZW50KS5hbmltYXRlKHsnYWFhJzogMX0sIHsvL0B0cy1pZ25vcmVcclxuICAgICAgICBkdXJhdGlvbjogNTAwLCBzdGVwKG5vdykgey8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKCcgK1xyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoKHN0YXJ0WzBdICsgKGVuZFswXSAtIHN0YXJ0WzBdKSAqIG5vdykudG9TdHJpbmcoKSkgKyAnLCcgK1xyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoKHN0YXJ0WzFdICsgKGVuZFsxXSAtIHN0YXJ0WzFdKSAqIG5vdykudG9TdHJpbmcoKSkgKyAnLCcgK1xyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoKHN0YXJ0WzJdICsgKGVuZFsyXSAtIHN0YXJ0WzJdKSAqIG5vdykudG9TdHJpbmcoKSkgKyAnKSdcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZpbmlzaEd1aWRlKCkge1xyXG4gICAgcG9wdXBEaXZzLmZvckVhY2goZGl2PT57ZGl2LnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9KTtcclxuICAgIC8vIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXgrK10uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgYm9keUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiO1xyXG4gICAgYWxsSHRtbEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJhY2tncm91bmRcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xvclwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYmFja2dyb3VuZFwiKTtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtY29sb3JcIik7XHJcbiAgICB9KTtcclxufSIsImV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uSGlkZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uU2hvdyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZmluaXNoR3VpZGUnOyIsIi8vIGV4cG9ydCBmdW5jdGlvbiBhcnJhbmdlT3JkZXIoYXJyYXk6IEhUTUxFbGVtZW50W10pIHtcclxuLy8gICAgIGVsZW1lbnRzLnNwbGljZSgwLCBlbGVtZW50cy5sZW5ndGgpO1xyXG4vLyAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZFbGVtZW50czsgaSsrKSB7XHJcbi8vICAgICAgICAgZWxlbWVudHMucHVzaCguLi5hcnJheS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtZ3VpZGUtc3RlcFwiKSA9PT0gaS50b1N0cmluZygpKSlcclxuLy8gICAgICAgICAvLyBwcm9ibGVtIHMgcG9yb3ZuYW5pbSBib2xvIHRyZWJhIHRvc3RyaW5nXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJhbmdlT3JkZXIoYXJyYXk6SFRNTEVsZW1lbnRbXSl7XHJcbiAgICBmb3IgKHZhciBpPTE7aTw9bnVtYmVyT2ZFbGVtZW50cztpKyspXHJcbiAgICAgICAgZm9yKHZhciBqPTA7ajxhcnJheS5sZW5ndGg7aisrKVxyXG4gICAgICAgICAgICBpZihhcnJheVtqXS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWd1aWRlLXN0ZXBcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcnJheVtqXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWd1aWRlLXN0ZXBcIikgPT09IGkudG9TdHJpbmcoKSkgLy9wcm9ibGVtIHMgcG9yb3ZuYW5pbSBib2xvIHRyZWJhIHRvc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaChhcnJheVtqXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgOiBNaXNzaW5nIGd1aWRlLXN0ZXAgaW4geW91ciBIVE1MIGVsZW1lbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxufSIsImltcG9ydCB7YXJyYW5nZU9yZGVyfSBmcm9tIFwiLi9hcnJhbmdlT3JkZXJcIjtcclxuaW1wb3J0IHtjcmVhdGVQb3B1cERpdn0gZnJvbSBcIi4uL3BvcHVwRGl2XCI7XHJcbmltcG9ydCB7YW5pbWF0aW9uU2hvd30gZnJvbSBcIi4uL2FuaW1hdGlvbnNcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ3VpZGVJbml0KGlucHV0OiBzdHJpbmdbXSkge1xyXG4gICAgbGV0IGN1cnJlbnROb2RlLCBuaSA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UKTtcclxuXHJcbiAgICAvLyBjbGVhciBhcnJheXMgYW5kIHZhcmlhYmxlcyBpbiBjYXNlIG9mIGFub3RoZXIgc3RhcnQgb2YgR3VpZGUgZnVuY3Rpb25cclxuICAgIC8vIHdoaWxlIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgICAgZWxlbWVudHMucG9wKCk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyB3aGlsZSAocG9wdXBEaXZzLmxlbmd0aCA+IDApIHtcclxuICAgIC8vICAgICBwb3B1cERpdnMucG9wKCk7XHJcbiAgICAvLyB9XHJcbiAgICBudW1iZXJPZkVsZW1lbnRzID0gMDtcclxuICAgIGN1cnJlbnRQb3B1cERpdnNJbmRleCA9IDA7XHJcbiAgICBpZENvdW50ZXIgPSAxO1xyXG5cclxuICAgIGxldCBzZWFyY2g6IG51bWJlcjtcclxuICAgIGNvbnN0IHRtcEFycmF5ID0gW107XHJcbiAgICB3aGlsZSAoY3VycmVudE5vZGUgPSBuaS5uZXh0Tm9kZSgpIGFzIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZ3VpZGVcIikgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRtcEFycmF5LnB1c2goY3VycmVudE5vZGUpO1xyXG4gICAgICAgICAgICBudW1iZXJPZkVsZW1lbnRzKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VhcmNoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGFsbEh0bWxFbGVtZW50cy5wdXNoKGN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1iYWNrR3JvdW5kXCIsIGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tHcm91bmQnKSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZShcImRhdGEtY29sb3JcIiwgZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgnY29sb3InKSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMjU1LDI1NSwyNTUsMClcIjtcclxuICAgICAgICAgICAgY3VycmVudE5vZGUuc3R5bGUuY29sb3IgPSBcIiMwMDAwMDBcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS50YWdOYW1lID09PSBcIkJPRFlcIikge1xyXG4gICAgICAgICAgICBib2R5RWxlbWVudCA9IGN1cnJlbnROb2RlO1xyXG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsIDAsIDAsIDAuODUpXCI7XHJcbiAgICAgICAgICAgIHNlYXJjaCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhcnJhbmdlT3JkZXIodG1wQXJyYXkpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkVsZW1lbnRzOyBpKyspXHJcbiAgICAgICAgY3JlYXRlUG9wdXBEaXYoZWxlbWVudHNbaV0sIGlucHV0KTtcclxuXHJcbiAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICAkKHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdKS5hbmltYXRlKHtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9LCA1MDApO1xyXG4gICAgYW5pbWF0aW9uU2hvdyhlbGVtZW50c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdKTtcclxuXHJcbn0iLCJleHBvcnQge2d1aWRlSW5pdH0gZnJvbSAnLi9ndWlkZUluaXQnOyIsImltcG9ydCB7bmV4dFdpbmRvd30gZnJvbSBcIi4vbmV4dFdpbmRvd1wiO1xyXG5pbXBvcnQge3ByZXZXaW5kb3d9IGZyb20gXCIuL3ByZXZXaW5kb3dcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXh0QnV0dG9uKG5ld0Rpdil7XHJcbiAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgICBpZiAobmV3RGl2LmlkID09PSBcInBvcHVwRGl2XCIgKyBudW1iZXJPZkVsZW1lbnRzKVxyXG4gICAgICAgIG5leHRCdXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJGaW5pc2hcIikpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIG5leHRCdXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJOZXh0XCIpKTtcclxuXHJcbiAgICBuZXh0QnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjE3cHhcIjtcclxuICAgIG5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICBuZXh0QnV0dG9uLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTBweFwiO1xyXG4gICAgbmV4dEJ1dHRvbi5pZD1cIm5leHRCdXR0b25cIisoaWRDb3VudGVyLTEpO1xyXG5cclxuICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtuZXh0V2luZG93KCk7fSk7XHJcblxyXG4gICAgcmV0dXJuIG5leHRCdXR0b247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcmV2QnV0dG9uKG5ld0Rpdil7XHJcbiAgICBjb25zdCBwcmV2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHByZXZCdXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJQcmV2XCIpKTtcclxuICAgIHByZXZCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNXB4XCI7XHJcbiAgICBwcmV2QnV0dG9uLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTBweFwiO1xyXG4gICAgcHJldkJ1dHRvbi5pZD1cInByZXZCdXR0b25cIisoaWRDb3VudGVyLTEpO1xyXG4gICAgcHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtwcmV2V2luZG93KCk7fSk7XHJcbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQocHJldkJ1dHRvbik7XHJcbiAgICByZXR1cm4gcHJldkJ1dHRvbjtcclxufSIsImltcG9ydCB7ZmluaXNoR3VpZGV9IGZyb20gXCIuLi9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7c2V0U3R5bGV9IGZyb20gXCIuL3NldFN0eWxlXCI7XHJcbmltcG9ydCB7cHJldldpbmRvd30gZnJvbSBcIi4vcHJldldpbmRvd1wiO1xyXG5pbXBvcnQge25leHRXaW5kb3d9IGZyb20gXCIuL25leHRXaW5kb3dcIjtcclxuaW1wb3J0IHtjcmVhdGVQcm9ncmVzc0Jhcn0gZnJvbSBcIi4vcHJvZ3Jlc3NCYXJcIjtcclxuaW1wb3J0IHtjcmVhdGVOZXh0QnV0dG9uLCBjcmVhdGVQcmV2QnV0dG9ufSBmcm9tIFwiLi9idXR0b25zXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvcHVwRGl2KGN1cnJlbnROb2RlOiBIVE1MRWxlbWVudCwgaW5wdXRNZXNzYWdlOiBzdHJpbmdbXSkge1xyXG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIG5ld0Rpdi5pZCA9IFwicG9wdXBEaXZcIiArIGlkQ291bnRlcjtcclxuICAgIHBvcHVwRGl2cy5wdXNoKG5ld0Rpdik7XHJcbiAgICBpZENvdW50ZXIrKztcclxuXHJcbiAgICBjb25zdCBleGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGV4aXRCdXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJYXCIpKTtcclxuICAgIGV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBmaW5pc2hHdWlkZSgpO1xyXG4gICAgfSk7XHJcbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoZXhpdEJ1dHRvbik7XHJcblxyXG4gICAgY29uc3QgbmV3UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgaWYgKGlucHV0TWVzc2FnZVtpZENvdW50ZXIgLSAyXSAhPT0gbnVsbCAmJiBpbnB1dE1lc3NhZ2VbaWRDb3VudGVyIC0gMl0gIT09IHVuZGVmaW5lZClcclxuICAgICAgICBuZXdQLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGlucHV0TWVzc2FnZVtpZENvdW50ZXIgLSAyXSkpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIG5ld1AuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJOTyBNRVNTQUdFIFdSSVRURU5cIikpO1xyXG4gICAgLy8gbmV3UC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdXJyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWd1aWRlLW1lc3NhZ2VcIikpKTtcclxuICAgIG5ld1Auc3R5bGUubWFyZ2luTGVmdCA9IFwiMTJweFwiO1xyXG4gICAgbmV3UC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMTJweFwiO1xyXG4gICAgbmV3UC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjBcIjtcclxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdQKTtcclxuXHJcblxyXG4gICAgLy8gY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAvL1xyXG4gICAgLy8gaWYgKG5ld0Rpdi5pZCA9PT0gXCJwb3B1cERpdlwiICsgbnVtYmVyT2ZFbGVtZW50cylcclxuICAgIC8vICAgICBuZXh0QnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRmluaXNoXCIpKTtcclxuICAgIC8vIGVsc2VcclxuICAgIC8vICAgICBuZXh0QnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTmV4dFwiKSk7XHJcbiAgICAvL1xyXG4gICAgLy8gbmV4dEJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIxN3B4XCI7XHJcbiAgICAvLyBuZXh0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgLy8gbmV4dEJ1dHRvbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjUwcHhcIjtcclxuICAgIC8vIG5leHRCdXR0b24uaWQ9XCJuZXh0QnV0dG9uXCIrKGlkQ291bnRlci0xKTtcclxuICAgIC8vXHJcbiAgICAvLyBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7bmV4dFdpbmRvdygpO30pO1xyXG5cclxuICAgIGNvbnN0IG5leHRCdXR0b249Y3JlYXRlTmV4dEJ1dHRvbihuZXdEaXYpO1xyXG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKG5leHRCdXR0b24pO1xyXG5cclxuXHJcbiAgICBpZiAobmV3RGl2LmlkICE9PSBcInBvcHVwRGl2MVwiKSB7ICAgICAgICAgICAvLyBhYnkgcHJ2ZSBva25vIG5lbWFsbyBwcmV2aW91cyBidXR0b25cclxuICAgICAgICAvLyBjb25zdCBwcmV2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAvLyBwcmV2QnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUHJldlwiKSk7XHJcbiAgICAgICAgLy8gcHJldkJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI1cHhcIjtcclxuICAgICAgICAvLyBwcmV2QnV0dG9uLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTBweFwiO1xyXG4gICAgICAgIC8vIHByZXZCdXR0b24uaWQ9XCJwcmV2QnV0dG9uXCIrKGlkQ291bnRlci0xKTtcclxuICAgICAgICAvLyBwcmV2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3ByZXZXaW5kb3coKTt9KTtcclxuICAgICAgICAvLyBuZXdEaXYuYXBwZW5kQ2hpbGQocHJldkJ1dHRvbik7XHJcbiAgICAgICAgY29uc3QgcHJldkJ1dHRvbiA9IGNyZWF0ZVByZXZCdXR0b24obmV3RGl2KTtcclxuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQocHJldkJ1dHRvbik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IHByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByb2dyZXNzXCIpIGFzIEhUTUxQcm9ncmVzc0VsZW1lbnQ7XHJcbiAgICAvLyBwcm9ncmVzcy5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI1cHhcIjtcclxuICAgIC8vIHByb2dyZXNzLnZhbHVlID0gaWRDb3VudGVyIC0gMjtcclxuICAgIC8vIHByb2dyZXNzLm1heCA9IGVsZW1lbnRzLmxlbmd0aDtcclxuICAgIGNvbnN0IHByb2dyZXNzID0gY3JlYXRlUHJvZ3Jlc3NCYXIoKTtcclxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChwcm9ncmVzcyk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXdEaXYpO1xyXG5cclxuICAgIHNldFN0eWxlKG5ld0RpdiwgY3VycmVudE5vZGUsIGV4aXRCdXR0b24pO1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vY3JlYXRlUG9wdXBEaXYnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NldFN0eWxlJztcclxuZXhwb3J0ICogZnJvbSAnLi9uZXh0V2luZG93JztcclxuZXhwb3J0ICogZnJvbSAnLi9wcmV2V2luZG93JzsiLCJpbXBvcnQge2FuaW1hdGlvbkhpZGUsIGFuaW1hdGlvblNob3csIGZpbmlzaEd1aWRlfSBmcm9tIFwiLi4vYW5pbWF0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5leHRXaW5kb3coKXtcclxuICAgIGlmIChjdXJyZW50UG9wdXBEaXZzSW5kZXggPj0gcG9wdXBEaXZzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAvLyBhbGVydChcImtvbmllY1wiKTtcclxuICAgICAgICBmaW5pc2hHdWlkZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4KytdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIC8vXHJcblxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICQocG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0pLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjBcclxuICAgICAgICB9LCA1MDApO1xyXG5cclxuXHJcbiAgICAgICAgYW5pbWF0aW9uSGlkZShlbGVtZW50c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdKTtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dEJ1dHRvblwiKyhjdXJyZW50UG9wdXBEaXZzSW5kZXgrMSkpKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZCdXR0b25cIisoY3VycmVudFBvcHVwRGl2c0luZGV4KzIpKSkuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBhbmltYXRpb25TaG93KGVsZW1lbnRzW2N1cnJlbnRQb3B1cERpdnNJbmRleCArIDFdKTtcclxuXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBvcHVwRGl2c0luZGV4ID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcG9wdXBEaXZzWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9LCA1MDApO1xyXG5cclxuXHJcbiAgICAgICAgY3VycmVudFBvcHVwRGl2c0luZGV4Kys7XHJcblxyXG4gICAgICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG5cclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAkKHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH0sIDUwMCk7XHJcblxyXG4gICAgICAgIC8vIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IC8vXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2FuaW1hdGlvbkhpZGUsIGFuaW1hdGlvblNob3d9IGZyb20gXCIuLi9hbmltYXRpb25zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJldldpbmRvdygpe1xyXG4gICAgaWYgKGN1cnJlbnRQb3B1cERpdnNJbmRleCA8IDEpIHtcclxuICAgICAgICBhbGVydChcImtvbmllY1wiKTtcclxuICAgICAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4LS1dLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleC0tXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICAgLy9cclxuICAgICAgICAvLyBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgIC8vXHJcblxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICQocG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0pLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjBcclxuICAgICAgICB9LCA1MDApO1xyXG5cclxuXHJcbiAgICAgICAgYW5pbWF0aW9uU2hvdyhlbGVtZW50c1tjdXJyZW50UG9wdXBEaXZzSW5kZXggLSAxXSk7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRCdXR0b25cIisoY3VycmVudFBvcHVwRGl2c0luZGV4KSkpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZCdXR0b25cIisoY3VycmVudFBvcHVwRGl2c0luZGV4KzEpKSkuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGFuaW1hdGlvbkhpZGUoZWxlbWVudHNbY3VycmVudFBvcHVwRGl2c0luZGV4XSk7XHJcblxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleCArIDFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9LCA1MDApO1xyXG5cclxuXHJcbiAgICAgICAgY3VycmVudFBvcHVwRGl2c0luZGV4LS07XHJcblxyXG4gICAgICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG5cclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAkKHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZ3Jlc3NCYXIoKXtcclxuICAgIGNvbnN0IHByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByb2dyZXNzXCIpIGFzIEhUTUxQcm9ncmVzc0VsZW1lbnQ7XHJcbiAgICBwcm9ncmVzcy5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI1cHhcIjtcclxuICAgIHByb2dyZXNzLnZhbHVlID0gaWRDb3VudGVyIC0gMjtcclxuICAgIHByb2dyZXNzLm1heCA9IGVsZW1lbnRzLmxlbmd0aDtcclxuICAgIHJldHVybiBwcm9ncmVzcztcclxufSIsImV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZShkaXY6IEhUTUxFbGVtZW50LCBjdXJyZW50Tm9kZTogSFRNTEVsZW1lbnQsIGV4aXRCdXR0b246IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IGN1cnJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZ3VpZGUtcG9zaXRpb25cIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwb3NpdGlvbik7XHJcbiAgICAvLyBkaXYuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcclxuICAgIC8vIHByb2JsZW0gdiB6aXNrYW5pIHBvemljaWUga2VkemUgc29tIG5hc3RhdmlsIG5hanBydiBkaXNwbGF5IG5vbmUgYSBwb3RvbSB6aXN0b3ZhbCBwb3ppY2l1XHJcbiAgICBkaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBkaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIyMHB4XCI7XHJcbiAgICBkaXYuc3R5bGUubWF4V2lkdGggPSBcIjIwJVwiO1xyXG4gICAgZGl2LnN0eWxlLm1pbldpZHRoID0gXCIzMDBweFwiO1xyXG4gICAgZGl2LnN0eWxlLndpZHRoID0gXCJhdXRvXCI7XHJcbiAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XHJcbiAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgZGl2LnN0eWxlLnpJbmRleCA9IFwiMjAwXCI7XHJcbiAgICBkaXYuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG5cclxuXHJcbiAgICBleGl0QnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSBcIiNmZmZmZmZcIlxyXG4gICAgZXhpdEJ1dHRvbi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgIGV4aXRCdXR0b24uc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgZXhpdEJ1dHRvbi5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuXHJcbiAgICBpZiAocG9zaXRpb24gPT09IFwiVVwiKSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IGN1cnJlbnROb2RlLm9mZnNldFRvcCAtIGRpdi5vZmZzZXRIZWlnaHQgLSA0ICsgJ3B4JztcclxuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IGN1cnJlbnROb2RlLm9mZnNldExlZnQgKyAncHgnO1xyXG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUucGFkZGluZ1RvcCA9IFwiMiVcIjtcclxuICAgICAgICBleGl0QnV0dG9uLnN0eWxlLmxlZnQgPSBkaXYub2Zmc2V0V2lkdGggLSBleGl0QnV0dG9uLm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09IFwiUlwiKSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IGN1cnJlbnROb2RlLm9mZnNldFRvcCAtIGN1cnJlbnROb2RlLm9mZnNldEhlaWdodCAvIDIgKyAncHgnO1xyXG4gICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gY3VycmVudE5vZGUub2Zmc2V0TGVmdCArIGN1cnJlbnROb2RlLm9mZnNldFdpZHRoICsgMSArICdweCc7XHJcbiAgICAgICAgZXhpdEJ1dHRvbi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyJVwiO1xyXG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUubGVmdCA9IGRpdi5vZmZzZXRXaWR0aCAtIGV4aXRCdXR0b24ub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gXCJMXCIpIHtcclxuICAgICAgICBkaXYuc3R5bGUudG9wID0gY3VycmVudE5vZGUub2Zmc2V0VG9wIC0gY3VycmVudE5vZGUub2Zmc2V0SGVpZ2h0IC8gMiArICdweCc7XHJcbiAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSBjdXJyZW50Tm9kZS5vZmZzZXRMZWZ0IC0gZGl2Lm9mZnNldFdpZHRoIC0gMSArICdweCc7XHJcbiAgICAgICAgZXhpdEJ1dHRvbi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyJVwiO1xyXG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUubGVmdCA9IChkaXYgYXMgSFRNTERpdkVsZW1lbnQpLnN0eWxlLndpZHRoICsgJ3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IGN1cnJlbnROb2RlLm9mZnNldFRvcCArIGN1cnJlbnROb2RlLm9mZnNldEhlaWdodCArIDEgKyAncHgnO1xyXG4gICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gY3VycmVudE5vZGUub2Zmc2V0TGVmdCArICdweCc7XHJcbiAgICAgICAgZXhpdEJ1dHRvbi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyJVwiO1xyXG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUubGVmdCA9IGRpdi5vZmZzZXRXaWR0aCAtIGV4aXRCdXR0b24ub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59IiwiaW1wb3J0IHtndWlkZUluaXR9IGZyb20gXCIuL2luaXRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBndWlkZShpbnB1dDogc3RyaW5nW10pIHtcclxuICAgIHdpbmRvdy5lbGVtZW50cyA9IFtdO1xyXG4gICAgd2luZG93LnBvcHVwRGl2cz1bXTtcclxuICAgIHdpbmRvdy5udW1iZXJPZkVsZW1lbnRzID0gMDtcclxuICAgIHdpbmRvdy5jdXJyZW50UG9wdXBEaXZzSW5kZXggPSAwO1xyXG4gICAgd2luZG93LmlkQ291bnRlciA9IDA7XHJcbiAgICB3aW5kb3cuYm9keUVsZW1lbnQgPSBudWxsO1xyXG4gICAgd2luZG93LmFsbEh0bWxFbGVtZW50cyA9IFtdO1xyXG4gICAgZ3VpZGVJbml0KGlucHV0KTtcclxufVxyXG5cclxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJndWlkZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+Z3VpZGUoW1wicHJ2YVwiLCBcImRydWhhXCIsIFwidHJldGlhXCIsIFwic3R2cnRhXCJdKSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2d1aWRlfSBmcm9tIFwiLi9zdGFydEd1aWRlXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL3N0YXJ0R3VpZGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2luaXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3BvcHVwRGl2JztcclxuZXhwb3J0ICogZnJvbSAnLi9hbmltYXRpb25zJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxud2luZG93Lmd1aWRlPWd1aWRlO1xyXG5cclxuLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1aWRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT5ndWlkZShbXCJwcnZhXCIsIFwiZHJ1aGFcIiwgXCJ0cmV0aWFcIiwgXCJzdHZydGFcIl0pKTsiXSwic291cmNlUm9vdCI6IiJ9