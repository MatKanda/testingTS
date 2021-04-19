
export function arrangeOrder(array: HTMLElement[]) {
    elements.splice(0, elements.length);
    for (let i = 1; i <= numberOfElements; i++) {
        elements.push(...array.filter(element => element.getAttribute("data-guide-step") === i.toString()))
        // problem s porovnanim bolo treba tostring
    }
}
