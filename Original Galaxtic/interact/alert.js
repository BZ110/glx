import { txt } from "../def/htmltxt.js";
class _alrt extends txt {
    constructor(Name) {
        super(Name);
        this.type = 'alrt';
    }
}
export function __alrt(Name) {
    return new _alrt(Name);
}