export class GuideInit{
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