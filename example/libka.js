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
        duration: 750,
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
        duration: 750,
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
function arrangeOrder(array) {
    elements.splice(0, elements.length);
    var _loop_1 = function (i) {
        elements.push.apply(elements, array.filter(function (element) { return element.getAttribute("data-guide-step") === i.toString(); }));
    };
    for (var i = 1; i <= numberOfElements; i++) {
        _loop_1(i);
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
    }, 750);
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
/* harmony import */ var _prevWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prevWindow */ "./src/popupDiv/prevWindow.ts");
/* harmony import */ var _nextWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nextWindow */ "./src/popupDiv/nextWindow.ts");




function createPopupDiv(currentNode, inputMessage) {
    var newDiv = document.createElement("div");
    // as htmldivelement lebo potrebujem použivat htmldivelement atributy
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
    var nextButton = document.createElement("button");
    if (newDiv.id === "popupDiv" + numberOfElements)
        nextButton.appendChild(document.createTextNode("Finish"));
    else
        nextButton.appendChild(document.createTextNode("Next"));
    nextButton.style.marginLeft = "17px";
    nextButton.style.display = "inline-block";
    nextButton.style.borderRadius = "50px";
    nextButton.addEventListener("click", function () {
        (0,_nextWindow__WEBPACK_IMPORTED_MODULE_3__.nextWindow)();
        // if (currentPopupDivsIndex >= popupDivs.length - 1) {
        //     // alert("koniec");
        //     finishGuide();
        // } else {
        //     // popupDivs[currentPopupDivsIndex++].style.display = "none";  //
        //
        //     //@ts-ignore
        //     $(popupDivs[currentPopupDivsIndex]).animate({
        //         opacity: 0.0
        //     }, 1000);
        //
        //
        //     animationHide(elements[currentPopupDivsIndex]);
        //     animationShow(elements[currentPopupDivsIndex + 1]);
        //
        //
        //     setTimeout(() => {
        //         if (currentPopupDivsIndex === 0)
        //             popupDivs[0].style.display = "none";
        //         else
        //             popupDivs[currentPopupDivsIndex - 1].style.display = "none";
        //     }, 1000);
        //
        //
        //     currentPopupDivsIndex++;
        //
        //     popupDivs[currentPopupDivsIndex].style.display = "block";
        //     popupDivs[currentPopupDivsIndex].style.opacity = "0";
        //
        //     //@ts-ignore
        //     $(popupDivs[currentPopupDivsIndex]).animate({
        //         opacity: 1
        //     }, 1000);
        //
        //     // popupDivs[currentPopupDivsIndex].style.display = "block"; //
        // }
    });
    newDiv.appendChild(nextButton);
    // Riešil som to aby som pri next a prev buttons pri popupdiv nepreliezol cez okraj.
    // Pri dalsom kodeni som prišiel na to
    // ze pri odstraneni prev buttonu pri prvom okne sa o to nemusim starat, stači pridat kontrolu na last popupdiv
    if (newDiv.id !== "popupDiv1") { // aby prve okno nemalo previous button
        var prevButton = document.createElement("button");
        prevButton.appendChild(document.createTextNode("Prev"));
        prevButton.style.marginLeft = "5px";
        prevButton.style.borderRadius = "50px";
        prevButton.addEventListener('click', function () {
            (0,_prevWindow__WEBPACK_IMPORTED_MODULE_2__.prevWindow)();
            // if (currentPopupDivsIndex < 1) {
            //     alert("koniec");
            //     popupDivs[currentPopupDivsIndex--].style.display = "none";
            // } else {
            //     // popupDivs[currentPopupDivsIndex--].style.display = "none";   //
            //     // popupDivs[currentPopupDivsIndex].style.display = "block";   //
            //
            //     //@ts-ignore
            //     $(popupDivs[currentPopupDivsIndex]).animate({
            //         opacity: 0.0
            //     }, 1000);
            //
            //
            //     animationShow(elements[currentPopupDivsIndex - 1]);
            //     animationHide(elements[currentPopupDivsIndex]);
            //
            //
            //     setTimeout(() => {
            //         popupDivs[currentPopupDivsIndex + 1].style.display = "none";
            //     }, 1000);
            //
            //
            //     currentPopupDivsIndex--;
            //
            //     popupDivs[currentPopupDivsIndex].style.display = "block";
            //     popupDivs[currentPopupDivsIndex].style.opacity = "0";
            //
            //     //@ts-ignore
            //     $(popupDivs[currentPopupDivsIndex]).animate({
            //         opacity: 1
            //     }, 1000);
            // }
        });
        newDiv.appendChild(prevButton);
    }
    var progress = document.createElement("progress");
    progress.style.marginLeft = "5px";
    progress.value = idCounter - 2;
    progress.max = elements.length;
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
        }, 1000);
        (0,_animations__WEBPACK_IMPORTED_MODULE_0__.animationHide)(elements[currentPopupDivsIndex]);
        (0,_animations__WEBPACK_IMPORTED_MODULE_0__.animationShow)(elements[currentPopupDivsIndex + 1]);
        setTimeout(function () {
            if (currentPopupDivsIndex === 0)
                popupDivs[0].style.display = "none";
            else
                popupDivs[currentPopupDivsIndex - 1].style.display = "none";
        }, 1000);
        currentPopupDivsIndex++;
        popupDivs[currentPopupDivsIndex].style.display = "block";
        popupDivs[currentPopupDivsIndex].style.opacity = "0";
        //@ts-ignore
        $(popupDivs[currentPopupDivsIndex]).animate({
            opacity: 1
        }, 1000);
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
        }, 1000);
        (0,_animations__WEBPACK_IMPORTED_MODULE_0__.animationShow)(elements[currentPopupDivsIndex - 1]);
        (0,_animations__WEBPACK_IMPORTED_MODULE_0__.animationHide)(elements[currentPopupDivsIndex]);
        setTimeout(function () {
            popupDivs[currentPopupDivsIndex + 1].style.display = "none";
        }, 1000);
        currentPopupDivsIndex--;
        popupDivs[currentPopupDivsIndex].style.display = "block";
        popupDivs[currentPopupDivsIndex].style.opacity = "0";
        //@ts-ignore
        $(popupDivs[currentPopupDivsIndex]).animate({
            opacity: 1
        }, 1000);
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





