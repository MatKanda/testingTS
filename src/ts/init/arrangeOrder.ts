import {numberOfElements,elements} from "../variables";

export function arrangeOrder(array:HTMLElement[]){
    for (var i=1;i<=numberOfElements;i++)
        for(var j=0;j<array.length;j++)
            if (array[j].getAttribute("data-guide-step")===i.toString()) //problem s porovnanim bolo treba tostring
                elements.push(array[j]);
}