// glx.js (GALAXTIC.Javascript)
/*
Syntax Example
  h1(
  "Hello, World!",
  styles(sole object)
)
*/
const randint = (minimum, maxiumum) => {
   Math.floor(Math.random() * maxiumum) + minimum
}
const Random10 = (agrt) => {
  if(!agrt) agrt = 10
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  var upLetters = letters.toUpperCase();
  var result = letters[Math.floor(Math.random() * letters.length)];
  for(let i = 0;i < agrt; i++){
    switch(randint(1, 3)){
      case 1:
        result += letters[Math.floor(Math.random() * letters.length)]
        break;
      case 2:
        result += upLetters[Math.floor(Math.random() * letters.length)]
        break;
      case 3:
        result += Math.floor(Math.random() * 10)
        break;
      default: result += letters[Math.floor(Math.random() * letters.length)]
    }
  }
  return result;
}
var Variables = {};
const errorPref = '\n\n     glx.js:'
const errorBase = {
  0: errorPref + " Expected Object in:",
  1: errorPref + " Inavlid Arguments.\n",
  2: errorPref + " Missing Key Inputs.\n",
}
let Medium = {
  0: `<!DOCTYPE html>\n<html lang="en">\n`,
  1: "<head>\n",
  2: "",
  3: "",
  4: "</head>\n",
  5: "<body>\n",
  6: "\n",
  7: "</body>\n",
  8: "</html>\n",
}
export function vr(name, value){
  if(!name) throw new Error(errorBase[2]);
  if(!value) return Variables[name];
  Variables[name] = value;
}
export function startstyle(str){
  if(!str) throw new Error(errorBase[2]);
  Medium[2] = Medium[2] + str;
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
  const length = Object.keys(OBJ).length - 1;
  const lengthhd = Object.keys(HEAD).length - 1;
  if(length == -1) throw new Error(errorBase[0] + "start()\n");
  if(HEAD) for(let i = 0; i < lengthhd; i++){
    eval(`${HEAD[i]}`);
  }
  for(let i = 0; i < length; i++){
    try {
      eval(`${OBJ[i]}`);
    } catch(err) {
      console.error(errorPref + " " + err);
    }

  }

  var Return = '';
  for(let i = 0; i < Object.keys(Medium).length; i++){
    Return += Medium[i];
  }
  return Return;
}
export function font(str){
  let OBJ = str;
  if(!OBJ) throw new Error(errorBase[2]);
  return "font-family: " + OBJ + ";";
}
export function fontSize(str){
  let OBJ = str;
  if(!OBJ) throw new Error(errorBase[2]);
  return "font-size: " + OBJ + ";";
}
export function fontColor(str){
  let OBJ = str;
  if(!OBJ) throw new Error(errorBase[2]);
  return "color: " + OBJ + ";";
}
export function backgroundColor(str){
  let OBJ = str;
  if(!OBJ) throw new Error(errorBase[2]);
  return "background-color: " + OBJ + ";";
}
export function color(str){
  let OBJ = str;
  if(!OBJ) throw new Error(errorBase[2]);
  return "color: " + OBJ + ";";
}
export function display(str){
  let OBJ = str;
  if(!OBJ) throw new Error(errorBase[2]);
  return "display: " + OBJ + ";";
}
export function pos(str, Sole_Object){
  let OBJ = str;
  let padding = Sole_Object
  if(!OBJ) throw new Error(errorBase[2]);
  if(!padding) return "text-align: " + OBJ + ";";
  return "padding-" + padding["type"] + ": " + padding["value"] + ";\n text-align: " + OBJ + ";";
}
export function posPad(Sole_Object){
  let padding = Sole_Object
  if(!padding) throw new Error(errorBase[2]);
  return "padding-" + padding["type"] + ": " + padding["value"] + ";";
}
export function styles(Sole_Object){
  let OBJ = Sole_Object;
  if(!OBJ) throw new Error(errorBase[2]);
  const length = Object.keys(OBJ).length - 1;
  if(length == -1) throw new Error(errorBase[0] + "styles()\n");
  let combStyle = '\n';
  for(let i = 0; i <= length; i++){
    combStyle = combStyle + ` ${OBJ[i]}` + "\n";
  }
  return combStyle.substring(0, combStyle.length - 1);
}
export function a(Name, hyperlink, styles){
  if(!Name) throw new Error(errorBase[2]);
  if(!hyperlink) throw new Error(errorBase[2]);
  if(!styles)  Medium[6] = Medium[6] + `<a href="${hyperlink}">${Name}</a>\n`;
  if(styles)   Medium[6] = Medium[6] + `<a style="${styles}" href="${hyperlink}">${Name}</a>\n`;
}
export function p(Name, styles){
  let Item = Name;

  if(!Item) throw new Error(errorBase[2]);
  if(!styles)  Medium[6] = Medium[6] + `<p>${Item}</p>\n`;
  if(styles)   Medium[6] = Medium[6] + `<p style="${styles}">${Item}</p>\n`;
}
export function h1(Name, styles){
  let Item = Name;

  if(!Item) throw new Error(errorBase[2]);
  if(!styles)  Medium[6] = Medium[6] + `<h1>${Item}</h1>\n`;
  if(styles)   Medium[6] = Medium[6] + `<h1 style="${styles}">${Item}</h1>\n`;
}
export function h2(Name, styles){
  let Item = Name;

  if(!Item) throw new Error(errorBase[2]);
  if(!styles)  Medium[6] = Medium[6] + `<h2>${Item}</h2>\n`;
  if(styles)   Medium[6] = Medium[6] + `<h2 style="${styles}">${Item}</h2>\n`;
}
export function h3(Name, styles){
  let Item = Name;

  if(!Item) throw new Error(errorBase[2]);
  if(!styles)  Medium[6] = Medium[6] + `<h3>${Item}</h3>\n`;
  if(styles)   Medium[6] = Medium[6] + `<h3 style="${styles}">${Item}</h3>\n`;
}
export function h4(Name, styles){
  let Item = Name;

  if(!Item) throw new Error(errorBase[2]);
  if(!styles)  Medium[6] = Medium[6] + `<h4>${Item}</h4>\n`;
  if(styles)   Medium[6] = Medium[6] + `<h4 style="${styles}">${Item}</h4>\n`;
}
export function h5(Name, styles){
  let Item = Name;
  if(!Item) throw new Error(errorBase[2]);
  if(!styles)  Medium[6] = Medium[6] + `<h5>${Item}</h5>\n`;
  if(styles)   Medium[6] = Medium[6] + `<h5 style="${styles}">${Item}</h5>\n`;
}
export function h6(Name, styles){
  let Item = Name;
  if(!Item) throw new Error(errorBase[2]);
  if(!styles)  Medium[6] = Medium[6] + `<h6>${Item}</h6>\n`;
  if(styles)   Medium[6] = Medium[6] + `<h6 style="${styles}">${Item}</h6>\n`;
}

