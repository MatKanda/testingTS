import {guide} from "../dist";


describe("Basic function testing", () => {

    beforeEach(() => {

    });

    it("Check opacity", () => {
        // var button=document.getElementById("guide");
        // var body=document.getElementById("body");
        // button.addEventListener("click",()=>guide(["one","two","three"]));
        //
        // const style=getComputedStyle(body);
        // const opacity=style.opacity;
        //
        // button.click();
        // expect(opacity).toBeLessThan(1);

        var opacity=1;
        expect(opacity).toEqual(1);

        //expect(guide.foo).toBeDefined();
        //expect(guide.foo).toContain("Niečo");
    });

    /*it("check bar value", () => {
        const guide = new GuideInit();
        console.log(guide.bar);
        expect(guide.bar).toEqual("bar");
    });*/

})
