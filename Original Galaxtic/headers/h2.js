import { txt } from "../def/htmltxt.js";
class _h2 extends txt {
    constructor(Name, Styles) {
        super(Name, Styles);
        this.type = 'h2';
    }
}
export function n2(Name, Styles) {
    return new _h2(Name, Styles);
}