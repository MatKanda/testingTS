
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



//prva funkčna verzia (bez rozdelenia poradia steps a message ako inputu)
var elements=[];
var popupDivs=[];
var numberOfElements;
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
    numberOfElements=0;
    currentPopupDivsIndex=0;
    idCounter=1;

    while (currentNode = ni.nextNode()) {
        if (currentNode.getAttribute("data-guide") === "true") {
            elements.push(currentNode);
            createPopupDiv(elements[numberOfElements]);
            numberOfElements++;
        }
    }
    popupDivs[currentPopupDivsIndex].style.display="block";
}


function guideV4(){
    guideInit();

}


// document.getElementById("guide").addEventListener("click", guideV4);


function createPopupDiv(currentNode){
    const newDiv = document.createElement("div");
    newDiv.id="popupDiv"+idCounter;
    popupDivs.push(newDiv);
    idCounter++;
    // console.log("newDiv id :"+newDiv.id);


    const newP = document.createElement("p");
    // newP.appendChild(document.createTextNode("Sem pride nejaky textaaaaaaa aaaaa asasasa asas a sas a sas asasa as as "));
    newP.appendChild(document.createTextNode(currentNode.getAttribute("data-guide-message")));
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
    });
    newDiv.appendChild(prevButton);

    document.body.appendChild(newDiv);

    setStyle(newDiv,currentNode);
}

function setStyle(div,currentNode){
    var position=currentNode.getAttribute("data-guide-position");
    console.log(position);
    // div.style.display="none";
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

function guideInitV2(){
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

    var tmpArray=[];
    while (currentNode = ni.nextNode()) {
        if (currentNode.getAttribute("data-guide") === "true") {
            tmpArray.push(currentNode);
            numberOfElements++;
        }
    }
    arrangeOrder(tmpArray);
    for(var i=0;i<numberOfElements;i++)
        createPopupDiv(elements[i]);

    popupDivs[currentPopupDivsIndex].style.display="block";

    // document.getElementById("body").style.backgroundColor="#3e4444";
}

function arrangeOrder(array){
    console.log(array);
    for (var i=1;i<=numberOfElements;i++)
        for(var j=0;j<array.length;j++)
            if (array[j].getAttribute("data-guide-step")===i.toString())
                elements.push(array[j]);
    console.log(elements);
}


function guideV6(){
    // document.getElementById("guide").disabled="true";
    guideInitV2();
    console.log(popupDivs);
}

document.getElementById("guide").addEventListener("click", function (){
    // document.getElementById("body").style.background="rgba(0,0,0,0.7)";
    // document.getElementById("lele").style.background="rgba(255,255,255,1)";


    //The only problem with this solution is IE<10 support
    var start = [0, 0, 0,0.8], end=[255,255,255,1];
    $('#lele').animate({'aaa': 1}, {
        duration:1500,step: function(now){
            $(this).css('background-color', 'rgba('+
                parseInt(start[0] + (end[0]-start[0]) * now) + ',' +
                parseInt(start[1] + (end[1]-start[1]) * now) + ',' +
                parseInt(start[2] + (end[2]-start[2]) * now) + ')'
            )
        }, complete: function(){$(this).css('aaa', 0)}})
});
