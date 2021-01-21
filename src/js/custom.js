
// for(var i=0; i<document.getElementsByTagName("*").length;i++){
//     if(document.body.childNodes[i].getAttribute('data-guide')==="true")
//         console.log(document.body.childNodes[i]);
// }

// if(document.getElementById("menu2").getAttribute("data-guide")==="true")
//     console.log("yea");
// else
//     console.log("nope");

// console.log(document.body.children[2].children[0]);
// console.log(document.body.children[2].children[0].getAttributeNode("data-guide"));


//každy element kde budem aplikovať guide style musi mat ID alebo class inak s nim neviem pracovat (??)
//verzia s borderom
function guideV1() {
    var currentNode, ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);

    while (currentNode = ni.nextNode()) {
        if (currentNode.getAttribute("data-guide") === "true") {
            if (document.getElementById(currentNode.id)) {
                // console.log("id "+currentNode.id);
                setBorderStyleByID(currentNode.id);
            } else {
                var i = 0;
                while (document.getElementsByClassName(currentNode.className)[i]) {
                    // console.log("className "+document.getElementsByClassName(currentNode.className)[i]);
                    setBorderStyleByClassName(currentNode.className,i)
                    i++;
                }
            }
        }
    }
}

function guideV2(){
    var currentNode, ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);

    document.getElementById("body").style.opacity="0.5";
    while (currentNode = ni.nextNode()) {
        if (currentNode.getAttribute("data-guide") === "true") {
            if (document.getElementById(currentNode.id)) {
                document.getElementById(currentNode.id).style.cssText="opacity: 1; !important;";
            } else {
                var i = 0;
                while (document.getElementsByClassName(currentNode.className)[i]) {
                    document.getElementsByClassName(currentNode.className)[i].style.cssText="opacity: 1; !important;";
                    i++;
                }
            }
        }
    }

    while (currentNode = ni.nextNode()) {
        if (currentNode.getAttribute("data-guide") &&  currentNode.getAttribute("data-guide") === "true") {
            if (document.getElementById(currentNode.id)) {
                setBorderStyleByID(currentNode.id,borderColor(currentNode.getAttribute("data-guide-color")));
                // document.getElementById(currentNode.id).style.opacity="1";
            } else {
                var i = 0;
                while (document.getElementsByClassName(currentNode.className)[i]) {
                    setBorderStyleByClassName(currentNode.className,i,borderColor(currentNode.getAttribute("data-guide-color")));
                    console.log("current node "+currentNode.className[i].name);
                    i++;
                }
            }
        }
    }
}


function guideV3() {
    // document.getElementById("body").style.opacity="0.5";
    var currentNode, ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);

    // while (currentNode = ni.nextNode()) {
    //     if (currentNode.getAttribute("data-guide") === "true") {
    //         createPopupDiv(currentNode)
    //         break;
    //     }
    // }

    //hint ako urobit aby to šlo po jednom a preklikavalo sa to cez next a prev buttons
    //radšej prebehnut while a ulozit všetky elementy do pola odkial ich potom tahat cez indexy??? bolo by to jednoduche prehadzovanie poradia a lahsia praca ako vo while

    while (currentNode = ni.nextNode()) {
        if (currentNode.getAttribute("data-guide") === "true") {
            // setStyleForCurrentNode(currentNode,borderColor(currentNode.getAttribute("data-guide-color")));
            createPopupDiv(currentNode)
            console.log(currentNode.offsetWidth);
        }
    }
}
// document.getElementById("guide").addEventListener("click", guideV3);


var elements=[];
var popupDivs=[];
var currentElementsIndex;
var currentPopupDivsIndex;
var idCounter;
function guideInit(){
    var currentNode, ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);

    //clear arrays and variables in case of another start of Guide function
    while(elements.length > 0) {
        elements.pop();
    }
    while(popupDivs.length > 0) {
        popupDivs.pop();
    }
    currentElementsIndex=0;
    currentPopupDivsIndex=0;
    idCounter=1;
    while (currentNode = ni.nextNode()) {
        if (currentNode.getAttribute("data-guide") === "true") {
            elements.push(currentNode);
            createPopupDiv(elements[currentElementsIndex]);
            currentElementsIndex++;
        }
    }
    popupDivs[currentPopupDivsIndex].style.display="block";
}


