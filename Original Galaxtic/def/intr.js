import { __alrt } from "../interact/alert.js";
import { __a } from "../interact/hyperlink.js";
import { __script } from "../interact/script.js";
import { errorBase } from "./errs.js";
export function a(Name, Styles, Href) {
    let a = __a(Name, Styles, Href);
    Name = a.name;
    Styles = a.styles;
    Href = a.href;
    if(!Href) throw new Error(errorBase[2]);
    if (!Styles) return `<a href="${Href}">${Name}</a>`;
    return `<a href="${Href}" style="${Styles}">${Name}</a>`;
}
export function alrt(str) {
    str = __alrt(str).Name;
    if (!str)
        throw new Error(errorBase[2]);
    return `<script>alert("${str}")</script>`;
}
export function scrpt(Callback, Optional_Varname){
   let scrptt = __script(Callback, Optional_Varname);
    Callback = scrptt.Callback;
    Optional_Varname = scrptt.Optional_Varname;
    return `<script>const ${Optional_Varname} = ${Callback};${Optional_Varname}();</script>`;
}