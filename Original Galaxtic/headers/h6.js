import { txt } from "../def/htmltxt.js";
class _h6 extends txt {
    constructor(Name, Styles) {
        super(Name, Styles);
        this.type = 'h6';
    }
}
export function n6(Name, Styles) {
    return new _h6(Name, Styles);
}