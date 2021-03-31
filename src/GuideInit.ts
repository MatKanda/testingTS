import {StartGuide} from "./start";


export class GuideInit {

    private _sg: StartGuide;

    constructor(private _foo: string = "FOO", private _bar: string = "BAR") {
        this._sg = new StartGuide("Niečo" + Math.random() * 10);
    }

    get foo(): string {
        return this._sg.print(this._foo);
    }

    get bar(): string {
        return this._bar;
    }
}
