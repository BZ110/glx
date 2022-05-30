import { errorBase, errorPref } from "./def/errs.js";
import { inpt } from "./def/inpt.js";
import { ObjectLength } from "./def/objL.js";
var Variables = {};
let Medium = {
    0: `<!-- https://github.com/BasharW10/glx -->\n<!DOCTYPE html>\n<html lang="en">\n`,
    1: "<head>\n",
    2: "",
    3: "",
    4: "</head>\n",
    5: "<body>\n",
    6: "\n",
    7: "</body>\n",
    8: "</html>\n",
};

export function vr(name, value){
    if(!name) throw new Error(errorBase[2]);
    if(!value) return Variables[name];
    Variables[name] = value;
    return '';
}

export function startstyle(str){
    if(!str) throw new Error(errorBase[2]);
    Medium[2] = Medium[2] + str;
    return '';
}

export function styles(Sole_Object){
    let OBJ = Sole_Object;
    if(!OBJ) throw new Error(errorBase[2]);
    const length = ObjectLength(OBJ) - 1;
    if(length == -1) throw new Error(errorBase[0] + "styles()\n");
    let combStyle = '\n';
    for(let i = 0; i <= length; i++){
      combStyle = combStyle + ` ${OBJ[i]}` + "\n";
    }
    return combStyle.substring(0, combStyle.length - 1);
}

export function start(HEAD, OBJ, options){
    if(!options) options = {
      "noTemplate": false
    }
    if(!HEAD) if(!options["noTemplate"]) throw new Error(errorBase[2]);
    if(options["noTemplate"]){
      Medium[0] = "";
      Medium[1] = "";
      Medium[4] = "";
      Medium[5] = "";
      Medium[7] = "";
      Medium[8] = "";
    }
    if(!OBJ) throw new Error(errorBase[2]);
    const length = ObjectLength(OBJ);
    const lengthhd = ObjectLength(HEAD);
    if(length == -1) throw new Error(errorBase[0] + "start()\n");
    if(HEAD) for(let i = 0; i < lengthhd; i++){
      Medium[2] += HEAD[i];
    }
    for(let i = 0; i < length; i++){
      try {
        Medium[6] += OBJ[i] + '\n';
    } catch(err) {
        console.error(errorPref + " " + err);
      }
  
    }
    var Return = '';
    console.log("GLX: Done, compiling to HTML...");
    for(let g = 0; g < ObjectLength(Medium); g++){
      Return += `${Medium[g]}`;
    }
    return Return;
}

export function html(str){
    if(!str) throw new Error(errorBase[2]);
    Medium[6] = Medium[6] + `${str}\n`;
    return '';
}
  export function head(str){
    if(!str) throw new Error(errorBase[2]);
    Medium[2] = Medium[2] + `${str}\n`;
    return '';
}

export function nullify(){
    let strd = {
      0: `<!-- https://github.com/BasharW10/glx -->\n<!DOCTYPE html>\n<html lang="en">\n`,
      1: "<head>\n",
      2: "",
      3: "",
      4: "</head>\n",
      5: "<body>\n",
      6: "\n",
      7: "</body>\n",
      8: "</html>\n",
    }
    Medium = strd;
    Variables = {};
}

import {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p
} from "./def/headers.js";

import {
    btn
} from "./interact/button.js";

import {
    alrt,
    scrpt,
    a
} from "./def/intr.js";

import {
    css,
    font,
    backgroundColor,
    fontSize,
    color,
    pos,
    posPad,
    display
} from "./styles/aot.js";

export {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    btn,
    alrt,
    scrpt,
    p,
    a,
    css,
    font,
    backgroundColor,
    fontSize,
    color,
    pos,
    posPad,
    display,
    inpt
}