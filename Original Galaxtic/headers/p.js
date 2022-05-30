import { txt } from "../def/htmltxt.js";

class _p extends txt {
    constructor(Name, Styles) {
        super(Name, Styles);
        this.type = 'p';
    }
}
export function __p(Name, Styles) {
    return new _p(Name, Styles);
}