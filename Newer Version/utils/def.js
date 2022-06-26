
// This file is specifically for the built-in html functions.
// The old GLX was not as organized as this. I'm lucky.


import txt from "./txt.js";
export function btn(ButtonName, Args){
    !Args ? Args = [] : Args;
    return new txt("btn", ButtonName, Args).reg();
}

export function div(Items, Args){ // no touchie this works...
    !Args ? Args = [] : Args;
    let g = '\n';
    for(let i = 0; i < Object.keys(Items).length; i++){

        g+=Items[i] + "\n"; // returns the items in the txt format. described in line 4 in txt.js.
    }
    return new txt("div", g, Args).reg() // Explains the divider. badum tshhhh...
}

export function h1(Contents, Args){
    !Args ? Args = [] : Args;
    return new txt("h1", Contents, Args).reg()
}
export function h2(Contents, Args){
    !Args ? Args = [] : Args;
    return new txt("h2", Contents, Args).reg()
}
export function h3(Contents, Args){
    !Args ? Args = [] : Args;
    return new txt("h3", Contents, Args).reg() // There are 6 headers and one paragraph.
}
export function h4(Contents, Args){
    !Args ? Args = [] : Args;
    return new txt("h4", Contents, Args).reg()
}
export function h5(Contents, Args){
    !Args ? Args = [] : Args;
    return new txt("h5", Contents, Args).reg()
}
export function h6(Contents, Args){
    !Args ? Args = [] : Args;
    return new txt("h6", Contents, Args).reg()
}
export function p(Contents, Args){
    !Args ? Args = [] : Args;
    return new txt("p", Contents, Args).reg()
}
export function styles(ObjectStyles){
    // ALL THE STYLES!!!!
    // in style folder... (lazy)
    let p = '\n';
    for(let i = 0; i < Object.keys(ObjectStyles).length; i++){
        p+=ObjectStyles[i] + "\n";
    }
    return p;
}
export function css(StyleName, StyleValue){
    return `${StyleName}: ${StyleValue};`;
}

export function cushtml(Type, Item, Args){
    // This is where the real coding beings. not rly
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