// This is the index that will house all available classes, functions, etc to the user. Well, not house, just import & export :p
// The compiler will also be here. So I will have to put a medium variable here.
import color from "./utils/styles/color.js"
import pos from "./utils/styles/pos.js"
import font from "./utils/styles/font.js"
import { h1, h2, h3, h4, h5, h6, p, cushtml, css, styles, div, btn } from "./utils/def.js"
import txt from "./utils/txt.js"
const Def = {
    0: "<!DOCTYPE html>",
    1: `<html lang="en">`,
    2: "<head>",
    3: "",
    4: "</head>",
    5: "<body>",
    6: "",
    7: "</body>",
    8: "</html>",
}

var Medium = {
    0: "<!DOCTYPE html>",
    1: `<html lang="en">`,
    2: "<head>",
    3: "",
    4: "</head>",
    5: "<body>", //indenting to make it look like i know what im doing ( i dont ), update: fuck indenting
    6: "",
    7: "</body>",
    8: "</html>",
}

// Now that all my variables are imported, it is time for me to create the compiler (SOS)

/** The start for GLX.
 * @param {Object={}} Head - A valid object for the head.
 * @param {Object} Body - A valid object for the body.
 * @param {Object={}} Settings - A valud object for the settings.
 */
// Im super lazy aren't I? These parameters are very much annoying.

export const start = (Head, Body, Settings) => {
    let g = '';
    let x = '';

    Settings? Settings: Settings = {
        "NoTMP": false,
        "nullify": true
    }
    Head = {}? Head: Settings["NoTMP"] = true;

    // NOTMP
    if(Settings["NoTMP"]){
        Medium[0] = ""
        Medium[1] = ""
        Medium[2] = ""
        Medium[4] = ""
        Medium[5] = ""
        Medium[7] = ""
        Medium[8] = ""
    } else {
        for(let i = 0; i < Object.keys(Head).length; i++){
            g += "" + Head[i] + "\n"
        }
    }

    for(let i = 0; i < Object.keys(Body).length; i++){
        x += "" + Body[i] + "\n"
    } // the other part of the compiler is in the def.js and txt.js, look for it yourself, I'm not linking that shit.

    Medium[3] = g;
    Medium[6] = x;

    // compile now.
    let s = '';
    for(let i = 0; i < Object.keys(Medium).length; i++){
        s += Medium[i] + "\n";
    }
    Medium = s; // im so lazy, LMFAO.
    if(Settings["nullify"]){
        let r = {};
        r = Medium;
        Medium = Def;
        return r;
    } else { // lazy
        return Medium;
    }
}

export function nullify(){
    Medium = Def;
}

export function $(Type, Item, Args){
    !Args ? Args = [] : Args; 
    let p = '\n';
    if(typeof item == "object"){
        for(let i = 0; i < Object.keys(Item).length; i++){
            p+=Item[i] + "\n";
        }
    } else {
        p = Item;
    }
    return new txt(Type, p, Args).reg();
}

export function cPT(Item){
    return Item;
}

export {
    h1, h2, h3, h4, h5, h6, p, cushtml, css, styles, div, btn, // HTML
    pos, color, font // CSS
};
