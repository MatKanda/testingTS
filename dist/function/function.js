"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = exports.NEW_NODE = void 0;
var liNode_1 = require("../liNode");
exports.NEW_NODE = new liNode_1.NewNode(document.getElementById("addTask").value, document.getElementById("addDeadLine").value);
function addTask() {
    exports.NEW_NODE.create();
}
exports.addTask = addTask;
//# sourceMappingURL=function.js.map