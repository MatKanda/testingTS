/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/anmations/animationHide.ts":
/*!****************************************!*\
  !*** ./src/anmations/animationHide.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationHide": () => (/* binding */ animationHide)
/* harmony export */ });
function animationHide(element) {
    var start = [40, 40, 40, 0];
    var end = [255, 255, 255, 1];
    console.log("hiding element :" + element.id, "current popupDiv index : " + currentPopupDivsIndex);
    $(element).animate({ 'aaa': 0 }, {
        duration: 1000,
        step: function (now) {
            $(this).css('background-color', 'rgba(' +
                parseInt((start[0] + (end[0] - start[0]) * now).toString()) + ',' +
                parseInt((start[1] + (end[1] - start[1]) * now).toString()) + ',' +
                parseInt((start[2] + (end[2] - start[2]) * now).toString()) + ')');
        }
    });
}


/***/ }),

/***/ "./src/anmations/animationShow.ts":
/*!****************************************!*\
  !*** ./src/anmations/animationShow.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationShow": () => (/* binding */ animationShow)
/* harmony export */ });
function animationShow(element) {
    console.log("showing element :" + element.id, "current popupDiv index : " + currentPopupDivsIndex);
    var start = [40, 40, 40, 0];
    var end = [255, 255, 255, 1];
    $(element).animate({ 'aaa': 1 }, {
        duration: 1000,
        step: function (now) {
            $(this).css('background-color', 'rgba(' +
                parseInt((start[0] + (end[0] - start[0]) * now).toString()) + ',' +
                parseInt((start[1] + (end[1] - start[1]) * now).toString()) + ',' +
                parseInt((start[2] + (end[2] - start[2]) * now).toString()) + ')');
        }
    });
}


/***/ }),

/***/ "./src/anmations/finishGuide.ts":
/*!**************************************!*\
  !*** ./src/anmations/finishGuide.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "finishGuide": () => (/* binding */ finishGuide)
/* harmony export */ });
function finishGuide() {
    popupDivs[currentPopupDivsIndex++].style.display = "none";
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

/***/ "./src/anmations/index.ts":
/*!********************************!*\
  !*** ./src/anmations/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationHide": () => (/* reexport safe */ _animationHide__WEBPACK_IMPORTED_MODULE_0__.animationHide),
/* harmony export */   "animationShow": () => (/* reexport safe */ _animationShow__WEBPACK_IMPORTED_MODULE_1__.animationShow),
/* harmony export */   "finishGuide": () => (/* reexport safe */ _finishGuide__WEBPACK_IMPORTED_MODULE_2__.finishGuide)
/* harmony export */ });
/* harmony import */ var _animationHide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animationHide */ "./src/anmations/animationHide.ts");
/* harmony import */ var _animationShow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationShow */ "./src/anmations/animationShow.ts");
/* harmony import */ var _finishGuide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finishGuide */ "./src/anmations/finishGuide.ts");





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
/* harmony import */ var _anmations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../anmations */ "./src/anmations/index.ts");



function guideInit(input) {
    var currentNode;
    var ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);
    // clear arrays and variables in case of another start of Guide function
    while (elements.length > 0) {
        elements.pop();
    }
    while (popupDivs.length > 0) {
        popupDivs.pop();
    }
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
    //
    $(popupDivs[currentPopupDivsIndex]).animate({
        opacity: 1
    }, 1000);
    (0,_anmations__WEBPACK_IMPORTED_MODULE_2__.animationShow)(elements[currentPopupDivsIndex]);
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

/***/ "./src/popupDiv/createPoupDiv.ts":
/*!***************************************!*\
  !*** ./src/popupDiv/createPoupDiv.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopupDiv": () => (/* binding */ createPopupDiv)
/* harmony export */ });
/* harmony import */ var _anmations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../anmations */ "./src/anmations/index.ts");
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setStyle */ "./src/popupDiv/setStyle.ts");


