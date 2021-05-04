function DomManipulation(){}
DomManipulation.prototype.init = function(){
    title = document.createElement('title');
    var meta = document.createElement('meta');
    var img = document.createElement('img');
    title = "What is DOM Testing?";
    meta.setAttribute('name', 'keywords');
    meta.content = "DOM testing, Jasmine, SEO";
    document.getElementsByTagName('head')[0].appendChild(meta);
    img.src = 'https://www.testim.io/wp-content/uploads/2019/11/testim-logo.svg';
    return {
        title, meta, img
    }
}
