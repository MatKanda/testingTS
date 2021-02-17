"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuideInit = void 0;
var GuideInit = /** @class */ (function () {
    function GuideInit() {
        this.tmpArray = [];
        this.elements = [];
        this.popupDivs = [];
        this.numberOfElements = 0;
        this.currentPopupDivsIndex = 0;
        this.idCounter = 1;
        this.clearAllValues();
        this.searchCode();
        this.arrangeOrder(this.tmpArray);
    }
    GuideInit.prototype.clearAllValues = function () {
        while (this.elements.length > 0) {
            this.elements.pop();
        }
        while (this.popupDivs.length > 0) {
            this.popupDivs.pop();
        }
        this.numberOfElements = 0;
        this.currentPopupDivsIndex = 0;
        this.idCounter = 1;
    };
    GuideInit.prototype.searchCode = function () {
        var currentNode, ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);
        while (currentNode = ni.nextNode()) {
            if (currentNode.getAttribute("data-guide") === "true") {
                this.tmpArray.push(currentNode);
                this.numberOfElements++;
            }
        }
    };
    GuideInit.prototype.arrangeOrder = function (array) {
        for (var i = 1; i <= this.numberOfElements; i++)
            for (var j = 0; j < array.length; j++)
                if (array[j].getAttribute("data-guide-step") === i.toString()) //problem s porovnanim bolo treba tostring
                    this.elements.push(array[j]);
    };
    return GuideInit;
}());
exports.GuideInit = GuideInit;
//# sourceMappingURL=GuideInit.js.map