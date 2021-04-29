import {animationHide, animationShow, finishGuide} from "../animations";

export function nextWindow(){
    if (currentPopupDivsIndex >= popupDivs.length - 1) {
        // alert("koniec");
        finishGuide();
    } else {
        // popupDivs[currentPopupDivsIndex++].style.display = "none";  //

        //@ts-ignore
        $(popupDivs[currentPopupDivsIndex]).animate({
            opacity: 0.0
        }, 1000);


        animationHide(elements[currentPopupDivsIndex]);
        animationShow(elements[currentPopupDivsIndex + 1]);


        setTimeout(() => {
            if (currentPopupDivsIndex === 0)
                popupDivs[0].style.display = "none";
            else
                popupDivs[currentPopupDivsIndex - 1].style.display = "none";
        }, 1000);


        currentPopupDivsIndex++;

        popupDivs[currentPopupDivsIndex].style.display = "block";
        popupDivs[currentPopupDivsIndex].style.opacity = "0";

        //@ts-ignore
        $(popupDivs[currentPopupDivsIndex]).animate({
            opacity: 1
        }, 1000);

        // popupDivs[currentPopupDivsIndex].style.display = "block"; //
    }
}