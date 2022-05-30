import { errorBase } from "../def/errs.js";
import { randomStr } from "../def/randomStr.js";

export function btn(Title, Callback, styles){
    let OBJ = Title;
    let codeStr = (Callback).toString();
    let varname = randomStr(50);
    if(!OBJ)
        throw new Error(errorBase[2]);
    if(!codeStr) if(!styles) return `<button>${OBJ}</button>\n`;
    if(!codeStr) if(styles)  return `<button style="${_btn.styles}>${OBJ}</button>\n`;
    if(codeStr) if(!styles)  return `<script>const ${varname} = ${codeStr};</script>\n<button onclick="${varname}()">${OBJ}</button>\n`;
    if(codeStr) if(styles)   return `<script>const ${varname} = ${codeStr};</script>\n<button onclick="${varname}()" style="${_btn.styles}">${OBJ}</button>\n`;
  }