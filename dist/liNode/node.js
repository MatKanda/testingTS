"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewNode = void 0;
var task_1 = require("../task");
var NewNode = /** @class */ (function (_super) {
    __extends(NewNode, _super);
    function NewNode(task, deadline) {
        return _super.call(this, task, deadline) || this;
    }
    NewNode.prototype.create = function () {
        var node = document.createElement("LI");
        var textNode = document.createTextNode(this.task);
        node.appendChild(textNode);
        document.getElementById("myLeftList").appendChild(node);
        var node2 = document.createElement("LI");
        var deadlineNode = document.createTextNode(this.deadLine);
        node2.appendChild(deadlineNode);
        document.getElementById("myRightList").appendChild(node2);
    };
    return NewNode;
}(task_1.Task));
exports.NewNode = NewNode;
//# sourceMappingURL=node.js.map