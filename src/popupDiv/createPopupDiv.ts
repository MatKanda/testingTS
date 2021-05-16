import {finishGuide} from "../animations";
import {setStyle} from "./setStyle";
import {prevWindow} from "./prevWindow";
import {nextWindow} from "./nextWindow";
import {createProgressBar} from "./progressBar";
import {createNextButton, createPrevButton} from "./buttons";


export function createPopupDiv(currentNode: HTMLElement, inputMessage: string[]) {
    const newDiv = document.createElement("div") as HTMLDivElement;
    newDiv.id = "popupDiv" + idCounter;
    popupDivs.push(newDiv);
    idCounter++;

    const exitButton = document.createElement("button") as HTMLButtonElement;
    exitButton.appendChild(document.createTextNode("X"));
    exitButton.addEventListener("click", () => {
        finishGuide();
    });
    newDiv.appendChild(exitButton);

    const newP = document.createElement("p") as HTMLParagraphElement;
    if (inputMessage[idCounter - 2] !== null && inputMessage[idCounter - 2] !== undefined)
        newP.appendChild(document.createTextNode(inputMessage[idCounter - 2]));
    else
        newP.appendChild(document.createTextNode("NO MESSAGE WRITTEN"));
    // newP.appendChild(document.createTextNode(currentNode.getAttribute("data-guide-message")));
    newP.style.marginLeft = "12px";
    newP.style.marginRight = "12px";
    newP.style.marginTop = "0";
    newDiv.appendChild(newP);


    // const nextButton = document.createElement("button") as HTMLButtonElement;
    //
    // if (newDiv.id === "popupDiv" + numberOfElements)
    //     nextButton.appendChild(document.createTextNode("Finish"));
    // else
    //     nextButton.appendChild(document.createTextNode("Next"));
    //
    // nextButton.style.marginLeft = "17px";
    // nextButton.style.display = "inline-block";
    // nextButton.style.borderRadius = "50px";
    // nextButton.id="nextButton"+(idCounter-1);
    //
    // nextButton.addEventListener("click", () => {nextWindow();});

    const nextButton=createNextButton(newDiv);
    newDiv.appendChild(nextButton);


    if (newDiv.id !== "popupDiv1") {           // aby prve okno nemalo previous button
        // const prevButton = document.createElement("button");
        // prevButton.appendChild(document.createTextNode("Prev"));
        // prevButton.style.marginLeft = "5px";
        // prevButton.style.borderRadius = "50px";
        // prevButton.id="prevButton"+(idCounter-1);
        // prevButton.addEventListener('click', () => {prevWindow();});
        // newDiv.appendChild(prevButton);
        const prevButton = createPrevButton(newDiv);
        newDiv.appendChild(prevButton);

    }

    // const progress = document.createElement("progress") as HTMLProgressElement;
    // progress.style.marginLeft = "5px";
    // progress.value = idCounter - 2;
    // progress.max = elements.length;
    const progress = createProgressBar();
    newDiv.appendChild(progress);

    document.body.appendChild(newDiv);

    setStyle(newDiv, currentNode, exitButton);
}