document.getElementById("guide").addEventListener("click", function () { return (0,_startGuide__WEBPACK_IMPORTED_MODULE_0__.guide)(["prva", "druha", "tretia", "stvrta"]); });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9hbmltYXRpb25zL2FuaW1hdGlvbkhpZGUudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvYW5pbWF0aW9ucy9hbmltYXRpb25TaG93LnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthLy4vc3JjL2FuaW1hdGlvbnMvZmluaXNoR3VpZGUudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvYW5pbWF0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9pbml0L2FycmFuZ2VPcmRlci50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9pbml0L2d1aWRlSW5pdC50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9pbml0L2luZGV4LnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthLy4vc3JjL3BvcHVwRGl2L2NyZWF0ZVBvcHVwRGl2LnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthLy4vc3JjL3BvcHVwRGl2L2luZGV4LnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthLy4vc3JjL3BvcHVwRGl2L25leHRXaW5kb3cudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvcG9wdXBEaXYvcHJldldpbmRvdy50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9wb3B1cERpdi9zZXRTdHlsZS50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9zdGFydEd1aWRlLnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTyxTQUFTLGFBQWEsQ0FBQyxPQUFvQjtJQUM5QyxJQUFNLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlCLElBQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUMsRUFBRSxFQUFFLDJCQUEyQixHQUFHLHFCQUFxQixDQUFDLENBQUM7SUFDbEcsWUFBWTtJQUNaLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLEVBQUU7UUFDM0IsUUFBUSxFQUFFLEdBQUc7UUFBRSxJQUFJLFlBQUMsR0FBRztZQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLE9BQU87Z0JBQ25DLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEdBQUc7Z0JBQ2pFLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEdBQUc7Z0JBQ2pFLFFBQVEs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Q0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNqQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDL0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBRXZDLElBQUksUUFBUSxLQUFLLEdBQUcsRUFBRTtRQUNsQixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNwRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMvQyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbkMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUMzRTtTQUFNLElBQUksUUFBUSxLQUFLLEdBQUcsRUFBRTtRQUN6QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM1RSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM3RSxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbkMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUMzRTtTQUFNLElBQUksUUFBUSxLQUFLLEdBQUcsRUFBRTtRQUN6QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM1RSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRSxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbkMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUksR0FBc0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztLQUN0RTtTQUFNO1FBQ0gsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDNUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDL0MsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ25DLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7S0FDM0U7SUFHRCxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDL0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzdDZ0M7QUFFMUIsU0FBUyxLQUFLLENBQUMsS0FBZTtJQUNqQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixNQUFNLENBQUMsU0FBUyxHQUFDLEVBQUUsQ0FBQztJQUNwQixNQUFNLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7SUFDakMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDckIsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsTUFBTSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsZ0RBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixDQUFDO0FBRUQsK0dBQStHOzs7Ozs7O1VDYi9HO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFFTjtBQUNOO0FBQ0k7QUFDRTtBQUU3QixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxjQUFJLHlEQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUE1QyxDQUE0QyxDQUFDLENBQUMiLCJmaWxlIjoibGlia2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYW5pbWF0aW9uSGlkZShlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBbNDAsIDQwLCA0MCwgMF07XHJcbiAgICBjb25zdCBlbmQgPSBbMjU1LCAyNTUsIDI1NSwgMV07XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJoaWRpbmcgZWxlbWVudCA6XCIgKyBlbGVtZW50LmlkLCBcImN1cnJlbnQgcG9wdXBEaXYgaW5kZXggOiBcIiArIGN1cnJlbnRQb3B1cERpdnNJbmRleCk7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgICQoZWxlbWVudCkuYW5pbWF0ZSh7J2FhYSc6IDB9LCB7ICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBkdXJhdGlvbjogNzUwLCBzdGVwKG5vdykgeyAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAncmdiYSgnICtcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KChzdGFydFswXSArIChlbmRbMF0gLSBzdGFydFswXSkgKiBub3cpLnRvU3RyaW5nKCkpICsgJywnICtcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KChzdGFydFsxXSArIChlbmRbMV0gLSBzdGFydFsxXSkgKiBub3cpLnRvU3RyaW5nKCkpICsgJywnICtcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KChzdGFydFsyXSArIChlbmRbMl0gLSBzdGFydFsyXSkgKiBub3cpLnRvU3RyaW5nKCkpICsgJyknXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBhbmltYXRpb25TaG93KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNob3dpbmcgZWxlbWVudCA6XCIgKyBlbGVtZW50LmlkLCBcImN1cnJlbnQgcG9wdXBEaXYgaW5kZXggOiBcIiArIGN1cnJlbnRQb3B1cERpdnNJbmRleCk7XHJcblxyXG4gICAgY29uc3Qgc3RhcnQgPSBbNDAsIDQwLCA0MCwgMF07XHJcbiAgICBjb25zdCBlbmQgPSBbMjU1LCAyNTUsIDI1NSwgMV07XHJcbi8vQHRzLWlnbm9yZVxyXG4gICAgJChlbGVtZW50KS5hbmltYXRlKHsnYWFhJzogMX0sIHsvL0B0cy1pZ25vcmVcclxuICAgICAgICBkdXJhdGlvbjogNzUwLCBzdGVwKG5vdykgey8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKCcgK1xyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoKHN0YXJ0WzBdICsgKGVuZFswXSAtIHN0YXJ0WzBdKSAqIG5vdykudG9TdHJpbmcoKSkgKyAnLCcgK1xyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoKHN0YXJ0WzFdICsgKGVuZFsxXSAtIHN0YXJ0WzFdKSAqIG5vdykudG9TdHJpbmcoKSkgKyAnLCcgK1xyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoKHN0YXJ0WzJdICsgKGVuZFsyXSAtIHN0YXJ0WzJdKSAqIG5vdykudG9TdHJpbmcoKSkgKyAnKSdcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZpbmlzaEd1aWRlKCkge1xyXG4gICAgcG9wdXBEaXZzLmZvckVhY2goZGl2PT57ZGl2LnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9KTtcclxuICAgIC8vIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXgrK10uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgYm9keUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiO1xyXG4gICAgYWxsSHRtbEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJhY2tncm91bmRcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xvclwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYmFja2dyb3VuZFwiKTtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtY29sb3JcIik7XHJcbiAgICB9KTtcclxufSIsImV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uSGlkZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uU2hvdyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZmluaXNoR3VpZGUnOyIsImV4cG9ydCBmdW5jdGlvbiBhcnJhbmdlT3JkZXIoYXJyYXk6IEhUTUxFbGVtZW50W10pIHtcclxuICAgIGVsZW1lbnRzLnNwbGljZSgwLCBlbGVtZW50cy5sZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZFbGVtZW50czsgaSsrKSB7XHJcbiAgICAgICAgZWxlbWVudHMucHVzaCguLi5hcnJheS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtZ3VpZGUtc3RlcFwiKSA9PT0gaS50b1N0cmluZygpKSlcclxuICAgICAgICAvLyBwcm9ibGVtIHMgcG9yb3ZuYW5pbSBib2xvIHRyZWJhIHRvc3RyaW5nXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2FycmFuZ2VPcmRlcn0gZnJvbSBcIi4vYXJyYW5nZU9yZGVyXCI7XHJcbmltcG9ydCB7Y3JlYXRlUG9wdXBEaXZ9IGZyb20gXCIuLi9wb3B1cERpdlwiO1xyXG5pbXBvcnQge2FuaW1hdGlvblNob3d9IGZyb20gXCIuLi9hbmltYXRpb25zXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGd1aWRlSW5pdChpbnB1dDogc3RyaW5nW10pIHtcclxuICAgIGxldCBjdXJyZW50Tm9kZSwgbmkgPSBkb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCk7XHJcblxyXG4gICAgLy8gY2xlYXIgYXJyYXlzIGFuZCB2YXJpYWJsZXMgaW4gY2FzZSBvZiBhbm90aGVyIHN0YXJ0IG9mIEd1aWRlIGZ1bmN0aW9uXHJcbiAgICAvLyB3aGlsZSAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICAgIGVsZW1lbnRzLnBvcCgpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gd2hpbGUgKHBvcHVwRGl2cy5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgICAgcG9wdXBEaXZzLnBvcCgpO1xyXG4gICAgLy8gfVxyXG4gICAgbnVtYmVyT2ZFbGVtZW50cyA9IDA7XHJcbiAgICBjdXJyZW50UG9wdXBEaXZzSW5kZXggPSAwO1xyXG4gICAgaWRDb3VudGVyID0gMTtcclxuXHJcbiAgICBsZXQgc2VhcmNoOiBudW1iZXI7XHJcbiAgICBjb25zdCB0bXBBcnJheSA9IFtdO1xyXG4gICAgd2hpbGUgKGN1cnJlbnROb2RlID0gbmkubmV4dE5vZGUoKSBhcyBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWd1aWRlXCIpID09PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0bXBBcnJheS5wdXNoKGN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgbnVtYmVyT2ZFbGVtZW50cysrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlYXJjaCA9PT0gMSkge1xyXG4gICAgICAgICAgICBhbGxIdG1sRWxlbWVudHMucHVzaChjdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZShcImRhdGEtYmFja0dyb3VuZFwiLCBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrR3JvdW5kJykpO1xyXG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbG9yXCIsIGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpLmdldFByb3BlcnR5VmFsdWUoJ2NvbG9yJykpO1xyXG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCI7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnN0eWxlLmNvbG9yID0gXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3VycmVudE5vZGUudGFnTmFtZSA9PT0gXCJCT0RZXCIpIHtcclxuICAgICAgICAgICAgYm9keUVsZW1lbnQgPSBjdXJyZW50Tm9kZTtcclxuICAgICAgICAgICAgY3VycmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLCAwLCAwLCAwLjg1KVwiO1xyXG4gICAgICAgICAgICBzZWFyY2ggPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXJyYW5nZU9yZGVyKHRtcEFycmF5KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZFbGVtZW50czsgaSsrKVxyXG4gICAgICAgIGNyZWF0ZVBvcHVwRGl2KGVsZW1lbnRzW2ldLCBpbnB1dCk7XHJcblxyXG4gICAgcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgJChwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfSwgNzUwKTtcclxuICAgIGFuaW1hdGlvblNob3coZWxlbWVudHNbY3VycmVudFBvcHVwRGl2c0luZGV4XSk7XHJcblxyXG59IiwiZXhwb3J0IHtndWlkZUluaXR9IGZyb20gJy4vZ3VpZGVJbml0JzsiLCJpbXBvcnQge2ZpbmlzaEd1aWRlfSBmcm9tIFwiLi4vYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQge3NldFN0eWxlfSBmcm9tIFwiLi9zZXRTdHlsZVwiO1xyXG5pbXBvcnQge3ByZXZXaW5kb3d9IGZyb20gXCIuL3ByZXZXaW5kb3dcIjtcclxuaW1wb3J0IHtuZXh0V2luZG93fSBmcm9tIFwiLi9uZXh0V2luZG93XCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvcHVwRGl2KGN1cnJlbnROb2RlOiBIVE1MRWxlbWVudCwgaW5wdXRNZXNzYWdlOiBzdHJpbmdbXSkge1xyXG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIC8vIGFzIGh0bWxkaXZlbGVtZW50IGxlYm8gcG90cmVidWplbSBwb3XFvml2YXQgaHRtbGRpdmVsZW1lbnQgYXRyaWJ1dHlcclxuICAgIG5ld0Rpdi5pZCA9IFwicG9wdXBEaXZcIiArIGlkQ291bnRlcjtcclxuICAgIHBvcHVwRGl2cy5wdXNoKG5ld0Rpdik7XHJcbiAgICBpZENvdW50ZXIrKztcclxuXHJcbiAgICBjb25zdCBleGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGV4aXRCdXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJYXCIpKTtcclxuICAgIGV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBmaW5pc2hHdWlkZSgpO1xyXG4gICAgfSk7XHJcbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoZXhpdEJ1dHRvbik7XHJcblxyXG4gICAgY29uc3QgbmV3UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgaWYgKGlucHV0TWVzc2FnZVtpZENvdW50ZXIgLSAyXSAhPT0gbnVsbCAmJiBpbnB1dE1lc3NhZ2VbaWRDb3VudGVyIC0gMl0gIT09IHVuZGVmaW5lZClcclxuICAgICAgICBuZXdQLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGlucHV0TWVzc2FnZVtpZENvdW50ZXIgLSAyXSkpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIG5ld1AuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJOTyBNRVNTQUdFIFdSSVRURU5cIikpO1xyXG4gICAgLy8gbmV3UC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdXJyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWd1aWRlLW1lc3NhZ2VcIikpKTtcclxuICAgIG5ld1Auc3R5bGUubWFyZ2luTGVmdCA9IFwiMTJweFwiO1xyXG4gICAgbmV3UC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMTJweFwiO1xyXG4gICAgbmV3UC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjBcIjtcclxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdQKTtcclxuXHJcbiAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgICBpZiAobmV3RGl2LmlkID09PSBcInBvcHVwRGl2XCIgKyBudW1iZXJPZkVsZW1lbnRzKVxyXG4gICAgICAgIG5leHRCdXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJGaW5pc2hcIikpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIG5leHRCdXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJOZXh0XCIpKTtcclxuXHJcbiAgICBuZXh0QnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjE3cHhcIjtcclxuICAgIG5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICBuZXh0QnV0dG9uLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTBweFwiO1xyXG5cclxuICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtuZXh0V2luZG93KCk7XHJcbiAgICAgICAgLy8gaWYgKGN1cnJlbnRQb3B1cERpdnNJbmRleCA+PSBwb3B1cERpdnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIC8vICAgICAvLyBhbGVydChcImtvbmllY1wiKTtcclxuICAgICAgICAvLyAgICAgZmluaXNoR3VpZGUoKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAvLyBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4KytdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIC8vXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgLy8gICAgICQocG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0pLmFuaW1hdGUoe1xyXG4gICAgICAgIC8vICAgICAgICAgb3BhY2l0eTogMC4wXHJcbiAgICAgICAgLy8gICAgIH0sIDEwMDApO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgYW5pbWF0aW9uSGlkZShlbGVtZW50c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdKTtcclxuICAgICAgICAvLyAgICAgYW5pbWF0aW9uU2hvdyhlbGVtZW50c1tjdXJyZW50UG9wdXBEaXZzSW5kZXggKyAxXSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChjdXJyZW50UG9wdXBEaXZzSW5kZXggPT09IDApXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcG9wdXBEaXZzWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAvLyAgICAgICAgIGVsc2VcclxuICAgICAgICAvLyAgICAgICAgICAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIC8vICAgICB9LCAxMDAwKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGN1cnJlbnRQb3B1cERpdnNJbmRleCsrO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgLy8gICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAvLyAgICAgJChwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgLy8gICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgLy8gICAgIH0sIDEwMDApO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIC8vIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IC8vXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKG5leHRCdXR0b24pO1xyXG5cclxuICAgIC8vIFJpZcWhaWwgc29tIHRvIGFieSBzb20gcHJpIG5leHQgYSBwcmV2IGJ1dHRvbnMgcHJpIHBvcHVwZGl2IG5lcHJlbGllem9sIGNleiBva3Jhai5cclxuICAgIC8vIFByaSBkYWxzb20ga29kZW5pIHNvbSBwcmnFoWllbCBuYSB0b1xyXG4gICAgLy8gemUgcHJpIG9kc3RyYW5lbmkgcHJldiBidXR0b251IHByaSBwcnZvbSBva25lIHNhIG8gdG8gbmVtdXNpbSBzdGFyYXQsIHN0YcSNaSBwcmlkYXQga29udHJvbHUgbmEgbGFzdCBwb3B1cGRpdlxyXG5cclxuXHJcbiAgICBpZiAobmV3RGl2LmlkICE9PSBcInBvcHVwRGl2MVwiKSB7ICAgICAgICAgICAvLyBhYnkgcHJ2ZSBva25vIG5lbWFsbyBwcmV2aW91cyBidXR0b25cclxuICAgICAgICBjb25zdCBwcmV2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBwcmV2QnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUHJldlwiKSk7XHJcbiAgICAgICAgcHJldkJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI1cHhcIjtcclxuICAgICAgICBwcmV2QnV0dG9uLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTBweFwiO1xyXG4gICAgICAgIHByZXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBwcmV2V2luZG93KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoY3VycmVudFBvcHVwRGl2c0luZGV4IDwgMSkge1xyXG4gICAgICAgICAgICAvLyAgICAgYWxlcnQoXCJrb25pZWNcIik7XHJcbiAgICAgICAgICAgIC8vICAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4LS1dLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXgtLV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgIC8vXHJcbiAgICAgICAgICAgIC8vICAgICAvLyBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgIC8vXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgLy8gICAgICQocG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0pLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIG9wYWNpdHk6IDAuMFxyXG4gICAgICAgICAgICAvLyAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICAgICBhbmltYXRpb25TaG93KGVsZW1lbnRzW2N1cnJlbnRQb3B1cERpdnNJbmRleCAtIDFdKTtcclxuICAgICAgICAgICAgLy8gICAgIGFuaW1hdGlvbkhpZGUoZWxlbWVudHNbY3VycmVudFBvcHVwRGl2c0luZGV4XSk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4ICsgMV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAvLyAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICAgICBjdXJyZW50UG9wdXBEaXZzSW5kZXgtLTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIC8vICAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgLy8gICAgICQocG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0pLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgLy8gICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKHByZXZCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByb2dyZXNzXCIpIGFzIEhUTUxQcm9ncmVzc0VsZW1lbnQ7XHJcbiAgICBwcm9ncmVzcy5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI1cHhcIjtcclxuICAgIHByb2dyZXNzLnZhbHVlID0gaWRDb3VudGVyIC0gMjtcclxuICAgIHByb2dyZXNzLm1heCA9IGVsZW1lbnRzLmxlbmd0aDtcclxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChwcm9ncmVzcyk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXdEaXYpO1xyXG5cclxuICAgIHNldFN0eWxlKG5ld0RpdiwgY3VycmVudE5vZGUsIGV4aXRCdXR0b24pO1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vY3JlYXRlUG9wdXBEaXYnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NldFN0eWxlJztcclxuZXhwb3J0ICogZnJvbSAnLi9uZXh0V2luZG93JztcclxuZXhwb3J0ICogZnJvbSAnLi9wcmV2V2luZG93JzsiLCJpbXBvcnQge2FuaW1hdGlvbkhpZGUsIGFuaW1hdGlvblNob3csIGZpbmlzaEd1aWRlfSBmcm9tIFwiLi4vYW5pbWF0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5leHRXaW5kb3coKXtcclxuICAgIGlmIChjdXJyZW50UG9wdXBEaXZzSW5kZXggPj0gcG9wdXBEaXZzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAvLyBhbGVydChcImtvbmllY1wiKTtcclxuICAgICAgICBmaW5pc2hHdWlkZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4KytdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIC8vXHJcblxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICQocG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0pLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjBcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcblxyXG4gICAgICAgIGFuaW1hdGlvbkhpZGUoZWxlbWVudHNbY3VycmVudFBvcHVwRGl2c0luZGV4XSk7XHJcbiAgICAgICAgYW5pbWF0aW9uU2hvdyhlbGVtZW50c1tjdXJyZW50UG9wdXBEaXZzSW5kZXggKyAxXSk7XHJcblxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQb3B1cERpdnNJbmRleCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHBvcHVwRGl2c1swXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG5cclxuICAgICAgICBjdXJyZW50UG9wdXBEaXZzSW5kZXgrKztcclxuXHJcbiAgICAgICAgcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcblxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICQocG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0pLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIC8vIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IC8vXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2FuaW1hdGlvbkhpZGUsIGFuaW1hdGlvblNob3d9IGZyb20gXCIuLi9hbmltYXRpb25zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJldldpbmRvdygpe1xyXG4gICAgaWYgKGN1cnJlbnRQb3B1cERpdnNJbmRleCA8IDEpIHtcclxuICAgICAgICBhbGVydChcImtvbmllY1wiKTtcclxuICAgICAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4LS1dLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleC0tXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICAgLy9cclxuICAgICAgICAvLyBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgIC8vXHJcblxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICQocG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0pLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjBcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcblxyXG4gICAgICAgIGFuaW1hdGlvblNob3coZWxlbWVudHNbY3VycmVudFBvcHVwRGl2c0luZGV4IC0gMV0pO1xyXG4gICAgICAgIGFuaW1hdGlvbkhpZGUoZWxlbWVudHNbY3VycmVudFBvcHVwRGl2c0luZGV4XSk7XHJcblxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleCArIDFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcblxyXG4gICAgICAgIGN1cnJlbnRQb3B1cERpdnNJbmRleC0tO1xyXG5cclxuICAgICAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuXHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgJChwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZShkaXY6IEhUTUxFbGVtZW50LCBjdXJyZW50Tm9kZTogSFRNTEVsZW1lbnQsIGV4aXRCdXR0b246IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IGN1cnJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZ3VpZGUtcG9zaXRpb25cIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwb3NpdGlvbik7XHJcbiAgICAvLyBkaXYuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcclxuICAgIC8vIHByb2JsZW0gdiB6aXNrYW5pIHBvemljaWUga2VkemUgc29tIG5hc3RhdmlsIG5hanBydiBkaXNwbGF5IG5vbmUgYSBwb3RvbSB6aXN0b3ZhbCBwb3ppY2l1XHJcbiAgICBkaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBkaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIyMHB4XCI7XHJcbiAgICBkaXYuc3R5bGUubWF4V2lkdGggPSBcIjIwJVwiO1xyXG4gICAgZGl2LnN0eWxlLm1pbldpZHRoID0gXCIzMDBweFwiO1xyXG4gICAgZGl2LnN0eWxlLndpZHRoID0gXCJhdXRvXCI7XHJcbiAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XHJcbiAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgZGl2LnN0eWxlLnpJbmRleCA9IFwiMjAwXCI7XHJcbiAgICBkaXYuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG5cclxuXHJcbiAgICBleGl0QnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSBcIiNmZmZmZmZcIlxyXG4gICAgZXhpdEJ1dHRvbi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgIGV4aXRCdXR0b24uc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgZXhpdEJ1dHRvbi5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuXHJcbiAgICBpZiAocG9zaXRpb24gPT09IFwiVVwiKSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IGN1cnJlbnROb2RlLm9mZnNldFRvcCAtIGRpdi5vZmZzZXRIZWlnaHQgLSA0ICsgJ3B4JztcclxuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IGN1cnJlbnROb2RlLm9mZnNldExlZnQgKyAncHgnO1xyXG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUucGFkZGluZ1RvcCA9IFwiMiVcIjtcclxuICAgICAgICBleGl0QnV0dG9uLnN0eWxlLmxlZnQgPSBkaXYub2Zmc2V0V2lkdGggLSBleGl0QnV0dG9uLm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09IFwiUlwiKSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IGN1cnJlbnROb2RlLm9mZnNldFRvcCAtIGN1cnJlbnROb2RlLm9mZnNldEhlaWdodCAvIDIgKyAncHgnO1xyXG4gICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gY3VycmVudE5vZGUub2Zmc2V0TGVmdCArIGN1cnJlbnROb2RlLm9mZnNldFdpZHRoICsgMSArICdweCc7XHJcbiAgICAgICAgZXhpdEJ1dHRvbi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyJVwiO1xyXG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUubGVmdCA9IGRpdi5vZmZzZXRXaWR0aCAtIGV4aXRCdXR0b24ub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gXCJMXCIpIHtcclxuICAgICAgICBkaXYuc3R5bGUudG9wID0gY3VycmVudE5vZGUub2Zmc2V0VG9wIC0gY3VycmVudE5vZGUub2Zmc2V0SGVpZ2h0IC8gMiArICdweCc7XHJcbiAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSBjdXJyZW50Tm9kZS5vZmZzZXRMZWZ0IC0gZGl2Lm9mZnNldFdpZHRoIC0gMSArICdweCc7XHJcbiAgICAgICAgZXhpdEJ1dHRvbi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyJVwiO1xyXG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUubGVmdCA9IChkaXYgYXMgSFRNTERpdkVsZW1lbnQpLnN0eWxlLndpZHRoICsgJ3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IGN1cnJlbnROb2RlLm9mZnNldFRvcCArIGN1cnJlbnROb2RlLm9mZnNldEhlaWdodCArIDEgKyAncHgnO1xyXG4gICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gY3VycmVudE5vZGUub2Zmc2V0TGVmdCArICdweCc7XHJcbiAgICAgICAgZXhpdEJ1dHRvbi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyJVwiO1xyXG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUubGVmdCA9IGRpdi5vZmZzZXRXaWR0aCAtIGV4aXRCdXR0b24ub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59IiwiaW1wb3J0IHtndWlkZUluaXR9IGZyb20gXCIuL2luaXRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBndWlkZShpbnB1dDogc3RyaW5nW10pIHtcclxuICAgIHdpbmRvdy5lbGVtZW50cyA9IFtdO1xyXG4gICAgd2luZG93LnBvcHVwRGl2cz1bXTtcclxuICAgIHdpbmRvdy5udW1iZXJPZkVsZW1lbnRzID0gMDtcclxuICAgIHdpbmRvdy5jdXJyZW50UG9wdXBEaXZzSW5kZXggPSAwO1xyXG4gICAgd2luZG93LmlkQ291bnRlciA9IDA7XHJcbiAgICB3aW5kb3cuYm9keUVsZW1lbnQgPSBudWxsO1xyXG4gICAgd2luZG93LmFsbEh0bWxFbGVtZW50cyA9IFtdO1xyXG4gICAgZ3VpZGVJbml0KGlucHV0KTtcclxufVxyXG5cclxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJndWlkZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+Z3VpZGUoW1wicHJ2YVwiLCBcImRydWhhXCIsIFwidHJldGlhXCIsIFwic3R2cnRhXCJdKSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2d1aWRlfSBmcm9tIFwiLi9zdGFydEd1aWRlXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL3N0YXJ0R3VpZGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2luaXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3BvcHVwRGl2JztcclxuZXhwb3J0ICogZnJvbSAnLi9hbmltYXRpb25zJztcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3VpZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9Pmd1aWRlKFtcInBydmFcIiwgXCJkcnVoYVwiLCBcInRyZXRpYVwiLCBcInN0dnJ0YVwiXSkpOyJdLCJzb3VyY2VSb290IjoiIn0=