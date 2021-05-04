
describe("helloWorld", () => {
    it("returns hello world", () => {
        var actual = helloWorld();
        expect(actual).toBe("hello world");
    });
})

describe('DOM Testing for SEO Factors', function(){
    let Dom;
    beforeEach(function(){
        Dom = new DomManipulation();
    })

    it('Check for Title', function(){
        expect(Dom.init().title).not.toBe(null)
    })

})

describe('Moj pokus', function(){
    var Guide=new Guide();
    var h1=document.getElementsByTagName("h1")[0];
    it('Check for Title', function(){
        expect(h1).toBe("Pokus o vlastnú intro library")
    })
})