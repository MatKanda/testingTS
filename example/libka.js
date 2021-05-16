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
    setTimeout(function () {
        popupDivs.forEach(function (div) { div.style.display = "none"; });
        bodyElement.style.background = bodyElement.getAttribute("data-background");
        bodyElement.style.color = bodyElement.getAttribute("data-color");
        bodyElement.style.opacity = "1";
        bodyElement.removeAttribute("data-background");
        bodyElement.removeAttribute("data-color");
        // bodyElement.style.background = "rgba(255, 255, 255, 0)";
        allHtmlElements.forEach(function (element) {
            element.style.background = element.getAttribute("data-background");
            element.style.color = element.getAttribute("data-color");
            element.style.opacity = "1";
            element.removeAttribute("data-background");
            element.removeAttribute("data-color");
        });
    }, 400);
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
            bodyElement.setAttribute("data-backGround", getComputedStyle(currentNode).getPropertyValue('backGround'));
            bodyElement.setAttribute("data-color", getComputedStyle(currentNode).getPropertyValue('color'));
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
/* harmony export */   "createPrevButton": () => (/* binding */ createPrevButton),
/* harmony export */   "createExitButton": () => (/* binding */ createExitButton)
/* harmony export */ });
/* harmony import */ var _nextWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextWindow */ "./src/popupDiv/nextWindow.ts");
/* harmony import */ var _prevWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prevWindow */ "./src/popupDiv/prevWindow.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/animations/index.ts");



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
function createExitButton() {
    var exitButton = document.createElement("button");
    exitButton.appendChild(document.createTextNode("X"));
    exitButton.addEventListener("click", function () {
        (0,_animations__WEBPACK_IMPORTED_MODULE_2__.finishGuide)();
    });
    return exitButton;
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
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setStyle */ "./src/popupDiv/setStyle.ts");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ "./src/popupDiv/elements.ts");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons */ "./src/popupDiv/buttons.ts");



function createPopupDiv(currentNode, inputMessage) {
    var newDiv = document.createElement("div");
    newDiv.id = "popupDiv" + idCounter;
    popupDivs.push(newDiv);
    idCounter++;
    var exitButton = (0,_buttons__WEBPACK_IMPORTED_MODULE_2__.createExitButton)();
    newDiv.appendChild(exitButton);
    var newP = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.createParagraph)(inputMessage);
    newDiv.appendChild(newP);
    var nextButton = (0,_buttons__WEBPACK_IMPORTED_MODULE_2__.createNextButton)(newDiv);
    newDiv.appendChild(nextButton);
    if (newDiv.id !== "popupDiv1") {
        var prevButton = (0,_buttons__WEBPACK_IMPORTED_MODULE_2__.createPrevButton)(newDiv);
        newDiv.appendChild(prevButton);
    }
    var progress = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.createProgressBar)();
    newDiv.appendChild(progress);
    document.body.appendChild(newDiv);
    (0,_setStyle__WEBPACK_IMPORTED_MODULE_0__.setStyle)(newDiv, currentNode, exitButton);
}


/***/ }),

/***/ "./src/popupDiv/elements.ts":
/*!**********************************!*\
  !*** ./src/popupDiv/elements.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProgressBar": () => (/* binding */ createProgressBar),