export function alrt(str){
  if(!str) throw new Error(errorBase[2]);
  if(styles)   Medium[6] = Medium[6] + `<script>alert("${str}")</script>\n`;
}
export function scrpt(Callback, VariableName){
  let code =     Callback;
  let varname =  VariableName
  if(!varname) varname = Random10();
  const codeStr = (code).toString();
  if(!codeStr) throw new Error(errorBase[2]);
  Medium[6] = Medium[6] + `<script>const ${varname} = ${codeStr};${varname}();</script>\n`;
}
export function inpt(VariableName, Input){
  let varname = VariableName
  if(!varname)  throw new Error(errorBase[2]);
  if(!Input)    throw new Error(errorBase[2]);
                Medium[6] = Medium[6] + `<script>const ${varname} = '${Input}';</script>\n`;
}
export function btn(Title, Callback, styles){
  let OBJ = Title;
  let codeStr = Callback;
  let varname = Random10(50);
  if(!OBJ) throw new Error(errorBase[2]);
  if(!codeStr) if(!styles)  Medium[6] = Medium[6] + `<button>${OBJ}</button>\n`;
  if(!codeStr) if(styles)   Medium[6] = Medium[6] + `<button style="${styles}>${OBJ}</button>\n`;
  if(codeStr) if(!styles)   Medium[6] = Medium[6] + `<script>const ${varname} = ${codeStr};</script>\n<button onclick="${varname}()">${OBJ}</button>\n`;
  if(codeStr) if(styles)    Medium[6] = Medium[6] + `<script>const ${varname} = ${codeStr};</script>\n<button onclick="${varname}()" style="${styles}">${OBJ}</button>\n`;
}
export function margin(str){
  if(!str) throw new Error(errorBase[2]);
  return `margin: ${str};`;
}
export function border(str){
  if(!str) throw new Error(errorBase[2]);
  return `border: ${str};`;
}
export function width(str){
  if(!str) throw new Error(errorBase[2]);
  return `width: ${str};`;
}
export function outline_style(str){
  if(!str) throw new Error(errorBase[2]);
  return `outline-style: ${str};`;
}
export function outline_color(str){
  if(!str) throw new Error(errorBase[2]);
  return `outline-color: ${str};`;
}
export function outline_width(str){
  if(!str) throw new Error(errorBase[2]);
  return `outline-width: ${str};`;
}
export function outline_offset(str){
  if(!str) throw new Error(errorBase[2]);
  return `outline-offset: ${str};`;
}
export function outline_radius(str){
  if(!str) throw new Error(errorBase[2]);
  return `outline-radius: ${str};`;
}
export function outline(str){
  if(!str) throw new Error(errorBase[2]);
  return `outline: ${str};`;
}
export function border_radius(str){
  if(!str) throw new Error(errorBase[2]);
  return `border-radius: ${str};`;
}
export function border_style(str){
  if(!str) throw new Error(errorBase[2]);
  return `border-style: ${str};`;
}
export function border_color(str){
  if(!str) throw new Error(errorBase[2]);
  return `border-color: ${str};`;
}
export function border_width(str){
  if(!str) throw new Error(errorBase[2]);
  return `border-width: ${str};`;
}
export function border_top(str){
  if(!str) throw new Error(errorBase[2]);
  return `border-top: ${str};`;
}
export function border_right(str){
  if(!str) throw new Error(errorBase[2]);
  return `border-right: ${str};`;
}
export function border_bottom(str){
  if(!str) throw new Error(errorBase[2]);
  return `border-bottom: ${str};`;
}
export function border_left(str){
  if(!str) throw new Error(errorBase[2]);
  return `border-left: ${str};`;
}
export function border_image(str){
  if(!str) throw new Error(errorBase[2]);
  return `border-image: ${str};`;
}
export function css(DO_NOT_ADD_THE_SEMICOLON, value){
  let str = DO_NOT_ADD_THE_SEMICOLON;
  if(!str) throw new Error(errorBase[2]);
  if(!value) throw new Error(errorBase[2]);
  return `${str}: ${value};\n`;
}
export function html(str){
  if(!str) throw new Error(errorBase[2]);
  Medium[6] = Medium[6] + `${str}\n`;
}
export function head(str){
  if(!str) throw new Error(errorBase[2]);
  return Medium[2] = Medium[2] + `${str}\n`;
}
export function nullify(){
  Medium[0] = `<!DOCTYPE html>\n<html lang="en">\n`,
  Medium[1] = "<head>\n",
  Medium[2] = "",
  Medium[3] = "",
  Medium[4] = "</head>\n",
  Medium[5] = "<body>\n",
  Medium[6] = "\n",
  Medium[7] = "</body>\n",
  Medium[8] = "</html>\n",
  Variables = {};

}
