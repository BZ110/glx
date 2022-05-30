import { txt } from "../def/htmltxt.js";

class _a extends txt {
    constructor(Name, Styles, Href) {
        super(Name, Styles);
        this.href = href;
        this.type = 'a';
    }
}

export function __a(Name, Styles) {
    return new _a(Name, Styles);
}