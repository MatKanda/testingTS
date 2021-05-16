var elements: HTMLElement[] = [];
//var popupDivs=[];
var popupDivs: HTMLElement[] = [];
var numberOfElements:number;
var currentPopupDivsIndex:number;
var idCounter:number;
var bodyElement:HTMLElement;
var allHtmlElements:HTMLElement[] = [];

var inputArray=["prva message","druha message","tretia message"];

function guide(){
    guideInit(inputArray);
}

document.getElementById("guide").addEventListener("click", guide);


function guideInit(input){
    var currentNode, ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);

    //clear arrays and variables in case of another start of Guide function
    while(elements.length > 0) {
        elements.pop();
    }
    while(popupDivs.length > 0) {
        popupDivs.pop();
    }
    numberOfElements=0;
    currentPopupDivsIndex=0;
    idCounter=1;

    var search:boolean=false;
    var tmpArray=[];
    while (currentNode = ni.nextNode()) {
        if (currentNode.getAttribute("data-guide") === "true") {
            tmpArray.push(currentNode);
            numberOfElements++;
        }

        if (search===true){
            allHtmlElements.push(currentNode);
            currentNode.setAttribute("data-backGround",getComputedStyle(currentNode).getPropertyValue('backGround'));
            currentNode.setAttribute("data-color",getComputedStyle(currentNode).getPropertyValue('color'));
            currentNode.style.background="rgba(255,255,255,0)";
            currentNode.style.color="#000000";
        }

        if (currentNode.tagName==="BODY"){
            bodyElement=currentNode;
            currentNode.style.background = "rgba(0, 0, 0, 0.85)";
            search=true;
        }

    }

    arrangeOrder(tmpArray);
    for(var i=0;i<numberOfElements;i++)
        createPopupDiv(elements[i],input);

    popupDivs[currentPopupDivsIndex].style.display="block";
    popupDivs[currentPopupDivsIndex].style.opacity="0";
    //
    $( popupDivs[currentPopupDivsIndex]).animate({
        opacity:1
    }, 500 );
    animationShow(elements[currentPopupDivsIndex]);

}

