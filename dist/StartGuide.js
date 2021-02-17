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
var PopupDiv_1 = require("./PopupDiv");
var StartGuide = /** @class */ (function (_super) {
    __extends(StartGuide, _super);
    function StartGuide(messages) {
        return _super.call(this, messages) || this;
    }
    return StartGuide;
}(PopupDiv_1.PopupDivs));
document.getElementById("guide").addEventListener("click", function () {
    var messages = [
        "Prvy element textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Druhy element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Treti element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Stvrty element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Piaty element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Siesty element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Siedmy element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Osmy element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as"
    ];
    new StartGuide(messages);
});
//# sourceMappingURL=StartGuide.js.map