import { txt } from "../def/htmltxt.js";
class _h1 extends txt {
    constructor(Name, Styles) {
        super(Name, Styles);
        this.type = 'h1';
    }
}
export function n1(Name, Styles) {
    return new _h1(Name, Styles);
}