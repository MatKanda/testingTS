"use strict";
/*
function addTask(){
    let task = (document.getElementById("addTask") as HTMLInputElement).value;
    let deadLine = (document.getElementById("addDeadLine") as HTMLInputElement).value;

    addNode(task,"myLeftList");
    addNode(deadLine, "myRightList");
}

function addNode(inputText:string, id:string){
    let node = document.createElement("LI");
    let textNode=document.createTextNode(inputText);
    node.appendChild(textNode);
    document.getElementById(id).appendChild(node);
}
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./liNode"), exports);
__exportStar(require("./task"), exports);
__exportStar(require("./function"), exports);
console.log("lmao");
//# sourceMappingURL=index.js.map