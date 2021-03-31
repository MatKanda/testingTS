export class StartGuide {
    constructor(private _msg: string) {

    }

    public print(msg: string): string {
        return this._msg + " " + msg;
    }
}
