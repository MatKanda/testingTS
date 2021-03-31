import {GuideInit} from "../dist/libka";


describe("Basic function testing", () => {

    beforeEach(() => {

    });

    it("check foo value", () => {
        const guide = new GuideInit();
        console.log(guide.foo);
        expect(guide.foo).toBeDefined();
        expect(guide.foo).toContain("Niečo");
    });

    it("check bar value", () => {
        const guide = new GuideInit();
        console.log(guide.bar);
        expect(guide.bar).toEqual("bar");
    });

})
