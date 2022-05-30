import { errorBase } from "../def/errs.js";
import { randomStr } from "../def/randomStr.js";

class script {
    constructor(str, varname) {
        if(!str)
            throw new Error(errorBase[2]);
        this.str = str;
        this.varname = varname;
        varname? this.varname = varname : this.varname = randomStr(10);
    }

}
export function __script(str) {
    return new script(str);
}