function arrangeOrder(array:HTMLElement[]){
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


function createPopupDiv(currentNode,inputMessage){
    var newDiv=document.createElement("div") as HTMLDivElement;   //as htmldivelement lebo potrebujem použivat htmldivelement atributy
    newDiv.id="popupDiv"+idCounter;
    popupDivs.push(newDiv);
    idCounter++;

    var exitButton=document.createElement("button") as HTMLButtonElement;
    exitButton.appendChild(document.createTextNode("X"));
    exitButton.id="exitButton"+(idCounter-1);
    exitButton.addEventListener("click",function (){finishGuide();});
    newDiv.appendChild(exitButton);

    var newP=document.createElement("p") as HTMLParagraphElement;
     if(inputMessage[idCounter-2]!==null && inputMessage[idCounter-2]!==undefined)
        newP.appendChild(document.createTextNode(inputMessage[idCounter-2]));
     else
         newP.appendChild(document.createTextNode("NO MESSAGE WRITTEN"));
    //newP.appendChild(document.createTextNode(currentNode.getAttribute("data-guide-message")));
    newP.style.marginLeft="12px";
    newP.style.marginRight="12px";
    newP.style.marginTop="0";
    newP.id="p"+(idCounter-1);
    newDiv.appendChild(newP);

    var nextButton=document.createElement("button") as HTMLButtonElement;

    if(newDiv.id==="popupDiv"+numberOfElements)
        nextButton.appendChild(document.createTextNode("Finish"));
    else
        nextButton.appendChild(document.createTextNode("Next"));

    nextButton.style.marginLeft="17px";
    nextButton.style.display="inline-block";
    nextButton.style.borderRadius="50px";
    nextButton.id="nextButton"+(idCounter-1);

    nextButton.addEventListener("click",nextWindow=>{
        if(currentPopupDivsIndex>=popupDivs.length-1) {
            // alert("koniec");
            finishGuide();
        }else {
            // popupDivs[currentPopupDivsIndex++].style.display = "none";  //


            
            $( popupDivs[currentPopupDivsIndex]).animate({
                opacity:0.0
            }, 500 );



            animationHide(elements[currentPopupDivsIndex]);
            (<HTMLInputElement> document.getElementById("nextButton"+(currentPopupDivsIndex+1))).disabled = true;
            (<HTMLInputElement> document.getElementById("prevButton"+(currentPopupDivsIndex+2))).disabled = false;
            animationShow(elements[currentPopupDivsIndex+1]);


            setTimeout(()=>{
                if(currentPopupDivsIndex===0)
                    popupDivs[0].style.display = "none";
                else
                    popupDivs[currentPopupDivsIndex-1].style.display = "none";
                },500);


            currentPopupDivsIndex++;

            popupDivs[currentPopupDivsIndex].style.display = "block";
            popupDivs[currentPopupDivsIndex].style.opacity = "0";

            
            $( popupDivs[currentPopupDivsIndex]).animate({
                opacity:1
            }, 500 );

            // popupDivs[currentPopupDivsIndex].style.display = "block"; //
        }
    });

    newDiv.appendChild(nextButton);

    // Riešil som to aby som pri next a prev buttons pri popupdiv nepreliezol cez okraj. Pri dalsom kodeni som prišiel na to
    // ze pri odstraneni prev buttonu pri prvom okne sa o to nemusim starat, stači pridat kontrolu na last popupdiv


    if (newDiv.id!=="popupDiv1"){           //aby prve okno nemalo previous button
        var prevButton = document.createElement("button");
        prevButton.appendChild(document.createTextNode("Prev"));
        prevButton.style.marginLeft="5px";
        prevButton.style.borderRadius="50px";   
        prevButton.id="prevButton"+(idCounter-1);

        prevButton.addEventListener('click',prevWindow=>{
            if(currentPopupDivsIndex<1) {
                alert("koniec");
                popupDivs[currentPopupDivsIndex--].style.display="none";
            }else {
                // popupDivs[currentPopupDivsIndex--].style.display = "none";   //
                // popupDivs[currentPopupDivsIndex].style.display = "block";   //

                
                $( popupDivs[currentPopupDivsIndex]).animate({
                    opacity:0.0
                }, 500 );


                animationShow(elements[currentPopupDivsIndex-1]);
                (<HTMLInputElement> document.getElementById("nextButton"+(currentPopupDivsIndex))).disabled = false;
                (<HTMLInputElement> document.getElementById("prevButton"+(currentPopupDivsIndex+1))).disabled = true;
                animationHide(elements[currentPopupDivsIndex]);


                setTimeout(()=>{popupDivs[currentPopupDivsIndex+1].style.display = "none";},500);


                currentPopupDivsIndex--;

                popupDivs[currentPopupDivsIndex].style.display = "block";
                popupDivs[currentPopupDivsIndex].style.opacity = "0";
                
                $( popupDivs[currentPopupDivsIndex]).animate({
                    opacity:1
                }, 500 );
            }
        });
        newDiv.appendChild(prevButton);
    }

    var progress=document.createElement("progress") as HTMLProgressElement;
    progress.style.marginLeft="5px";
    progress.value=idCounter-2;
    progress.max=elements.length;
    newDiv.appendChild(progress);

    document.body.appendChild(newDiv);

    setStyle(newDiv,currentNode,exitButton);
}

// function parseColor(input) {
//     if (input.substr(0,1)=="#") {
//         var collen=(input.length-1)/3;
//         var fact=[17,1,0.062272][collen-1];
//         return [
//             Math.round(parseInt(input.substr(1,collen),16)*fact),
//             Math.round(parseInt(input.substr(1+collen,collen),16)*fact),
//             Math.round(parseInt(input.substr(1+2*collen,collen),16)*fact)
//         ];
//     }
//     else return input.split("(")[1].split(")")[0].split(",").map(x=>+x);
// }


function  animationShow(element:HTMLElement){
    // var first=parseColor(element.getAttribute("color"))[0];
    // var second=parseColor(element.getAttribute("color"))[1];
    // var third=parseColor(element.getAttribute("color"))[2];
    // console.log("atribut" ,first," ",second," ",third);

    // var start = [40,40,40,0], end=[255,255,255,1];
    var start = [40,40,40,0], end=[255,255,255,1];
    //
    $(element).animate( {'aaa': 1},{
        duration:500,step: function(now){
            //
            $(this).css('background-color', 'rgba('+                                //@ts-ignore
                parseInt(start[0] + (end[0]-start[0]) * now) + ',' +            //@ts-ignore
                parseInt(start[1] + (end[1]-start[1]) * now) + ',' +            //@ts-ignore
                parseInt(start[2] + (end[2]-start[2]) * now) + ')'
            )                                                                     //
        }});
}


function animationHide(element){
    // var first=parseColor(element.getAttribute("color"))[0];
    // var second=parseColor(element.getAttribute("color"))[1];
    // var third=parseColor(element.getAttribute("color"))[2];
    //
    // // var start = [40,40,40,0], end=[255,255,255,1];
    var start = [40,40,40,0], end=[255,255,255,1];

    //
    $(element).animate( {'aaa': 0},{
        duration:500,step: function(now){
            //@ts-ignore
            $(this).css('background-color', 'rgba('+                                //@ts-ignore
                parseInt(start[0] + (end[0]-start[0]) * now) + ',' +            //@ts-ignore
                parseInt(start[1] + (end[1]-start[1]) * now) + ',' +            //@ts-ignore
                parseInt(start[2] + (end[2]-start[2]) * now) + ')'
            )                                                                     //
        }});
}

function setStyle(div,currentNode,exitButton){
    var position=currentNode.getAttribute("data-guide-position");
    // console.log(position);
    // div.style.display="none";    //problem v ziskani pozicie kedze som nastavil najprv display none a potom zistoval poziciu
    div.style.position="absolute";
    div.style.borderRadius="20px";
    div.style.maxWidth="20%";
    div.style.minWidth="300px";
    div.style.width="auto";
    div.style.height="auto";
    div.style.backgroundColor="white";
    div.style.zIndex="200";
    div.style.opacity="1";


    exitButton.style.background="#ffffff"
    exitButton.style.border="none";
    exitButton.style.color="red";
    exitButton.style.position="relative";

    if(position==="U"){
        div.style.top=currentNode.offsetTop-div.offsetHeight-4+'px';
        div.style.left=currentNode.offsetLeft+'px';
        exitButton.style.paddingTop="2%";
        exitButton.style.left=div.offsetWidth-exitButton.offsetWidth+'px';
    }
    else if(position==="R"){
        div.style.top=currentNode.offsetTop-currentNode.offsetHeight/2+'px';
        div.style.left=currentNode.offsetLeft+currentNode.offsetWidth+1+'px';
        exitButton.style.paddingTop="2%";
        exitButton.style.left=div.offsetWidth-exitButton.offsetWidth+'px';
    }
    else if(position==="L"){
        div.style.top=currentNode.offsetTop-currentNode.offsetHeight/2+'px';
        div.style.left=currentNode.offsetLeft-div.offsetWidth-1+'px';
        exitButton.style.paddingTop="2%";
        exitButton.style.left=div.width+'px';
    }
    else{
        div.style.top=currentNode.offsetTop+currentNode.offsetHeight+1+'px';
        div.style.left=currentNode.offsetLeft+'px';
        exitButton.style.paddingTop="2%";
        exitButton.style.left=div.offsetWidth-exitButton.offsetWidth+'px';
    }


    div.style.display="none";
}

function finishGuide(){
     setTimeout(()=>{
        popupDivs.forEach(div=>{div.style.display="none"});
        bodyElement.style.background = "rgba(255, 255, 255, 0)";
        allHtmlElements.forEach(function (element){
            element.style.background=element.getAttribute("data-background");
            element.style.color=element.getAttribute("data-color");
            element.style.opacity="1";
            element.removeAttribute("data-background");
            element.removeAttribute("data-color");
        });
         },400);

    // popupDivs.forEach(div=>{div.style.display="none"});
    // bodyElement.style.background = "rgba(255, 255, 255, 0)";
    //     allHtmlElements.forEach(function (element){
    //     element.style.background=element.getAttribute("data-background");
    //     element.style.color=element.getAttribute("data-color");
    //     element.style.opacity="1";
    //     // element.removeAttribute("data-background");
    //     // element.removeAttribute("data-color");
    // });
}


//
// class GuideInit{
//     tmpArray=[];
//     protected elements=[];
//     protected popupDivs=[];
//     protected numberOfElements:number=0;
//     protected currentPopupDivsIndex:number=0;
//     protected idCounter:number=1;
//
//     constructor() {
//         this.clearAllValues();
//         this.searchCode();
//         this.arrangeOrder(this.tmpArray);
//     }
//
//
//     clearAllValues(){
//         while(this.elements.length > 0) {
//         this.elements.pop();
//         }
//         while(this.popupDivs.length > 0) {
//             this.popupDivs.pop();
//         }
//         this.numberOfElements=0;
//         this.currentPopupDivsIndex=0;
//         this.idCounter=1;
//     }
//
//     searchCode(){
//         var currentNode, ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);
//         while (currentNode = ni.nextNode()) {
//             if (currentNode.getAttribute("data-guide") === "true") {
//                 this.tmpArray.push(currentNode);
//                 this.numberOfElements++;
//             }
//         }
//     }
//
//     arrangeOrder(array){
//         for (var i=1;i<=this.numberOfElements;i++)
//             for(var j=0;j<array.length;j++)
//                 if (array[j].getAttribute("data-guide-step")===i.toString()) //problem s porovnanim bolo treba tostring
//                     this.elements.push(array[j]);
//     }
// }
//
// class PopupDivs extends GuideInit{
//     constructor(messages) {
//         super();
//         this.createAllPopupDivs(messages);
//         this.popupDivs[this.currentPopupDivsIndex].style.display="block";
//
//     }
//     createAllPopupDivs(messages) {
//         for (var i = 0; i < this.numberOfElements; i++)
//             this.popupDiv(this.elements[i],messages);
//     }
//
//     popupDiv(currentNode,messages){
//         var newDiv=document.createElement("div") as HTMLDivElement;   //as htmldivelement lebo potrebujem použivat htmldivelement atributy
//         newDiv.id="popupDiv"+this.idCounter;
//         this.popupDivs.push(newDiv);
//         this.idCounter++;
//
//         var newP=document.createElement("p") as HTMLParagraphElement;
//         // newP.appendChild(document.createTextNode(currentNode.getAttribute("data-guide-message")));       //verzia custom data
//         newP.appendChild(document.createTextNode(messages[this.idCounter-2]));        //verzia TS array
//         newP.style.marginLeft="12px";
//         newDiv.appendChild(newP);
//
//         this.createNextButton(newDiv);
//
//         // Riešil som to aby som pri next a prev buttons pri popupdiv nepreliezol cez okraj. Pri dalsom kodeni som prišiel na to
//         // ze pri odstraneni prev buttonu pri prvom okne sa o to nemusim starat, stači pridat kontrolu na last popupdiv
//
//         this.createPrevButton(newDiv);
//
//         document.body.appendChild(newDiv);
//
//         this.setStyle(newDiv,currentNode);
//     }
//
//     createNextButton(newDiv){
//         var nextButton=document.createElement("button") as HTMLButtonElement;
//
//         if(newDiv.id==="popupDiv"+this.numberOfElements)
//             nextButton.appendChild(document.createTextNode("Finish"));
//         else
//             nextButton.appendChild(document.createTextNode("Next"));
//
//         nextButton.style.marginLeft="35px";
//         nextButton.style.display="inline-block";
//         nextButton.style.borderRadius="50px";
//         nextButton.addEventListener("click",nextWindow=>{
//             if(this.currentPopupDivsIndex>=this.popupDivs.length-1) {
//                 alert("koniec");
//                 this.popupDivs[this.currentPopupDivsIndex++].style.display="none";
//             }else {
//                 this.popupDivs[this.currentPopupDivsIndex++].style.display = "none";
//                 this.popupDivs[this.currentPopupDivsIndex].style.display = "block";
//             }
//         });
//         newDiv.appendChild(nextButton);
//     }
//
//     createPrevButton(newDiv){
//         if (newDiv.id!=="popupDiv1"){           //aby prve okno nemalo previous button
//             var prevButton = document.createElement("button");
//             prevButton.appendChild(document.createTextNode("Prev"));
//             prevButton.style.marginLeft="15px";
//             prevButton.style.borderRadius="50px";
//             prevButton.addEventListener('click',prevWindow=>{
//                 if(this.currentPopupDivsIndex<1) {
//                     alert("koniec");
//                     this.popupDivs[this.currentPopupDivsIndex--].style.display="none";
//                 }else {
//                     this.popupDivs[this.currentPopupDivsIndex--].style.display = "none";
//                     this.popupDivs[this.currentPopupDivsIndex].style.display = "block";
//                 }
//             });
//             newDiv.appendChild(prevButton);
//         }
//     }
//
//     setStyle(div,currentNode){
//         var position=currentNode.getAttribute("data-guide-position");
//         console.log(position);
//         // div.style.display="none";    //problem v ziskani pozicie kedze som nastavil najprv display none a potom zistoval poziciu
//         div.style.position="absolute";
//         div.style.borderRadius="20px";
//         div.style.maxWidth="20%";
//         div.style.width="auto";
//         div.style.height="auto";
//         div.style.backgroundColor="lightcoral";
//         div.style.zIndex="200";
//         div.style.opacity="1";
//
//         console.log("div Height "+div.offsetHeight);
//
//         if(position==="U"){
//             div.style.top=currentNode.offsetTop-div.offsetHeight+'px';
//             div.style.left=currentNode.offsetLeft+'px';
//         }
//         else if(position==="R"){
//             div.style.top=currentNode.offsetTop-currentNode.offsetHeight/2+'px';
//             div.style.left=currentNode.offsetLeft+currentNode.offsetWidth+'px';
//         }
//         else if(position==="L"){
//             div.style.top=currentNode.offsetTop-currentNode.offsetHeight/2+'px';
//             div.style.left=currentNode.offsetLeft-div.offsetWidth+'px';
//         }
//         else{
//             div.style.top=currentNode.offsetTop+currentNode.offsetHeight+'px';
//             div.style.left=currentNode.offsetLeft+'px';
//         }
//
//         div.style.display="none";
//     }
// }
//
// class StartGuide extends PopupDivs {
//     constructor(messages) {
//         super(messages);
//     }
// }
//
// document.getElementById("guide").addEventListener("click",function (){
//     var messages=[
//         "Prvy element textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
//         "Druhy element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
//         "Treti element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
//         "Stvrty element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
//         "Piaty element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
//         "Siesty element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
//         "Siedmy element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
//         "Osmy element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as"
//     ]
//     new StartGuide(messages);
// });