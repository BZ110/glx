import { errorBase } from "./errs.js";
export class txt {
    constructor(Name, Styles) {
        this.styles = Styles;
        this.name = Name;
        this.type = '';
        if (!this.name)
        throw new Error(errorBase[2]);
    }
}