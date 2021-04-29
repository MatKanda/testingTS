import {finishGuide} from "../animations";
import {setStyle} from "./setStyle";
import {prevWindow} from "./prevWindow";
import {nextWindow} from "./nextWindow";


export function createPopupDiv(currentNode: HTMLElement, inputMessage: string[]) {
    const newDiv = document.createElement("div") as HTMLDivElement;
    // as htmldivelement lebo potrebujem použivat htmldivelement atributy
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

    const nextButton = document.createElement("button") as HTMLButtonElement;

    if (newDiv.id === "popupDiv" + numberOfElements)
        nextButton.appendChild(document.createTextNode("Finish"));
    else
        nextButton.appendChild(document.createTextNode("Next"));

    nextButton.style.marginLeft = "17px";
    nextButton.style.display = "inline-block";
    nextButton.style.borderRadius = "50px";

    nextButton.addEventListener("click", () => {nextWindow();
        // if (currentPopupDivsIndex >= popupDivs.length - 1) {
        //     // alert("koniec");
        //     finishGuide();
        // } else {
        //     // popupDivs[currentPopupDivsIndex++].style.display = "none";  //
        //
        //     //@ts-ignore
        //     $(popupDivs[currentPopupDivsIndex]).animate({
        //         opacity: 0.0
        //     }, 1000);
        //
        //
        //     animationHide(elements[currentPopupDivsIndex]);
        //     animationShow(elements[currentPopupDivsIndex + 1]);
        //
        //
        //     setTimeout(() => {
        //         if (currentPopupDivsIndex === 0)
        //             popupDivs[0].style.display = "none";
        //         else
        //             popupDivs[currentPopupDivsIndex - 1].style.display = "none";
        //     }, 1000);
        //
        //
        //     currentPopupDivsIndex++;
        //
        //     popupDivs[currentPopupDivsIndex].style.display = "block";
        //     popupDivs[currentPopupDivsIndex].style.opacity = "0";
        //
        //     //@ts-ignore
        //     $(popupDivs[currentPopupDivsIndex]).animate({
        //         opacity: 1
        //     }, 1000);
        //
        //     // popupDivs[currentPopupDivsIndex].style.display = "block"; //
        // }
    });

    newDiv.appendChild(nextButton);

    // Riešil som to aby som pri next a prev buttons pri popupdiv nepreliezol cez okraj.
    // Pri dalsom kodeni som prišiel na to
    // ze pri odstraneni prev buttonu pri prvom okne sa o to nemusim starat, stači pridat kontrolu na last popupdiv


    if (newDiv.id !== "popupDiv1") {           // aby prve okno nemalo previous button
        const prevButton = document.createElement("button");
        prevButton.appendChild(document.createTextNode("Prev"));
        prevButton.style.marginLeft = "5px";
        prevButton.style.borderRadius = "50px";
        prevButton.addEventListener('click', () => {

            prevWindow();

            // if (currentPopupDivsIndex < 1) {
            //     alert("koniec");
            //     popupDivs[currentPopupDivsIndex--].style.display = "none";
            // } else {
            //     // popupDivs[currentPopupDivsIndex--].style.display = "none";   //
            //     // popupDivs[currentPopupDivsIndex].style.display = "block";   //
            //
            //     //@ts-ignore
            //     $(popupDivs[currentPopupDivsIndex]).animate({
            //         opacity: 0.0
            //     }, 1000);
            //
            //
            //     animationShow(elements[currentPopupDivsIndex - 1]);
            //     animationHide(elements[currentPopupDivsIndex]);
            //
            //
            //     setTimeout(() => {
            //         popupDivs[currentPopupDivsIndex + 1].style.display = "none";
            //     }, 1000);
            //
            //
            //     currentPopupDivsIndex--;
            //
            //     popupDivs[currentPopupDivsIndex].style.display = "block";
            //     popupDivs[currentPopupDivsIndex].style.opacity = "0";
            //
            //     //@ts-ignore
            //     $(popupDivs[currentPopupDivsIndex]).animate({
            //         opacity: 1
            //     }, 1000);
            // }
        });
        newDiv.appendChild(prevButton);
    }

    const progress = document.createElement("progress") as HTMLProgressElement;
    progress.style.marginLeft = "5px";
    progress.value = idCounter - 2;
    progress.max = elements.length;
    newDiv.appendChild(progress);

    document.body.appendChild(newDiv);

    setStyle(newDiv, currentNode, exitButton);
}
