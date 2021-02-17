var elements=[];
var popupDivs=[];
var numberOfElements:number;
var currentPopupDivsIndex:number;
var idCounter:number;
//
// function guide(){
//     // document.getElementById("guide").disabled="true";
//     guideInit();
//     console.log(popupDivs);
// }
//
// document.getElementById("guide").addEventListener("click", guide);
//
// function guideInit(){
//     var currentNode, ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);
//
//     //clear arrays and variables in case of another start of Guide function
//     while(elements.length > 0) {
//         elements.pop();
//     }
//     while(popupDivs.length > 0) {
//         popupDivs.pop();
//     }
//     numberOfElements=0;
//     currentPopupDivsIndex=0;
//     idCounter=1;
//
//     var tmpArray=[];
//     while (currentNode = ni.nextNode()) {
//         if (currentNode.getAttribute("data-guide") === "true") {
//             tmpArray.push(currentNode);
//             numberOfElements++;
//         }
//     }
//     arrangeOrder(tmpArray);
//     for(var i=0;i<numberOfElements;i++)
//         createPopupDiv(elements[i]);
//
//     popupDivs[currentPopupDivsIndex].style.display="block";
// }
//
// function arrangeOrder(array){
//     console.log(array);
//     for (var i=1;i<=numberOfElements;i++)
//         for(var j=0;j<array.length;j++)
//             if (array[j].getAttribute("data-guide-step")===i.toString()) //problem s porovnanim bolo treba tostring
//                 elements.push(array[j]);
//     console.log(elements);
// }
//
//
// function createPopupDiv(currentNode){
//     var newDiv=document.createElement("div") as HTMLDivElement;   //as htmldivelement lebo potrebujem použivat htmldivelement atributy
//     newDiv.id="popupDiv"+idCounter;
//     popupDivs.push(newDiv);
//     idCounter++;
//
//     var newP=document.createElement("p") as HTMLParagraphElement;
//     newP.appendChild(document.createTextNode(currentNode.getAttribute("data-guide-message")));
//     newP.style.marginLeft="12px";
//     newDiv.appendChild(newP);
//
//     var nextButton=document.createElement("button") as HTMLButtonElement;
//
//     if(newDiv.id==="popupDiv"+numberOfElements)
//         nextButton.appendChild(document.createTextNode("Finish"));
//     else
//         nextButton.appendChild(document.createTextNode("Next"));
//
//     nextButton.style.marginLeft="35px";
//     nextButton.style.display="inline-block";
//     nextButton.style.borderRadius="50px";
//     nextButton.addEventListener("click",nextWindow=>{
//         if(currentPopupDivsIndex>=popupDivs.length-1) {
//             alert("koniec");
//             popupDivs[currentPopupDivsIndex++].style.display="none";
//         }else {
//             popupDivs[currentPopupDivsIndex++].style.display = "none";
//             popupDivs[currentPopupDivsIndex].style.display = "block";
//         }
//     });
//
//     newDiv.appendChild(nextButton);
//
//     // Riešil som to aby som pri next a prev buttons pri popupdiv nepreliezol cez okraj. Pri dalsom kodeni som prišiel na to
//     // ze pri odstraneni prev buttonu pri prvom okne sa o to nemusim starat, stači pridat kontrolu na last popupdiv
//
//
//     if (newDiv.id!=="popupDiv1"){           //aby prve okno nemalo previous button
//         var prevButton = document.createElement("button");
//         prevButton.appendChild(document.createTextNode("Prev"));
//         prevButton.style.marginLeft="15px";
//         prevButton.style.borderRadius="50px";
//         prevButton.addEventListener('click',prevWindow=>{
//             if(currentPopupDivsIndex<1) {
//                 alert("koniec");
//                 popupDivs[currentPopupDivsIndex--].style.display="none";
//             }else {
//                 popupDivs[currentPopupDivsIndex--].style.display = "none";
//                 popupDivs[currentPopupDivsIndex].style.display = "block";
//             }
//         });
//         newDiv.appendChild(prevButton);
//     }
//     // newDiv.appendChild(prevButton);
//
//     document.body.appendChild(newDiv);
//
//     setStyle(newDiv,currentNode);
// }
//
//
// function setStyle(div,currentNode){
//     var position=currentNode.getAttribute("data-guide-position");
//     console.log(position);
//     // div.style.display="none";    //problem v ziskani pozicie kedze som nastavil najprv display none a potom zistoval poziciu
//     div.style.position="absolute";
//     div.style.borderRadius="20px";
//     div.style.maxWidth="20%";
//     div.style.width="auto";
//     div.style.height="auto";
//     div.style.backgroundColor="lightcoral";
//     div.style.zIndex="200";
//     div.style.opacity="1";
//
//     console.log("div Height "+div.offsetHeight);
//
//     if(position==="U"){
//         div.style.top=currentNode.offsetTop-div.offsetHeight+'px';
//         div.style.left=currentNode.offsetLeft+'px';
//     }
//     else if(position==="R"){
//         div.style.top=currentNode.offsetTop-currentNode.offsetHeight/2+'px';
//         div.style.left=currentNode.offsetLeft+currentNode.offsetWidth+'px';
//     }
//     else if(position==="L"){
//         div.style.top=currentNode.offsetTop-currentNode.offsetHeight/2+'px';
//         div.style.left=currentNode.offsetLeft-div.offsetWidth+'px';
//     }
//     else{
//         div.style.top=currentNode.offsetTop+currentNode.offsetHeight+'px';
//         div.style.left=currentNode.offsetLeft+'px';
//     }
//
//     div.style.display="none";
// }




class GuideInit{
    tmpArray=[];
    protected elements=[];
    protected popupDivs=[];
    protected numberOfElements:number=0;
    protected currentPopupDivsIndex:number=0;
    protected idCounter:number=1;

    constructor() {
        this.clearAllValues();
        this.searchCode();
        this.arrangeOrder(this.tmpArray);
    }


    clearAllValues(){
        while(this.elements.length > 0) {
        this.elements.pop();
        }
        while(this.popupDivs.length > 0) {
            this.popupDivs.pop();
        }
        this.numberOfElements=0;
        this.currentPopupDivsIndex=0;
        this.idCounter=1;
    }

    searchCode(){
        var currentNode, ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);
        while (currentNode = ni.nextNode()) {
            if (currentNode.getAttribute("data-guide") === "true") {
                this.tmpArray.push(currentNode);
                this.numberOfElements++;
            }
        }
    }

    arrangeOrder(array){
        for (var i=1;i<=this.numberOfElements;i++)
            for(var j=0;j<array.length;j++)
                if (array[j].getAttribute("data-guide-step")===i.toString()) //problem s porovnanim bolo treba tostring
                    this.elements.push(array[j]);
    }
}

class PopupDivs extends GuideInit{
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
        newP.appendChild(document.createTextNode(messages[this.idCounter-2]));        //verzia TS array
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

class StartGuide extends PopupDivs {
    constructor(messages) {
        super(messages);
    }
}

document.getElementById("guide").addEventListener("click",function (){
    var messages=[
        "Prvy element textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Druhy element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Treti element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Stvrty element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Piaty element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Siesty element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Siedmy element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Osmy element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as"
    ]
    new StartGuide(messages);
});
