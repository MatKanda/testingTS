import {NewNode} from "../liNode";

export const NEW_NODE = new NewNode((document.getElementById("addTask") as HTMLInputElement).value, (document.getElementById("addDeadLine") as HTMLInputElement).value);

export function addTask() {
    NEW_NODE.create();
}
