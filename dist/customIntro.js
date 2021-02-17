var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var elements = [];
var popupDivs = [];
var numberOfElements;
var currentPopupDivsIndex;
var idCounter;
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
var GuideInit = /** @class */ (function () {
    function GuideInit() {
        this.tmpArray = [];
        this.elements = [];
        this.popupDivs = [];
        this.numberOfElements = 0;
        this.currentPopupDivsIndex = 0;
        this.idCounter = 1;
        this.clearAllValues();
        this.searchCode();
        this.arrangeOrder(this.tmpArray);
    }
    GuideInit.prototype.clearAllValues = function () {
        while (this.elements.length > 0) {
            this.elements.pop();
        }
        while (this.popupDivs.length > 0) {
            this.popupDivs.pop();
        }
        this.numberOfElements = 0;
        this.currentPopupDivsIndex = 0;
        this.idCounter = 1;
    };
    GuideInit.prototype.searchCode = function () {
        var currentNode, ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);
        while (currentNode = ni.nextNode()) {
            if (currentNode.getAttribute("data-guide") === "true") {
                this.tmpArray.push(currentNode);
                this.numberOfElements++;
            }
        }
    };
    GuideInit.prototype.arrangeOrder = function (array) {
        for (var i = 1; i <= this.numberOfElements; i++)
            for (var j = 0; j < array.length; j++)
                if (array[j].getAttribute("data-guide-step") === i.toString()) //problem s porovnanim bolo treba tostring
                    this.elements.push(array[j]);
    };
    return GuideInit;
}());
var PopupDivs = /** @class */ (function (_super) {
    __extends(PopupDivs, _super);
    function PopupDivs(messages) {
        var _this = _super.call(this) || this;
        _this.createAllPopupDivs(messages);
        _this.popupDivs[_this.currentPopupDivsIndex].style.display = "block";
        return _this;
    }
    PopupDivs.prototype.createAllPopupDivs = function (messages) {
        for (var i = 0; i < this.numberOfElements; i++)
            this.createPopupDiv(this.elements[i], messages);
    };
    PopupDivs.prototype.createPopupDiv = function (currentNode, messages) {
        var newDiv = document.createElement("div"); //as htmldivelement lebo potrebujem použivat htmldivelement atributy
        newDiv.id = "popupDiv" + this.idCounter;
        this.popupDivs.push(newDiv);
        this.idCounter++;
        var newP = document.createElement("p");
        // newP.appendChild(document.createTextNode(currentNode.getAttribute("data-guide-message")));       //verzia custom data
        newP.appendChild(document.createTextNode(messages[this.idCounter - 2])); //verzia TS array
        newP.style.marginLeft = "12px";
        newDiv.appendChild(newP);
        this.createNextButton(newDiv);
        // Riešil som to aby som pri next a prev buttons pri popupdiv nepreliezol cez okraj. Pri dalsom kodeni som prišiel na to
        // ze pri odstraneni prev buttonu pri prvom okne sa o to nemusim starat, stači pridat kontrolu na last popupdiv
        this.createPrevButton(newDiv);
        document.body.appendChild(newDiv);
        this.setStyle(newDiv, currentNode);
    };
    PopupDivs.prototype.createNextButton = function (newDiv) {
        var _this = this;
        var nextButton = document.createElement("button");
        if (newDiv.id === "popupDiv" + this.numberOfElements)
            nextButton.appendChild(document.createTextNode("Finish"));
        else
            nextButton.appendChild(document.createTextNode("Next"));
        nextButton.style.marginLeft = "35px";
        nextButton.style.display = "inline-block";
        nextButton.style.borderRadius = "50px";
        nextButton.addEventListener("click", function (nextWindow) {
            if (_this.currentPopupDivsIndex >= _this.popupDivs.length - 1) {
                alert("koniec");
                _this.popupDivs[_this.currentPopupDivsIndex++].style.display = "none";
            }
            else {
                _this.popupDivs[_this.currentPopupDivsIndex++].style.display = "none";
                _this.popupDivs[_this.currentPopupDivsIndex].style.display = "block";
            }
        });
        newDiv.appendChild(nextButton);
    };
    PopupDivs.prototype.createPrevButton = function (newDiv) {
        var _this = this;
        if (newDiv.id !== "popupDiv1") { //aby prve okno nemalo previous button
            var prevButton = document.createElement("button");
            prevButton.appendChild(document.createTextNode("Prev"));
            prevButton.style.marginLeft = "15px";
            prevButton.style.borderRadius = "50px";
            prevButton.addEventListener('click', function (prevWindow) {
                if (_this.currentPopupDivsIndex < 1) {
                    alert("koniec");
                    _this.popupDivs[_this.currentPopupDivsIndex--].style.display = "none";
                }
                else {
                    _this.popupDivs[_this.currentPopupDivsIndex--].style.display = "none";
                    _this.popupDivs[_this.currentPopupDivsIndex].style.display = "block";
                }
            });
            newDiv.appendChild(prevButton);
        }
    };
    PopupDivs.prototype.setStyle = function (div, currentNode) {
        var position = currentNode.getAttribute("data-guide-position");
        console.log(position);
        // div.style.display="none";    //problem v ziskani pozicie kedze som nastavil najprv display none a potom zistoval poziciu
        div.style.position = "absolute";
        div.style.borderRadius = "20px";
        div.style.maxWidth = "20%";
        div.style.width = "auto";
        div.style.height = "auto";
        div.style.backgroundColor = "lightcoral";
        div.style.zIndex = "200";
        div.style.opacity = "1";
        console.log("div Height " + div.offsetHeight);
        if (position === "U") {
            div.style.top = currentNode.offsetTop - div.offsetHeight + 'px';
            div.style.left = currentNode.offsetLeft + 'px';
        }
        else if (position === "R") {
            div.style.top = currentNode.offsetTop - currentNode.offsetHeight / 2 + 'px';
            div.style.left = currentNode.offsetLeft + currentNode.offsetWidth + 'px';
        }
        else if (position === "L") {
            div.style.top = currentNode.offsetTop - currentNode.offsetHeight / 2 + 'px';
            div.style.left = currentNode.offsetLeft - div.offsetWidth + 'px';
        }
        else {
            div.style.top = currentNode.offsetTop + currentNode.offsetHeight + 'px';
            div.style.left = currentNode.offsetLeft + 'px';
        }
        div.style.display = "none";
    };
    return PopupDivs;
}(GuideInit));
var StartGuide = /** @class */ (function (_super) {
    __extends(StartGuide, _super);
    function StartGuide(messages) {
        return _super.call(this, messages) || this;
    }
    return StartGuide;
}(PopupDivs));
document.getElementById("guide").addEventListener("click", function () {
    var messages = [
        "Prvy element textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Druhy element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Treti element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Stvrty element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Piaty element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Siesty element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Siedmy element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as",
        "Osmy element nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as"
    ];
    new StartGuide(messages);
});
//# sourceMappingURL=customIntro.js.map