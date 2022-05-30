import { txt } from "../def/htmltxt.js";
class _h4 extends txt {
    constructor(Name, Styles) {
        super(Name, Styles);
        this.type = 'h4';
    }
}
export function n4(Name, Styles) {
    return new _h4(Name, Styles);
}