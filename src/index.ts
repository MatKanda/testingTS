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

export * from './liNode';
export * from  './task'
export * from  './function';
console.log("lmao");