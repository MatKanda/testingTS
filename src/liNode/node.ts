import {Task} from '../task';

export class NewNode extends Task{
    constructor(task:string,deadline:string) {
        super(task,deadline);
    }
    create(){
        let node = document.createElement("LI");
        let textNode=document.createTextNode(this.task);
        node.appendChild(textNode);
        document.getElementById("myLeftList").appendChild(node);

        let node2 = document.createElement("LI");
        let deadlineNode=document.createTextNode(this.deadLine);
        node2.appendChild(deadlineNode);
        document.getElementById("myRightList").appendChild(node2);
    }
}