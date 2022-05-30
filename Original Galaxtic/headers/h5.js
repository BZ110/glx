import { txt } from "../def/htmltxt.js";
class _h5 extends txt {
    constructor(Name, Styles) {
        super(Name, Styles);
        this.type = 'h5';
    }
}
export function n5(Name, Styles) {
    return new _h5(Name, Styles);
}