import { txt } from "../def/htmltxt.js";
class _h3 extends txt {
    constructor(Name, Styles) {
        super(Name, Styles);
        this.type = 'h3';
    }
}
export function n3(Name, Styles) {
    return new _h3(Name, Styles);
}