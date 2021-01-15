
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

//funguje na vyhladanie data a setnutie borderu
function guideV3() {
    // document.getElementById("body").style.opacity="0.5";
    var currentNode, ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);
    //vyskusat settimeout-obalit while
    while (currentNode = ni.nextNode()) {
        if (currentNode.getAttribute("data-guide") === "true") {
            setStyleForCurrentNode(currentNode,borderColor(currentNode.getAttribute("data-guide-color")));
            // currentNode.style.opacity="1";
            // createDiv(currentNode.getBoundingClientRect().top,currentNode.getBoundingClientRect().left);
            console.log("name :"+currentNode.tagName,"top :"+currentNode.getBoundingClientRect().top , "left :"+currentNode.getBoundingClientRect().left);
        }
    }
}

// document.getElementById("body").style.opacity="0.5";
// document.getElementById("rightSide").style.cssText="opacity: 1; !important;";

// document.getElementById("guide").addEventListener("click", guideV1);
// document.getElementById("guide").addEventListener("click", guideV2);
document.getElementById("guide").addEventListener("click", guideV3);    //funguje na vyhladanie data a setnutie borderu

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