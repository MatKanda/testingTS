import {GuideInit} from './GuideInit'
export class PopupDivs extends GuideInit{
    constructor(messages) {
        super();
        this.createAllPopupDivs(messages);
        this.popupDivs[this.currentPopupDivsIndex].style.display="block";

    }
    createAllPopupDivs(messages) {
        for (var i = 0; i < this.numberOfElements; i++)
            this.createPopupDiv(this.elements[i],messages);
    }

    createPopupDiv(currentNode,messages){
        var newDiv=document.createElement("div") as HTMLDivElement;   //as htmldivelement lebo potrebujem použivat htmldivelement atributy
        newDiv.id="popupDiv"+this.idCounter;
        this.popupDivs.push(newDiv);
        this.idCounter++;

        var newP=document.createElement("p") as HTMLParagraphElement;
        // newP.appendChild(document.createTextNode(currentNode.getAttribute("data-guide-message")));       //verzia custom data
        newP.appendChild(document.createTextNode(messages[this.currentPopupDivsIndex]));        //verzia TS array
        newP.style.marginLeft="12px";
        newDiv.appendChild(newP);

        this.createNextButton(newDiv);

        // Riešil som to aby som pri next a prev buttons pri popupdiv nepreliezol cez okraj. Pri dalsom kodeni som prišiel na to
        // ze pri odstraneni prev buttonu pri prvom okne sa o to nemusim starat, stači pridat kontrolu na last popupdiv

        this.createPrevButton(newDiv);

        document.body.appendChild(newDiv);

        this.setStyle(newDiv,currentNode);
    }

    createNextButton(newDiv){
        var nextButton=document.createElement("button") as HTMLButtonElement;

        if(newDiv.id==="popupDiv"+this.numberOfElements)
            nextButton.appendChild(document.createTextNode("Finish"));
        else
            nextButton.appendChild(document.createTextNode("Next"));

        nextButton.style.marginLeft="35px";
        nextButton.style.display="inline-block";
        nextButton.style.borderRadius="50px";
        nextButton.addEventListener("click",nextWindow=>{
            if(this.currentPopupDivsIndex>=this.popupDivs.length-1) {
                alert("koniec");
                this.popupDivs[this.currentPopupDivsIndex++].style.display="none";
            }else {
                this.popupDivs[this.currentPopupDivsIndex++].style.display = "none";
                this.popupDivs[this.currentPopupDivsIndex].style.display = "block";
            }
        });
        newDiv.appendChild(nextButton);
    }

    createPrevButton(newDiv){
        if (newDiv.id!=="popupDiv1"){           //aby prve okno nemalo previous button
            var prevButton = document.createElement("button");
            prevButton.appendChild(document.createTextNode("Prev"));
            prevButton.style.marginLeft="15px";
            prevButton.style.borderRadius="50px";
            prevButton.addEventListener('click',prevWindow=>{
                if(this.currentPopupDivsIndex<1) {
                    alert("koniec");
                    this.popupDivs[this.currentPopupDivsIndex--].style.display="none";
                }else {
                    this.popupDivs[this.currentPopupDivsIndex--].style.display = "none";
                    this.popupDivs[this.currentPopupDivsIndex].style.display = "block";
                }
            });
            newDiv.appendChild(prevButton);
        }
    }

    setStyle(div,currentNode){
        var position=currentNode.getAttribute("data-guide-position");
        console.log(position);
        // div.style.display="none";    //problem v ziskani pozicie kedze som nastavil najprv display none a potom zistoval poziciu
        div.style.position="absolute";
        div.style.borderRadius="20px";
        div.style.maxWidth="20%";
        div.style.width="auto";
        div.style.height="auto";
        div.style.backgroundColor="lightcoral";
        div.style.zIndex="200";
        div.style.opacity="1";

        console.log("div Height "+div.offsetHeight);

        if(position==="U"){
            div.style.top=currentNode.offsetTop-div.offsetHeight+'px';
            div.style.left=currentNode.offsetLeft+'px';
        }
        else if(position==="R"){
            div.style.top=currentNode.offsetTop-currentNode.offsetHeight/2+'px';
            div.style.left=currentNode.offsetLeft+currentNode.offsetWidth+'px';
        }
        else if(position==="L"){
            div.style.top=currentNode.offsetTop-currentNode.offsetHeight/2+'px';
            div.style.left=currentNode.offsetLeft-div.offsetWidth+'px';
        }
        else{
            div.style.top=currentNode.offsetTop+currentNode.offsetHeight+'px';
            div.style.left=currentNode.offsetLeft+'px';
        }

        div.style.display="none";
    }
}