/* harmony export */   "createParagraph": () => (/* binding */ createParagraph)
/* harmony export */ });
function createProgressBar() {
    var progress = document.createElement("progress");
    progress.style.marginLeft = "5px";
    progress.value = idCounter - 2;
    progress.max = elements.length;
    return progress;
}
function createParagraph(inputMessage) {
    var newP = document.createElement("p");
    if (inputMessage[idCounter - 2] !== null && inputMessage[idCounter - 2] !== undefined)
        newP.appendChild(document.createTextNode(inputMessage[idCounter - 2]));
    else
        newP.appendChild(document.createTextNode("NO MESSAGE WRITTEN"));
    newP.style.marginLeft = "12px";
    newP.style.marginRight = "12px";
    newP.style.marginTop = "0";
    newP.style.color = "black";
    return newP;
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
        (0,_animations__WEBPACK_IMPORTED_MODULE_0__.finishGuide)();
    }
    else {
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
    window.idCounter = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9hbmltYXRpb25zL2FuaW1hdGlvbkhpZGUudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvYW5pbWF0aW9ucy9hbmltYXRpb25TaG93LnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthLy4vc3JjL2FuaW1hdGlvbnMvZmluaXNoR3VpZGUudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvYW5pbWF0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9pbml0L2FycmFuZ2VPcmRlci50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9pbml0L2d1aWRlSW5pdC50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9pbml0L2luZGV4LnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthLy4vc3JjL3BvcHVwRGl2L2J1dHRvbnMudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvcG9wdXBEaXYvY3JlYXRlUG9wdXBEaXYudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvcG9wdXBEaXYvZWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvcG9wdXBEaXYvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvcG9wdXBEaXYvbmV4dFdpbmRvdy50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9wb3B1cERpdi9wcmV2V2luZG93LnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthLy4vc3JjL3BvcHVwRGl2L3NldFN0eWxlLnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthLy4vc3JjL3N0YXJ0R3VpZGUudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2Evd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2Evd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2Evd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLFNBQVMsYUFBYSxDQUFDLE9BQW9CO0lBQzlDLElBQU0sS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUIsSUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUUvQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxFQUFFLEVBQUUsMkJBQTJCLEdBQUcscUJBQXFCLENBQUMsQ0FBQztJQUNsRyxZQUFZO0lBQ1osQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRTtRQUMzQixRQUFRLEVBQUUsR0FBRztRQUFFLElBQUksWUFBQyxHQUFHO1lBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsT0FBTztnQkFDbkMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsR0FBRztnQkFDakUsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMs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QU0sQ0FBQztJQUNqQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDL0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBRXZDLElBQUksUUFBUSxLQUFLLEdBQUcsRUFBRTtRQUNsQixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNwRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMvQyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbkMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUMzRTtTQUFNLElBQUksUUFBUSxLQUFLLEdBQUcsRUFBRTtRQUN6QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM1RSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM3RSxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbkMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUMzRTtTQUFNLElBQUksUUFBUSxLQUFLLEdBQUcsRUFBRTtRQUN6QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM1RSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRSxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbkMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUksR0FBc0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztLQUN0RTtTQUFNO1FBQ0gsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDNUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDL0MsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ25DLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7S0FDM0U7SUFHRCxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDL0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzdDZ0M7QUFFMUIsU0FBUyxLQUFLLENBQUMsS0FBZTtJQUNqQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixNQUFNLENBQUMsU0FBUyxHQUFDLEVBQUUsQ0FBQztJQUNwQixNQUFNLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7SUFDakMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDckIsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsTUFBTSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsZ0RBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixDQUFDO0FBRUQsK0dBQStHOzs7Ozs7O1VDYi9HO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFFTjtBQUNOO0FBQ0k7QUFDRTtBQUU3QixhQUFhO0FBQ2IsTUFBTSxDQUFDLEtBQUssR0FBQyw4Q0FBSyxDQUFDO0FBRW5CLDhHQUE4RyIsImZpbGUiOiJsaWJrYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhbmltYXRpb25IaWRlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zdCBzdGFydCA9IFs0MCwgNDAsIDQwLCAwXTtcclxuICAgIGNvbnN0IGVuZCA9IFsyNTUsIDI1NSwgMjU1LCAxXTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImhpZGluZyBlbGVtZW50IDpcIiArIGVsZW1lbnQuaWQsIFwiY3VycmVudCBwb3B1cERpdiBpbmRleCA6IFwiICsgY3VycmVudFBvcHVwRGl2c0luZGV4KTtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgJChlbGVtZW50KS5hbmltYXRlKHsnYWFhJzogMH0sIHsgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDAsIHN0ZXAobm93KSB7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKCcgK1xyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoKHN0YXJ0WzBdICsgKGVuZFswXSAtIHN0YXJ0WzBdKSAqIG5vdykudG9TdHJpbmcoKSkgKyAnLCcgK1xyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoKHN0YXJ0WzFdICsgKGVuZFsxXSAtIHN0YXJ0WzFdKSAqIG5vdykudG9TdHJpbmcoKSkgKyAnLCcgK1xyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoKHN0YXJ0WzJdICsgKGVuZFsyXSAtIHN0YXJ0WzJdKSAqIG5vdykudG9TdHJpbmcoKSkgKyAnKSdcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGlvblNob3coZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwic2hvd2luZyBlbGVtZW50IDpcIiArIGVsZW1lbnQuaWQsIFwiY3VycmVudCBwb3B1cERpdiBpbmRleCA6IFwiICsgY3VycmVudFBvcHVwRGl2c0luZGV4KTtcclxuXHJcbiAgICBjb25zdCBzdGFydCA9IFs0MCwgNDAsIDQwLCAwXTtcclxuICAgIGNvbnN0IGVuZCA9IFsyNTUsIDI1NSwgMjU1LCAxXTtcclxuLy9AdHMtaWdub3JlXHJcbiAgICAkKGVsZW1lbnQpLmFuaW1hdGUoeydhYWEnOiAxfSwgey8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDAsIHN0ZXAobm93KSB7Ly9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYmEoJyArXHJcbiAgICAgICAgICAgICAgICBwYXJzZUludCgoc3RhcnRbMF0gKyAoZW5kWzBdIC0gc3RhcnRbMF0pICogbm93KS50b1N0cmluZygpKSArICcsJyArXHJcbiAgICAgICAgICAgICAgICBwYXJzZUludCgoc3RhcnRbMV0gKyAoZW5kWzFdIC0gc3RhcnRbMV0pICogbm93KS50b1N0cmluZygpKSArICcsJyArXHJcbiAgICAgICAgICAgICAgICBwYXJzZUludCgoc3RhcnRbMl0gKyAoZW5kWzJdIC0gc3RhcnRbMl0pICogbm93KS50b1N0cmluZygpKSArICcpJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gZmluaXNoR3VpZGUoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgcG9wdXBEaXZzLmZvckVhY2goZGl2PT57ZGl2LnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9KTtcclxuICAgICAgICBib2R5RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gYm9keUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1iYWNrZ3JvdW5kXCIpO1xyXG4gICAgICAgIGJvZHlFbGVtZW50LnN0eWxlLmNvbG9yID0gYm9keUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xvclwiKTtcclxuICAgICAgICBib2R5RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgYm9keUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1iYWNrZ3JvdW5kXCIpO1xyXG4gICAgICAgIGJvZHlFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtY29sb3JcIik7XHJcbiAgICAgICAgLy8gYm9keUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiO1xyXG4gICAgICAgIGFsbEh0bWxFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtYmFja2dyb3VuZFwiKTtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xvclwiKTtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1iYWNrZ3JvdW5kXCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtY29sb3JcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LDQwMCk7XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2FuaW1hdGlvbkhpZGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FuaW1hdGlvblNob3cnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ZpbmlzaEd1aWRlJzsiLCIvLyBleHBvcnQgZnVuY3Rpb24gYXJyYW5nZU9yZGVyKGFycmF5OiBIVE1MRWxlbWVudFtdKSB7XHJcbi8vICAgICBlbGVtZW50cy5zcGxpY2UoMCwgZWxlbWVudHMubGVuZ3RoKTtcclxuLy8gICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bWJlck9mRWxlbWVudHM7IGkrKykge1xyXG4vLyAgICAgICAgIGVsZW1lbnRzLnB1c2goLi4uYXJyYXkuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWd1aWRlLXN0ZXBcIikgPT09IGkudG9TdHJpbmcoKSkpXHJcbi8vICAgICAgICAgLy8gcHJvYmxlbSBzIHBvcm92bmFuaW0gYm9sbyB0cmViYSB0b3N0cmluZ1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYW5nZU9yZGVyKGFycmF5OkhUTUxFbGVtZW50W10pe1xyXG4gICAgZm9yICh2YXIgaT0xO2k8PW51bWJlck9mRWxlbWVudHM7aSsrKVxyXG4gICAgICAgIGZvcih2YXIgaj0wO2o8YXJyYXkubGVuZ3RoO2orKylcclxuICAgICAgICAgICAgaWYoYXJyYXlbal0uaGFzQXR0cmlidXRlKFwiZGF0YS1ndWlkZS1zdGVwXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlbal0uZ2V0QXR0cmlidXRlKFwiZGF0YS1ndWlkZS1zdGVwXCIpID09PSBpLnRvU3RyaW5nKCkpIC8vcHJvYmxlbSBzIHBvcm92bmFuaW0gYm9sbyB0cmViYSB0b3N0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goYXJyYXlbal0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIDogTWlzc2luZyBndWlkZS1zdGVwIGluIHlvdXIgSFRNTCBlbGVtZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbn0iLCJpbXBvcnQge2FycmFuZ2VPcmRlcn0gZnJvbSBcIi4vYXJyYW5nZU9yZGVyXCI7XHJcbmltcG9ydCB7Y3JlYXRlUG9wdXBEaXZ9IGZyb20gXCIuLi9wb3B1cERpdlwiO1xyXG5pbXBvcnQge2FuaW1hdGlvblNob3d9IGZyb20gXCIuLi9hbmltYXRpb25zXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGd1aWRlSW5pdChpbnB1dDogc3RyaW5nW10pIHtcclxuICAgIGxldCBjdXJyZW50Tm9kZSwgbmkgPSBkb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCk7XHJcblxyXG4gICAgbnVtYmVyT2ZFbGVtZW50cyA9IDA7XHJcbiAgICBjdXJyZW50UG9wdXBEaXZzSW5kZXggPSAwO1xyXG4gICAgaWRDb3VudGVyID0gMTtcclxuXHJcbiAgICBsZXQgc2VhcmNoOiBudW1iZXI7XHJcbiAgICBjb25zdCB0bXBBcnJheSA9IFtdO1xyXG4gICAgd2hpbGUgKGN1cnJlbnROb2RlID0gbmkubmV4dE5vZGUoKSBhcyBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWd1aWRlXCIpID09PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0bXBBcnJheS5wdXNoKGN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgbnVtYmVyT2ZFbGVtZW50cysrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlYXJjaCA9PT0gMSkge1xyXG4gICAgICAgICAgICBhbGxIdG1sRWxlbWVudHMucHVzaChjdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZShcImRhdGEtYmFja0dyb3VuZFwiLCBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrR3JvdW5kJykpO1xyXG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbG9yXCIsIGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpLmdldFByb3BlcnR5VmFsdWUoJ2NvbG9yJykpO1xyXG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCI7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnN0eWxlLmNvbG9yID0gXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3VycmVudE5vZGUudGFnTmFtZSA9PT0gXCJCT0RZXCIpIHtcclxuICAgICAgICAgICAgYm9keUVsZW1lbnQgPSBjdXJyZW50Tm9kZTtcclxuICAgICAgICAgICAgYm9keUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1iYWNrR3JvdW5kXCIsIGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tHcm91bmQnKSk7XHJcbiAgICAgICAgICAgIGJvZHlFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY29sb3JcIiwgZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgnY29sb3InKSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwgMCwgMCwgMC44NSlcIjtcclxuICAgICAgICAgICAgc2VhcmNoID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFycmFuZ2VPcmRlcih0bXBBcnJheSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mRWxlbWVudHM7IGkrKylcclxuICAgICAgICBjcmVhdGVQb3B1cERpdihlbGVtZW50c1tpXSwgaW5wdXQpO1xyXG5cclxuICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgICQocG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0pLmFuaW1hdGUoe1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH0sIDUwMCk7XHJcbiAgICBhbmltYXRpb25TaG93KGVsZW1lbnRzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0pO1xyXG5cclxufSIsImV4cG9ydCB7Z3VpZGVJbml0fSBmcm9tICcuL2d1aWRlSW5pdCc7IiwiaW1wb3J0IHtuZXh0V2luZG93fSBmcm9tIFwiLi9uZXh0V2luZG93XCI7XHJcbmltcG9ydCB7cHJldldpbmRvd30gZnJvbSBcIi4vcHJldldpbmRvd1wiO1xyXG5pbXBvcnQge2ZpbmlzaEd1aWRlfSBmcm9tIFwiLi4vYW5pbWF0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5leHRCdXR0b24obmV3RGl2KXtcclxuICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgIGlmIChuZXdEaXYuaWQgPT09IFwicG9wdXBEaXZcIiArIG51bWJlck9mRWxlbWVudHMpXHJcbiAgICAgICAgbmV4dEJ1dHRvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkZpbmlzaFwiKSk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgbmV4dEJ1dHRvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIk5leHRcIikpO1xyXG5cclxuICAgIG5leHRCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiMTdweFwiO1xyXG4gICAgbmV4dEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIG5leHRCdXR0b24uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MHB4XCI7XHJcbiAgICBuZXh0QnV0dG9uLmlkPVwibmV4dEJ1dHRvblwiKyhpZENvdW50ZXItMSk7XHJcblxyXG4gICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge25leHRXaW5kb3coKTt9KTtcclxuXHJcbiAgICByZXR1cm4gbmV4dEJ1dHRvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByZXZCdXR0b24obmV3RGl2KXtcclxuICAgIGNvbnN0IHByZXZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgcHJldkJ1dHRvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlByZXZcIikpO1xyXG4gICAgcHJldkJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI1cHhcIjtcclxuICAgIHByZXZCdXR0b24uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MHB4XCI7XHJcbiAgICBwcmV2QnV0dG9uLmlkPVwicHJldkJ1dHRvblwiKyhpZENvdW50ZXItMSk7XHJcbiAgICBwcmV2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3ByZXZXaW5kb3coKTt9KTtcclxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChwcmV2QnV0dG9uKTtcclxuICAgIHJldHVybiBwcmV2QnV0dG9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXhpdEJ1dHRvbigpe1xyXG4gICAgY29uc3QgZXhpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBleGl0QnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiWFwiKSk7XHJcbiAgICBleGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZmluaXNoR3VpZGUoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGV4aXRCdXR0b247XHJcbn1cclxuXHJcbiIsImltcG9ydCB7c2V0U3R5bGV9IGZyb20gXCIuL3NldFN0eWxlXCI7XHJcbmltcG9ydCB7Y3JlYXRlUGFyYWdyYXBoLCBjcmVhdGVQcm9ncmVzc0Jhcn0gZnJvbSBcIi4vZWxlbWVudHNcIjtcclxuaW1wb3J0IHtjcmVhdGVFeGl0QnV0dG9uLCBjcmVhdGVOZXh0QnV0dG9uLCBjcmVhdGVQcmV2QnV0dG9ufSBmcm9tIFwiLi9idXR0b25zXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvcHVwRGl2KGN1cnJlbnROb2RlOiBIVE1MRWxlbWVudCwgaW5wdXRNZXNzYWdlOiBzdHJpbmdbXSkge1xyXG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIG5ld0Rpdi5pZCA9IFwicG9wdXBEaXZcIiArIGlkQ291bnRlcjtcclxuICAgIHBvcHVwRGl2cy5wdXNoKG5ld0Rpdik7XHJcbiAgICBpZENvdW50ZXIrKztcclxuXHJcbiAgICBjb25zdCBleGl0QnV0dG9uID0gY3JlYXRlRXhpdEJ1dHRvbigpO1xyXG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKGV4aXRCdXR0b24pO1xyXG5cclxuICAgIGNvbnN0IG5ld1AgPSBjcmVhdGVQYXJhZ3JhcGgoaW5wdXRNZXNzYWdlKTtcclxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdQKTtcclxuXHJcbiAgICBjb25zdCBuZXh0QnV0dG9uPWNyZWF0ZU5leHRCdXR0b24obmV3RGl2KTtcclxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXh0QnV0dG9uKTtcclxuXHJcblxyXG4gICAgaWYgKG5ld0Rpdi5pZCAhPT0gXCJwb3B1cERpdjFcIikge1xyXG4gICAgICAgIGNvbnN0IHByZXZCdXR0b24gPSBjcmVhdGVQcmV2QnV0dG9uKG5ld0Rpdik7XHJcbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKHByZXZCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2dyZXNzID0gY3JlYXRlUHJvZ3Jlc3NCYXIoKTtcclxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChwcm9ncmVzcyk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXdEaXYpO1xyXG5cclxuICAgIHNldFN0eWxlKG5ld0RpdiwgY3VycmVudE5vZGUsIGV4aXRCdXR0b24pO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9ncmVzc0Jhcigpe1xyXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJvZ3Jlc3NcIikgYXMgSFRNTFByb2dyZXNzRWxlbWVudDtcclxuICAgIHByb2dyZXNzLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjVweFwiO1xyXG4gICAgcHJvZ3Jlc3MudmFsdWUgPSBpZENvdW50ZXIgLSAyO1xyXG4gICAgcHJvZ3Jlc3MubWF4ID0gZWxlbWVudHMubGVuZ3RoO1xyXG4gICAgcmV0dXJuIHByb2dyZXNzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhcmFncmFwaChpbnB1dE1lc3NhZ2UpIHtcclxuICAgIGNvbnN0IG5ld1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIGlmIChpbnB1dE1lc3NhZ2VbaWRDb3VudGVyIC0gMl0gIT09IG51bGwgJiYgaW5wdXRNZXNzYWdlW2lkQ291bnRlciAtIDJdICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgbmV3UC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpbnB1dE1lc3NhZ2VbaWRDb3VudGVyIC0gMl0pKTtcclxuICAgIGVsc2VcclxuICAgICAgICBuZXdQLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTk8gTUVTU0FHRSBXUklUVEVOXCIpKTtcclxuXHJcbiAgICBuZXdQLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjEycHhcIjtcclxuICAgIG5ld1Auc3R5bGUubWFyZ2luUmlnaHQgPSBcIjEycHhcIjtcclxuICAgIG5ld1Auc3R5bGUubWFyZ2luVG9wID0gXCIwXCI7XHJcbiAgICBuZXdQLnN0eWxlLmNvbG9yPVwiYmxhY2tcIjtcclxuXHJcbiAgICByZXR1cm4gbmV3UDtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL2NyZWF0ZVBvcHVwRGl2JztcclxuZXhwb3J0ICogZnJvbSAnLi9zZXRTdHlsZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbmV4dFdpbmRvdyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcHJldldpbmRvdyc7IiwiaW1wb3J0IHthbmltYXRpb25IaWRlLCBhbmltYXRpb25TaG93LCBmaW5pc2hHdWlkZX0gZnJvbSBcIi4uL2FuaW1hdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXh0V2luZG93KCl7XHJcbiAgICBpZiAoY3VycmVudFBvcHVwRGl2c0luZGV4ID49IHBvcHVwRGl2cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgZmluaXNoR3VpZGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgJChwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMFxyXG4gICAgICAgIH0sIDUwMCk7XHJcblxyXG5cclxuICAgICAgICBhbmltYXRpb25IaWRlKGVsZW1lbnRzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0pO1xyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0QnV0dG9uXCIrKGN1cnJlbnRQb3B1cERpdnNJbmRleCsxKSkpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldkJ1dHRvblwiKyhjdXJyZW50UG9wdXBEaXZzSW5kZXgrMikpKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGFuaW1hdGlvblNob3coZWxlbWVudHNbY3VycmVudFBvcHVwRGl2c0luZGV4ICsgMV0pO1xyXG5cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UG9wdXBEaXZzSW5kZXggPT09IDApXHJcbiAgICAgICAgICAgICAgICBwb3B1cERpdnNbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcblxyXG5cclxuICAgICAgICBjdXJyZW50UG9wdXBEaXZzSW5kZXgrKztcclxuXHJcbiAgICAgICAgcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcblxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICQocG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0pLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgfSwgNTAwKTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2FuaW1hdGlvbkhpZGUsIGFuaW1hdGlvblNob3d9IGZyb20gXCIuLi9hbmltYXRpb25zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJldldpbmRvdygpe1xyXG4gICAgaWYgKGN1cnJlbnRQb3B1cERpdnNJbmRleCA8IDEpIHtcclxuICAgICAgICBhbGVydChcImtvbmllY1wiKTtcclxuICAgICAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4LS1dLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleC0tXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICAgLy9cclxuICAgICAgICAvLyBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgIC8vXHJcblxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICQocG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0pLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjBcclxuICAgICAgICB9LCA1MDApO1xyXG5cclxuXHJcbiAgICAgICAgYW5pbWF0aW9uU2hvdyhlbGVtZW50c1tjdXJyZW50UG9wdXBEaXZzSW5kZXggLSAxXSk7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRCdXR0b25cIisoY3VycmVudFBvcHVwRGl2c0luZGV4KSkpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZCdXR0b25cIisoY3VycmVudFBvcHVwRGl2c0luZGV4KzEpKSkuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGFuaW1hdGlvbkhpZGUoZWxlbWVudHNbY3VycmVudFBvcHVwRGl2c0luZGV4XSk7XHJcblxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleCArIDFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9LCA1MDApO1xyXG5cclxuXHJcbiAgICAgICAgY3VycmVudFBvcHVwRGl2c0luZGV4LS07XHJcblxyXG4gICAgICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG5cclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAkKHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc2V0U3R5bGUoZGl2OiBIVE1MRWxlbWVudCwgY3VycmVudE5vZGU6IEhUTUxFbGVtZW50LCBleGl0QnV0dG9uOiBIVE1MRWxlbWVudCkge1xyXG4gICAgY29uc3QgcG9zaXRpb24gPSBjdXJyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWd1aWRlLXBvc2l0aW9uXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocG9zaXRpb24pO1xyXG4gICAgLy8gZGl2LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XHJcbiAgICAvLyBwcm9ibGVtIHYgemlza2FuaSBwb3ppY2llIGtlZHplIHNvbSBuYXN0YXZpbCBuYWpwcnYgZGlzcGxheSBub25lIGEgcG90b20gemlzdG92YWwgcG96aWNpdVxyXG4gICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgZGl2LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMjBweFwiO1xyXG4gICAgZGl2LnN0eWxlLm1heFdpZHRoID0gXCIyMCVcIjtcclxuICAgIGRpdi5zdHlsZS5taW5XaWR0aCA9IFwiMzAwcHhcIjtcclxuICAgIGRpdi5zdHlsZS53aWR0aCA9IFwiYXV0b1wiO1xyXG4gICAgZGl2LnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xyXG4gICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgIGRpdi5zdHlsZS56SW5kZXggPSBcIjIwMFwiO1xyXG4gICAgZGl2LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuXHJcblxyXG4gICAgZXhpdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZmZmZmZmXCJcclxuICAgIGV4aXRCdXR0b24uc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICBleGl0QnV0dG9uLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgIGV4aXRCdXR0b24uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcblxyXG4gICAgaWYgKHBvc2l0aW9uID09PSBcIlVcIikge1xyXG4gICAgICAgIGRpdi5zdHlsZS50b3AgPSBjdXJyZW50Tm9kZS5vZmZzZXRUb3AgLSBkaXYub2Zmc2V0SGVpZ2h0IC0gNCArICdweCc7XHJcbiAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSBjdXJyZW50Tm9kZS5vZmZzZXRMZWZ0ICsgJ3B4JztcclxuICAgICAgICBleGl0QnV0dG9uLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIlXCI7XHJcbiAgICAgICAgZXhpdEJ1dHRvbi5zdHlsZS5sZWZ0ID0gZGl2Lm9mZnNldFdpZHRoIC0gZXhpdEJ1dHRvbi5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSBcIlJcIikge1xyXG4gICAgICAgIGRpdi5zdHlsZS50b3AgPSBjdXJyZW50Tm9kZS5vZmZzZXRUb3AgLSBjdXJyZW50Tm9kZS5vZmZzZXRIZWlnaHQgLyAyICsgJ3B4JztcclxuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IGN1cnJlbnROb2RlLm9mZnNldExlZnQgKyBjdXJyZW50Tm9kZS5vZmZzZXRXaWR0aCArIDEgKyAncHgnO1xyXG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUucGFkZGluZ1RvcCA9IFwiMiVcIjtcclxuICAgICAgICBleGl0QnV0dG9uLnN0eWxlLmxlZnQgPSBkaXYub2Zmc2V0V2lkdGggLSBleGl0QnV0dG9uLm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09IFwiTFwiKSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IGN1cnJlbnROb2RlLm9mZnNldFRvcCAtIGN1cnJlbnROb2RlLm9mZnNldEhlaWdodCAvIDIgKyAncHgnO1xyXG4gICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gY3VycmVudE5vZGUub2Zmc2V0TGVmdCAtIGRpdi5vZmZzZXRXaWR0aCAtIDEgKyAncHgnO1xyXG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUucGFkZGluZ1RvcCA9IFwiMiVcIjtcclxuICAgICAgICBleGl0QnV0dG9uLnN0eWxlLmxlZnQgPSAoZGl2IGFzIEhUTUxEaXZFbGVtZW50KS5zdHlsZS53aWR0aCArICdweCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpdi5zdHlsZS50b3AgPSBjdXJyZW50Tm9kZS5vZmZzZXRUb3AgKyBjdXJyZW50Tm9kZS5vZmZzZXRIZWlnaHQgKyAxICsgJ3B4JztcclxuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IGN1cnJlbnROb2RlLm9mZnNldExlZnQgKyAncHgnO1xyXG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUucGFkZGluZ1RvcCA9IFwiMiVcIjtcclxuICAgICAgICBleGl0QnV0dG9uLnN0eWxlLmxlZnQgPSBkaXYub2Zmc2V0V2lkdGggLSBleGl0QnV0dG9uLm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufSIsImltcG9ydCB7Z3VpZGVJbml0fSBmcm9tIFwiLi9pbml0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ3VpZGUoaW5wdXQ6IHN0cmluZ1tdKSB7XHJcbiAgICB3aW5kb3cuZWxlbWVudHMgPSBbXTtcclxuICAgIHdpbmRvdy5wb3B1cERpdnM9W107XHJcbiAgICB3aW5kb3cubnVtYmVyT2ZFbGVtZW50cyA9IDA7XHJcbiAgICB3aW5kb3cuY3VycmVudFBvcHVwRGl2c0luZGV4ID0gMDtcclxuICAgIHdpbmRvdy5pZENvdW50ZXIgPSAxO1xyXG4gICAgd2luZG93LmJvZHlFbGVtZW50ID0gbnVsbDtcclxuICAgIHdpbmRvdy5hbGxIdG1sRWxlbWVudHMgPSBbXTtcclxuICAgIGd1aWRlSW5pdChpbnB1dCk7XHJcbn1cclxuXHJcbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3VpZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9Pmd1aWRlKFtcInBydmFcIiwgXCJkcnVoYVwiLCBcInRyZXRpYVwiLCBcInN0dnJ0YVwiXSkpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtndWlkZX0gZnJvbSBcIi4vc3RhcnRHdWlkZVwiO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9zdGFydEd1aWRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbml0JztcclxuZXhwb3J0ICogZnJvbSAnLi9wb3B1cERpdic7XHJcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9ucyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbndpbmRvdy5ndWlkZT1ndWlkZTtcclxuXHJcbi8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJndWlkZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+Z3VpZGUoW1wicHJ2YVwiLCBcImRydWhhXCIsIFwidHJldGlhXCIsIFwic3R2cnRhXCJdKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==