function createPopupDiv(currentNode, inputMessage) {
    var newDiv = document.createElement("div");
    // as htmldivelement lebo potrebujem použivat htmldivelement atributy
    newDiv.id = "popupDiv" + idCounter;
    popupDivs.push(newDiv);
    idCounter++;
    var exitButton = document.createElement("button");
    exitButton.appendChild(document.createTextNode("X"));
    exitButton.addEventListener("click", function () {
        (0,_anmations__WEBPACK_IMPORTED_MODULE_0__.finishGuide)();
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
    nextButton.addEventListener("click", function (nextWindow) {
        if (currentPopupDivsIndex >= popupDivs.length - 1) {
            // alert("koniec");
            (0,_anmations__WEBPACK_IMPORTED_MODULE_0__.finishGuide)();
        }
        else {
            // popupDivs[currentPopupDivsIndex++].style.display = "none";  //
            $(popupDivs[currentPopupDivsIndex]).animate({
                opacity: 0.0
            }, 1000);
            (0,_anmations__WEBPACK_IMPORTED_MODULE_0__.animationHide)(elements[currentPopupDivsIndex]);
            (0,_anmations__WEBPACK_IMPORTED_MODULE_0__.animationShow)(elements[currentPopupDivsIndex + 1]);
            setTimeout(function () {
                if (currentPopupDivsIndex === 0)
                    popupDivs[0].style.display = "none";
                else
                    popupDivs[currentPopupDivsIndex - 1].style.display = "none";
            }, 1000);
            currentPopupDivsIndex++;
            popupDivs[currentPopupDivsIndex].style.display = "block";
            popupDivs[currentPopupDivsIndex].style.opacity = "0";
            $(popupDivs[currentPopupDivsIndex]).animate({
                opacity: 1
            }, 1000);
            // popupDivs[currentPopupDivsIndex].style.display = "block"; //
        }
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
        prevButton.addEventListener('click', function (prevWindow) {
            if (currentPopupDivsIndex < 1) {
                alert("koniec");
                popupDivs[currentPopupDivsIndex--].style.display = "none";
            }
            else {
                // popupDivs[currentPopupDivsIndex--].style.display = "none";   //
                // popupDivs[currentPopupDivsIndex].style.display = "block";   //
                $(popupDivs[currentPopupDivsIndex]).animate({
                    opacity: 0.0
                }, 1000);
                (0,_anmations__WEBPACK_IMPORTED_MODULE_0__.animationShow)(elements[currentPopupDivsIndex - 1]);
                (0,_anmations__WEBPACK_IMPORTED_MODULE_0__.animationHide)(elements[currentPopupDivsIndex]);
                setTimeout(function () {
                    popupDivs[currentPopupDivsIndex + 1].style.display = "none";
                }, 1000);
                currentPopupDivsIndex--;
                popupDivs[currentPopupDivsIndex].style.display = "block";
                popupDivs[currentPopupDivsIndex].style.opacity = "0";
                $(popupDivs[currentPopupDivsIndex]).animate({
                    opacity: 1
                }, 1000);
            }
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
/* harmony export */   "createPopupDiv": () => (/* reexport safe */ _createPoupDiv__WEBPACK_IMPORTED_MODULE_0__.createPopupDiv),
/* harmony export */   "setStyle": () => (/* reexport safe */ _setStyle__WEBPACK_IMPORTED_MODULE_1__.setStyle)
/* harmony export */ });
/* harmony import */ var _createPoupDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPoupDiv */ "./src/popupDiv/createPoupDiv.ts");
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setStyle */ "./src/popupDiv/setStyle.ts");




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
    window.numberOfElements = 0;
    window.currentPopupDivsIndex = 0;
    window.idCounter = 0;
    window.bodyElement = null;
    window.allHtmlElements = [];
    (0,_init__WEBPACK_IMPORTED_MODULE_0__.guideInit)(input);
}
guide(["prva", "druha", "tretia", "stvrta"]);


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
/* harmony export */   "setStyle": () => (/* reexport safe */ _popupDiv__WEBPACK_IMPORTED_MODULE_2__.setStyle),
/* harmony export */   "animationHide": () => (/* reexport safe */ _anmations__WEBPACK_IMPORTED_MODULE_3__.animationHide),
/* harmony export */   "animationShow": () => (/* reexport safe */ _anmations__WEBPACK_IMPORTED_MODULE_3__.animationShow),
/* harmony export */   "finishGuide": () => (/* reexport safe */ _anmations__WEBPACK_IMPORTED_MODULE_3__.finishGuide)
/* harmony export */ });
/* harmony import */ var _startGuide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startGuide */ "./src/startGuide.ts");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./src/init/index.ts");
/* harmony import */ var _popupDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popupDiv */ "./src/popupDiv/index.ts");
/* harmony import */ var _anmations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anmations */ "./src/anmations/index.ts");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9hbm1hdGlvbnMvYW5pbWF0aW9uSGlkZS50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9hbm1hdGlvbnMvYW5pbWF0aW9uU2hvdy50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9hbm1hdGlvbnMvZmluaXNoR3VpZGUudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvYW5tYXRpb25zL2luZGV4LnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthLy4vc3JjL2luaXQvYXJyYW5nZU9yZGVyLnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthLy4vc3JjL2luaXQvZ3VpZGVJbml0LnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthLy4vc3JjL2luaXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvcG9wdXBEaXYvY3JlYXRlUG91cERpdi50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9wb3B1cERpdi9pbmRleC50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9wb3B1cERpdi9zZXRTdHlsZS50cyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS8uL3NyYy9zdGFydEd1aWRlLnRzIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYXR1c292YS1saWJrYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hdHVzb3ZhLWxpYmthL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWF0dXNvdmEtbGlia2EvLi9zcmMvaW5kZXgu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RTtRQUNsQixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNwRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMvQyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbkMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUMzRTtTQUFNLElBQUksUUFBUSxLQUFLLEdBQUcsRUFBRTtRQUN6QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM1RSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM3RSxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbkMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUMzRTtTQUFNLElBQUksUUFBUSxLQUFLLEdBQUcsRUFBRTtRQUN6QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM1RSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRSxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbkMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUksR0FBc0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztLQUN0RTtTQUFNO1FBQ0gsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDNUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDL0MsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ25DLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7S0FDM0U7SUFHRCxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDL0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzdDZ0M7QUFFMUIsU0FBUyxLQUFLLENBQUMsS0FBZTtJQUNqQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixNQUFNLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7SUFDakMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDckIsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsTUFBTSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsZ0RBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixDQUFDO0FBRUQsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQzs7Ozs7OztVQ1o3QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNOO0FBQ0k7QUFDQyIsImZpbGUiOiJsaWJrYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhbmltYXRpb25IaWRlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBbNDAsIDQwLCA0MCwgMF07XG4gICAgY29uc3QgZW5kID0gWzI1NSwgMjU1LCAyNTUsIDFdO1xuXG4gICAgY29uc29sZS5sb2coXCJoaWRpbmcgZWxlbWVudCA6XCIgKyBlbGVtZW50LmlkLCBcImN1cnJlbnQgcG9wdXBEaXYgaW5kZXggOiBcIiArIGN1cnJlbnRQb3B1cERpdnNJbmRleCk7XG5cbiAgICAkKGVsZW1lbnQpLmFuaW1hdGUoeydhYWEnOiAwfSwge1xuICAgICAgICBkdXJhdGlvbjogMTAwMCwgc3RlcChub3cpIHtcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYmEoJyArXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoKHN0YXJ0WzBdICsgKGVuZFswXSAtIHN0YXJ0WzBdKSAqIG5vdykudG9TdHJpbmcoKSkgKyAnLCcgK1xuICAgICAgICAgICAgICAgIHBhcnNlSW50KChzdGFydFsxXSArIChlbmRbMV0gLSBzdGFydFsxXSkgKiBub3cpLnRvU3RyaW5nKCkpICsgJywnICtcbiAgICAgICAgICAgICAgICBwYXJzZUludCgoc3RhcnRbMl0gKyAoZW5kWzJdIC0gc3RhcnRbMl0pICogbm93KS50b1N0cmluZygpKSArICcpJ1xuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYW5pbWF0aW9uU2hvdyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnNvbGUubG9nKFwic2hvd2luZyBlbGVtZW50IDpcIiArIGVsZW1lbnQuaWQsIFwiY3VycmVudCBwb3B1cERpdiBpbmRleCA6IFwiICsgY3VycmVudFBvcHVwRGl2c0luZGV4KTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gWzQwLCA0MCwgNDAsIDBdO1xuICAgIGNvbnN0IGVuZCA9IFsyNTUsIDI1NSwgMjU1LCAxXTtcblxuICAgICQoZWxlbWVudCkuYW5pbWF0ZSh7J2FhYSc6IDF9LCB7XG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLCBzdGVwKG5vdykge1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAncmdiYSgnICtcbiAgICAgICAgICAgICAgICBwYXJzZUludCgoc3RhcnRbMF0gKyAoZW5kWzBdIC0gc3RhcnRbMF0pICogbm93KS50b1N0cmluZygpKSArICcsJyArXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoKHN0YXJ0WzFdICsgKGVuZFsxXSAtIHN0YXJ0WzFdKSAqIG5vdykudG9TdHJpbmcoKSkgKyAnLCcgK1xuICAgICAgICAgICAgICAgIHBhcnNlSW50KChzdGFydFsyXSArIChlbmRbMl0gLSBzdGFydFsyXSkgKiBub3cpLnRvU3RyaW5nKCkpICsgJyknXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBmaW5pc2hHdWlkZSgpIHtcbiAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4KytdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCI7XG4gICAgYWxsSHRtbEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1iYWNrZ3JvdW5kXCIpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbG9yXCIpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWJhY2tncm91bmRcIik7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1jb2xvclwiKTtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uSGlkZSc7XG5leHBvcnQgKiBmcm9tICcuL2FuaW1hdGlvblNob3cnO1xuZXhwb3J0ICogZnJvbSAnLi9maW5pc2hHdWlkZSc7IiwiXG5leHBvcnQgZnVuY3Rpb24gYXJyYW5nZU9yZGVyKGFycmF5OiBIVE1MRWxlbWVudFtdKSB7XG4gICAgZWxlbWVudHMuc3BsaWNlKDAsIGVsZW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZFbGVtZW50czsgaSsrKSB7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goLi4uYXJyYXkuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWd1aWRlLXN0ZXBcIikgPT09IGkudG9TdHJpbmcoKSkpXG4gICAgICAgIC8vIHByb2JsZW0gcyBwb3Jvdm5hbmltIGJvbG8gdHJlYmEgdG9zdHJpbmdcbiAgICB9XG59XG4iLCJpbXBvcnQge2FycmFuZ2VPcmRlcn0gZnJvbSBcIi4vYXJyYW5nZU9yZGVyXCI7XG5pbXBvcnQge2NyZWF0ZVBvcHVwRGl2fSBmcm9tIFwiLi4vcG9wdXBEaXZcIjtcbmltcG9ydCB7YW5pbWF0aW9uU2hvd30gZnJvbSBcIi4uL2FubWF0aW9uc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ3VpZGVJbml0KGlucHV0OiBzdHJpbmdbXSkge1xuICAgIGxldCBjdXJyZW50Tm9kZTtcbiAgICBjb25zdCBuaSA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UKTtcblxuICAgIC8vIGNsZWFyIGFycmF5cyBhbmQgdmFyaWFibGVzIGluIGNhc2Ugb2YgYW5vdGhlciBzdGFydCBvZiBHdWlkZSBmdW5jdGlvblxuICAgIHdoaWxlIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVsZW1lbnRzLnBvcCgpO1xuICAgIH1cbiAgICB3aGlsZSAocG9wdXBEaXZzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcG9wdXBEaXZzLnBvcCgpO1xuICAgIH1cbiAgICBudW1iZXJPZkVsZW1lbnRzID0gMDtcbiAgICBjdXJyZW50UG9wdXBEaXZzSW5kZXggPSAwO1xuICAgIGlkQ291bnRlciA9IDE7XG5cbiAgICBsZXQgc2VhcmNoOiBudW1iZXI7XG4gICAgY29uc3QgdG1wQXJyYXkgPSBbXTtcbiAgICB3aGlsZSAoY3VycmVudE5vZGUgPSBuaS5uZXh0Tm9kZSgpIGFzIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWd1aWRlXCIpID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgdG1wQXJyYXkucHVzaChjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICBudW1iZXJPZkVsZW1lbnRzKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VhcmNoID09PSAxKSB7XG4gICAgICAgICAgICBhbGxIdG1sRWxlbWVudHMucHVzaChjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJhY2tHcm91bmRcIiwgZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja0dyb3VuZCcpKTtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZShcImRhdGEtY29sb3JcIiwgZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgnY29sb3InKSk7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCI7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5zdHlsZS5jb2xvciA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnROb2RlLnRhZ05hbWUgPT09IFwiQk9EWVwiKSB7XG4gICAgICAgICAgICBib2R5RWxlbWVudCA9IGN1cnJlbnROb2RlO1xuICAgICAgICAgICAgY3VycmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLCAwLCAwLCAwLjg1KVwiO1xuICAgICAgICAgICAgc2VhcmNoID0gMTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgYXJyYW5nZU9yZGVyKHRtcEFycmF5KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mRWxlbWVudHM7IGkrKylcbiAgICAgICAgY3JlYXRlUG9wdXBEaXYoZWxlbWVudHNbaV0sIGlucHV0KTtcblxuICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIC8vXG4gICAgJChwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XSkuYW5pbWF0ZSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICB9LCAxMDAwKTtcbiAgICBhbmltYXRpb25TaG93KGVsZW1lbnRzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0pO1xuXG59XG5cbiIsImV4cG9ydCB7Z3VpZGVJbml0fSBmcm9tICcuL2d1aWRlSW5pdCc7IiwiaW1wb3J0IHthbmltYXRpb25IaWRlLCBhbmltYXRpb25TaG93LCBmaW5pc2hHdWlkZX0gZnJvbSBcIi4uL2FubWF0aW9uc1wiO1xuaW1wb3J0IHtzZXRTdHlsZX0gZnJvbSBcIi4vc2V0U3R5bGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvcHVwRGl2KGN1cnJlbnROb2RlOiBIVE1MRWxlbWVudCwgaW5wdXRNZXNzYWdlOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgLy8gYXMgaHRtbGRpdmVsZW1lbnQgbGVibyBwb3RyZWJ1amVtIHBvdcW+aXZhdCBodG1sZGl2ZWxlbWVudCBhdHJpYnV0eVxuICAgIG5ld0Rpdi5pZCA9IFwicG9wdXBEaXZcIiArIGlkQ291bnRlcjtcbiAgICBwb3B1cERpdnMucHVzaChuZXdEaXYpO1xuICAgIGlkQ291bnRlcisrO1xuXG4gICAgY29uc3QgZXhpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgZXhpdEJ1dHRvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlhcIikpO1xuICAgIGV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZmluaXNoR3VpZGUoKTtcbiAgICB9KTtcbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoZXhpdEJ1dHRvbik7XG5cbiAgICBjb25zdCBuZXdQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIikgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG4gICAgaWYgKGlucHV0TWVzc2FnZVtpZENvdW50ZXIgLSAyXSAhPT0gbnVsbCAmJiBpbnB1dE1lc3NhZ2VbaWRDb3VudGVyIC0gMl0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgbmV3UC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpbnB1dE1lc3NhZ2VbaWRDb3VudGVyIC0gMl0pKTtcbiAgICBlbHNlXG4gICAgICAgIG5ld1AuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJOTyBNRVNTQUdFIFdSSVRURU5cIikpO1xuICAgIC8vIG5ld1AuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3VycmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1ndWlkZS1tZXNzYWdlXCIpKSk7XG4gICAgbmV3UC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIxMnB4XCI7XG4gICAgbmV3UC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMTJweFwiO1xuICAgIG5ld1Auc3R5bGUubWFyZ2luVG9wID0gXCIwXCI7XG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld1ApO1xuXG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgICBpZiAobmV3RGl2LmlkID09PSBcInBvcHVwRGl2XCIgKyBudW1iZXJPZkVsZW1lbnRzKVxuICAgICAgICBuZXh0QnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRmluaXNoXCIpKTtcbiAgICBlbHNlXG4gICAgICAgIG5leHRCdXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJOZXh0XCIpKTtcblxuICAgIG5leHRCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiMTdweFwiO1xuICAgIG5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgbmV4dEJ1dHRvbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjUwcHhcIjtcblxuICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5leHRXaW5kb3cgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFBvcHVwRGl2c0luZGV4ID49IHBvcHVwRGl2cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAvLyBhbGVydChcImtvbmllY1wiKTtcbiAgICAgICAgICAgIGZpbmlzaEd1aWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4KytdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIC8vXG5cblxuICAgICAgICAgICAgJChwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XSkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4wXG4gICAgICAgICAgICB9LCAxMDAwKTtcblxuXG4gICAgICAgICAgICBhbmltYXRpb25IaWRlKGVsZW1lbnRzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0pO1xuICAgICAgICAgICAgYW5pbWF0aW9uU2hvdyhlbGVtZW50c1tjdXJyZW50UG9wdXBEaXZzSW5kZXggKyAxXSk7XG5cblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQb3B1cERpdnNJbmRleCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBEaXZzWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9LCAxMDAwKTtcblxuXG4gICAgICAgICAgICBjdXJyZW50UG9wdXBEaXZzSW5kZXgrKztcblxuICAgICAgICAgICAgcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblxuXG4gICAgICAgICAgICAkKHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICAgICAgLy8gcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgLy9cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKG5leHRCdXR0b24pO1xuXG4gICAgLy8gUmllxaFpbCBzb20gdG8gYWJ5IHNvbSBwcmkgbmV4dCBhIHByZXYgYnV0dG9ucyBwcmkgcG9wdXBkaXYgbmVwcmVsaWV6b2wgY2V6IG9rcmFqLlxuICAgIC8vIFByaSBkYWxzb20ga29kZW5pIHNvbSBwcmnFoWllbCBuYSB0b1xuICAgIC8vIHplIHByaSBvZHN0cmFuZW5pIHByZXYgYnV0dG9udSBwcmkgcHJ2b20gb2tuZSBzYSBvIHRvIG5lbXVzaW0gc3RhcmF0LCBzdGHEjWkgcHJpZGF0IGtvbnRyb2x1IG5hIGxhc3QgcG9wdXBkaXZcblxuXG4gICAgaWYgKG5ld0Rpdi5pZCAhPT0gXCJwb3B1cERpdjFcIikgeyAgICAgICAgICAgLy8gYWJ5IHBydmUgb2tubyBuZW1hbG8gcHJldmlvdXMgYnV0dG9uXG4gICAgICAgIGNvbnN0IHByZXZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBwcmV2QnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUHJldlwiKSk7XG4gICAgICAgIHByZXZCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNXB4XCI7XG4gICAgICAgIHByZXZCdXR0b24uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MHB4XCI7XG4gICAgICAgIHByZXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2V2luZG93ID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UG9wdXBEaXZzSW5kZXggPCAxKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJrb25pZWNcIik7XG4gICAgICAgICAgICAgICAgcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleC0tXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXgtLV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgIC8vXG4gICAgICAgICAgICAgICAgLy8gcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgICAvL1xuXG5cbiAgICAgICAgICAgICAgICAkKHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4wXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG5cblxuICAgICAgICAgICAgICAgIGFuaW1hdGlvblNob3coZWxlbWVudHNbY3VycmVudFBvcHVwRGl2c0luZGV4IC0gMV0pO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkhpZGUoZWxlbWVudHNbY3VycmVudFBvcHVwRGl2c0luZGV4XSk7XG5cblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4ICsgMV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuXG5cbiAgICAgICAgICAgICAgICBjdXJyZW50UG9wdXBEaXZzSW5kZXgtLTtcblxuICAgICAgICAgICAgICAgIHBvcHVwRGl2c1tjdXJyZW50UG9wdXBEaXZzSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgcG9wdXBEaXZzW2N1cnJlbnRQb3B1cERpdnNJbmRleF0uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXG4gICAgICAgICAgICAgICAgJChwb3B1cERpdnNbY3VycmVudFBvcHVwRGl2c0luZGV4XSkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChwcmV2QnV0dG9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcm9ncmVzc1wiKSBhcyBIVE1MUHJvZ3Jlc3NFbGVtZW50O1xuICAgIHByb2dyZXNzLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjVweFwiO1xuICAgIHByb2dyZXNzLnZhbHVlID0gaWRDb3VudGVyIC0gMjtcbiAgICBwcm9ncmVzcy5tYXggPSBlbGVtZW50cy5sZW5ndGg7XG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKHByb2dyZXNzKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV3RGl2KTtcblxuICAgIHNldFN0eWxlKG5ld0RpdiwgY3VycmVudE5vZGUsIGV4aXRCdXR0b24pO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jcmVhdGVQb3VwRGl2JztcbmV4cG9ydCAqIGZyb20gJy4vc2V0U3R5bGUnOyIsImV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZShkaXY6IEhUTUxFbGVtZW50LCBjdXJyZW50Tm9kZTogSFRNTEVsZW1lbnQsIGV4aXRCdXR0b246IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjdXJyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWd1aWRlLXBvc2l0aW9uXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHBvc2l0aW9uKTtcbiAgICAvLyBkaXYuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAvLyBwcm9ibGVtIHYgemlza2FuaSBwb3ppY2llIGtlZHplIHNvbSBuYXN0YXZpbCBuYWpwcnYgZGlzcGxheSBub25lIGEgcG90b20gemlzdG92YWwgcG96aWNpdVxuICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBkaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIyMHB4XCI7XG4gICAgZGl2LnN0eWxlLm1heFdpZHRoID0gXCIyMCVcIjtcbiAgICBkaXYuc3R5bGUubWluV2lkdGggPSBcIjMwMHB4XCI7XG4gICAgZGl2LnN0eWxlLndpZHRoID0gXCJhdXRvXCI7XG4gICAgZGl2LnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgZGl2LnN0eWxlLnpJbmRleCA9IFwiMjAwXCI7XG4gICAgZGl2LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcblxuXG4gICAgZXhpdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZmZmZmZmXCJcbiAgICBleGl0QnV0dG9uLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuICAgIGV4aXRCdXR0b24uc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIGV4aXRCdXR0b24uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cbiAgICBpZiAocG9zaXRpb24gPT09IFwiVVwiKSB7XG4gICAgICAgIGRpdi5zdHlsZS50b3AgPSBjdXJyZW50Tm9kZS5vZmZzZXRUb3AgLSBkaXYub2Zmc2V0SGVpZ2h0IC0gNCArICdweCc7XG4gICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gY3VycmVudE5vZGUub2Zmc2V0TGVmdCArICdweCc7XG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUucGFkZGluZ1RvcCA9IFwiMiVcIjtcbiAgICAgICAgZXhpdEJ1dHRvbi5zdHlsZS5sZWZ0ID0gZGl2Lm9mZnNldFdpZHRoIC0gZXhpdEJ1dHRvbi5vZmZzZXRXaWR0aCArICdweCc7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gXCJSXCIpIHtcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IGN1cnJlbnROb2RlLm9mZnNldFRvcCAtIGN1cnJlbnROb2RlLm9mZnNldEhlaWdodCAvIDIgKyAncHgnO1xuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IGN1cnJlbnROb2RlLm9mZnNldExlZnQgKyBjdXJyZW50Tm9kZS5vZmZzZXRXaWR0aCArIDEgKyAncHgnO1xuICAgICAgICBleGl0QnV0dG9uLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIlXCI7XG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUubGVmdCA9IGRpdi5vZmZzZXRXaWR0aCAtIGV4aXRCdXR0b24ub2Zmc2V0V2lkdGggKyAncHgnO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09IFwiTFwiKSB7XG4gICAgICAgIGRpdi5zdHlsZS50b3AgPSBjdXJyZW50Tm9kZS5vZmZzZXRUb3AgLSBjdXJyZW50Tm9kZS5vZmZzZXRIZWlnaHQgLyAyICsgJ3B4JztcbiAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSBjdXJyZW50Tm9kZS5vZmZzZXRMZWZ0IC0gZGl2Lm9mZnNldFdpZHRoIC0gMSArICdweCc7XG4gICAgICAgIGV4aXRCdXR0b24uc3R5bGUucGFkZGluZ1RvcCA9IFwiMiVcIjtcbiAgICAgICAgZXhpdEJ1dHRvbi5zdHlsZS5sZWZ0ID0gKGRpdiBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUud2lkdGggKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpdi5zdHlsZS50b3AgPSBjdXJyZW50Tm9kZS5vZmZzZXRUb3AgKyBjdXJyZW50Tm9kZS5vZmZzZXRIZWlnaHQgKyAxICsgJ3B4JztcbiAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSBjdXJyZW50Tm9kZS5vZmZzZXRMZWZ0ICsgJ3B4JztcbiAgICAgICAgZXhpdEJ1dHRvbi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyJVwiO1xuICAgICAgICBleGl0QnV0dG9uLnN0eWxlLmxlZnQgPSBkaXYub2Zmc2V0V2lkdGggLSBleGl0QnV0dG9uLm9mZnNldFdpZHRoICsgJ3B4JztcbiAgICB9XG5cblxuICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG4iLCJpbXBvcnQge2d1aWRlSW5pdH0gZnJvbSBcIi4vaW5pdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ3VpZGUoaW5wdXQ6IHN0cmluZ1tdKSB7XG4gICAgd2luZG93LmVsZW1lbnRzID0gW107XG4gICAgd2luZG93Lm51bWJlck9mRWxlbWVudHMgPSAwO1xuICAgIHdpbmRvdy5jdXJyZW50UG9wdXBEaXZzSW5kZXggPSAwO1xuICAgIHdpbmRvdy5pZENvdW50ZXIgPSAwO1xuICAgIHdpbmRvdy5ib2R5RWxlbWVudCA9IG51bGw7XG4gICAgd2luZG93LmFsbEh0bWxFbGVtZW50cyA9IFtdO1xuICAgIGd1aWRlSW5pdChpbnB1dCk7XG59XG5cbmd1aWRlKFtcInBydmFcIiwgXCJkcnVoYVwiLCBcInRyZXRpYVwiLCBcInN0dnJ0YVwiXSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCAqIGZyb20gJy4vc3RhcnRHdWlkZSc7XG5leHBvcnQgKiBmcm9tICcuL2luaXQnO1xuZXhwb3J0ICogZnJvbSAnLi9wb3B1cERpdic7XG5leHBvcnQgKiBmcm9tICcuL2FubWF0aW9ucyc7XG4iXSwic291cmNlUm9vdCI6IiJ9