import { font } from "../styles/font.js";
import { backgroundColor } from "./b_c.js";
import { color } from "./color.js";
import { fontSize } from "./font-size.js";
import { css } from "./css.js";
import { display } from './display.js'
function pos(str, Sole_Object){
    let OBJ = str;
    let padding = Sole_Object
    if(!OBJ) throw new Error(errorBase[2]);
    if(!padding) return "text-align: " + OBJ + ";";
    return "padding-" + padding["type"] + ": " + padding["value"] + ";\n text-align: " + OBJ + ";";
  }
function posPad(Sole_Object){
    let padding = Sole_Object
    if(!padding) throw new Error(errorBase[2]);
    return "padding-" + padding["type"] + ": " + padding["value"] + ";";
  }
export {
    css,
    font,
    backgroundColor,
    fontSize,
    color,
    pos,
    posPad,
    display
}