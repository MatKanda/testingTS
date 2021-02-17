"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupDivs = void 0;
var GuideInit_1 = require("./GuideInit");
var PopupDivs = /** @class */ (function (_super) {
    __extends(PopupDivs, _super);
    function PopupDivs(messages) {
        var _this = _super.call(this) || this;
        _this.createAllPopupDivs(messages);
        _this.popupDivs[_this.currentPopupDivsIndex].style.display = "block";
        return _this;
    }
    PopupDivs.prototype.createAllPopupDivs = function (messages) {
        for (var i = 0; i < this.numberOfElements; i++)
            this.createPopupDiv(this.elements[i], messages);
    };
    PopupDivs.prototype.createPopupDiv = function (currentNode, messages) {
        var newDiv = document.createElement("div"); //as htmldivelement lebo potrebujem použivat htmldivelement atributy
        newDiv.id = "popupDiv" + this.idCounter;
        this.popupDivs.push(newDiv);
        this.idCounter++;
        var newP = document.createElement("p");
        // newP.appendChild(document.createTextNode(currentNode.getAttribute("data-guide-message")));       //verzia custom data
        newP.appendChild(document.createTextNode(messages[this.currentPopupDivsIndex])); //verzia TS array
        newP.style.marginLeft = "12px";
        newDiv.appendChild(newP);
        this.createNextButton(newDiv);
        // Riešil som to aby som pri next a prev buttons pri popupdiv nepreliezol cez okraj. Pri dalsom kodeni som prišiel na to
        // ze pri odstraneni prev buttonu pri prvom okne sa o to nemusim starat, stači pridat kontrolu na last popupdiv
        this.createPrevButton(newDiv);
        document.body.appendChild(newDiv);
        this.setStyle(newDiv, currentNode);
    };
    PopupDivs.prototype.createNextButton = function (newDiv) {
        var _this = this;
        var nextButton = document.createElement("button");
        if (newDiv.id === "popupDiv" + this.numberOfElements)
            nextButton.appendChild(document.createTextNode("Finish"));
        else
            nextButton.appendChild(document.createTextNode("Next"));
        nextButton.style.marginLeft = "35px";
        nextButton.style.display = "inline-block";
        nextButton.style.borderRadius = "50px";
        nextButton.addEventListener("click", function (nextWindow) {
            if (_this.currentPopupDivsIndex >= _this.popupDivs.length - 1) {
                alert("koniec");
                _this.popupDivs[_this.currentPopupDivsIndex++].style.display = "none";
            }
            else {
                _this.popupDivs[_this.currentPopupDivsIndex++].style.display = "none";
                _this.popupDivs[_this.currentPopupDivsIndex].style.display = "block";
            }
        });
        newDiv.appendChild(nextButton);
    };
    PopupDivs.prototype.createPrevButton = function (newDiv) {
        var _this = this;
        if (newDiv.id !== "popupDiv1") { //aby prve okno nemalo previous button
            var prevButton = document.createElement("button");
            prevButton.appendChild(document.createTextNode("Prev"));
            prevButton.style.marginLeft = "15px";
            prevButton.style.borderRadius = "50px";
            prevButton.addEventListener('click', function (prevWindow) {
                if (_this.currentPopupDivsIndex < 1) {
                    alert("koniec");
                    _this.popupDivs[_this.currentPopupDivsIndex--].style.display = "none";
                }
                else {
                    _this.popupDivs[_this.currentPopupDivsIndex--].style.display = "none";
                    _this.popupDivs[_this.currentPopupDivsIndex].style.display = "block";
                }
            });
            newDiv.appendChild(prevButton);
        }
    };
    PopupDivs.prototype.setStyle = function (div, currentNode) {
        var position = currentNode.getAttribute("data-guide-position");
        console.log(position);
        // div.style.display="none";    //problem v ziskani pozicie kedze som nastavil najprv display none a potom zistoval poziciu
        div.style.position = "absolute";
        div.style.borderRadius = "20px";
        div.style.maxWidth = "20%";
        div.style.width = "auto";
        div.style.height = "auto";
        div.style.backgroundColor = "lightcoral";
        div.style.zIndex = "200";
        div.style.opacity = "1";
        console.log("div Height " + div.offsetHeight);
        if (position === "U") {
            div.style.top = currentNode.offsetTop - div.offsetHeight + 'px';
            div.style.left = currentNode.offsetLeft + 'px';
        }
        else if (position === "R") {
            div.style.top = currentNode.offsetTop - currentNode.offsetHeight / 2 + 'px';
            div.style.left = currentNode.offsetLeft + currentNode.offsetWidth + 'px';
        }
        else if (position === "L") {
            div.style.top = currentNode.offsetTop - currentNode.offsetHeight / 2 + 'px';
            div.style.left = currentNode.offsetLeft - div.offsetWidth + 'px';
        }
        else {
            div.style.top = currentNode.offsetTop + currentNode.offsetHeight + 'px';
            div.style.left = currentNode.offsetLeft + 'px';
        }
        div.style.display = "none";
    };
    return PopupDivs;
}(GuideInit_1.GuideInit));
exports.PopupDivs = PopupDivs;
//# sourceMappingURL=PopupDiv.js.map