function guideV4(){
    guideInit();


    console.log(elements);
    console.log(popupDivs);
}


document.getElementById("guide").addEventListener("click", guideV4);


function createPopupDiv(currentNode){
    var currentNodeOffsetTop=currentNode.offsetTop+currentNode.offsetHeight;
    var currentNodeOffsetLeft=currentNode.offsetLeft;

    const newDiv = document.createElement("div");
    newDiv.id="popupDiv"+idCounter;
    popupDivs.push(newDiv);
    idCounter++;
    console.log("newDiv id :"+newDiv.id);


    newDiv.style.display="none";
    newDiv.style.position="absolute";
    newDiv.style.borderRadius="20px";
    newDiv.style.top=currentNodeOffsetTop+'px';
    newDiv.style.left=currentNodeOffsetLeft+'px';
    newDiv.style.width="180px";
    newDiv.style.height="auto";
    newDiv.style.backgroundColor=currentNode.getAttribute("data-guide-color");


    // const newContent = document.createTextNode("Sem pride nejaky text");
    // newDiv.appendChild(newContent);

    const newP = document.createElement("p");
    newP.appendChild(document.createTextNode("Sem pride nejaky text"));
    newP.style.marginLeft="12px";
    newDiv.appendChild(newP);

    const nextButton = document.createElement("button");
    nextButton.appendChild(document.createTextNode("Next"));
    nextButton.style.marginLeft="35px";
    nextButton.style.display="inline-block";
    nextButton.style.borderRadius="50px";
    nextButton.addEventListener('click',nextWindow=>{
        if(currentPopupDivsIndex>=popupDivs.length-1) {
            alert("koniec");
            popupDivs[currentPopupDivsIndex++].style.display="none";
        }else {
            popupDivs[currentPopupDivsIndex++].style.display = "none";
            popupDivs[currentPopupDivsIndex].style.display = "block";
        }
        console.log("current div index "+currentPopupDivsIndex);
    });
    newDiv.appendChild(nextButton);

    const prevButton = document.createElement("button");
    prevButton.appendChild(document.createTextNode("Prev"));
    prevButton.style.marginLeft="15px";
    prevButton.style.borderRadius="50px";
    prevButton.addEventListener('click',prevWindow=>{
        if(currentPopupDivsIndex<1) {
            alert("koniec");
            popupDivs[currentPopupDivsIndex--].style.display="none";
        }else {
            popupDivs[currentPopupDivsIndex--].style.display = "none";
            popupDivs[currentPopupDivsIndex].style.display = "block";
        }
        console.log("current div index "+currentPopupDivsIndex);
    });
    newDiv.appendChild(prevButton);

    document.body.appendChild(newDiv);
}




function createDiv(top,left,nextNode){
    var div=document.createElement("div");
    div.style.zIndex="10";
    div.style.marginTop=top;
    div.style.marginLeft=left;
    div.style.width="10px";
    div.style.height="10px";
    div.style.backgroundColor="red";
}


function setBorderStyleByID(id,color){
    document.getElementById(id).style.borderStyle="solid";
    document.getElementById(id).style.borderWidth="3px";
    document.getElementById(id).style.borderColor=color;

}
function setBorderStyleByClassName(className,i,color) {
    document.getElementsByClassName(className)[i].style.borderStyle="solid";
    document.getElementsByClassName(className)[i].style.borderWidth="3px";
    document.getElementsByClassName(className)[i].style.borderColor=color;
}

function setStyleForCurrentNode(node,color){
    node.style.borderStyle = "solid";
    node.style.borderWidth = "3px";
    node.style.borderColor = color;
}

function borderColor(color){
    if(color==="green")
        return "yellow";
    else
        return "red";
}