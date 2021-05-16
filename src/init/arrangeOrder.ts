// export function arrangeOrder(array: HTMLElement[]) {
//     elements.splice(0, elements.length);
//     for (let i = 1; i <= numberOfElements; i++) {
//         elements.push(...array.filter(element => element.getAttribute("data-guide-step") === i.toString()))
//         // problem s porovnanim bolo treba tostring
//     }
// }

export function arrangeOrder(array:HTMLElement[]){
    for (var i=1;i<=numberOfElements;i++)
        for(var j=0;j<array.length;j++)
            if(array[j].hasAttribute("data-guide-step")) {
                if (array[j].getAttribute("data-guide-step") === i.toString()) //problem s porovnanim bolo treba tostring
                    elements.push(array[j]);
            }
            else{
                console.log("ERROR : Missing guide-step in your HTML element");
            }
}