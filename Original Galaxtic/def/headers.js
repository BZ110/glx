import { n1 } from "../headers/h1.js";
import { n2 } from "../headers/h2.js";
import { n3 } from "../headers/h3.js";
import { n4 } from "../headers/h4.js";
import { n5 } from "../headers/h5.js";
import { n6 } from "../headers/h6.js";
import { __p } from "../headers/p.js";


export function h1(Name, Styles) {
    let h11 = n1(Name, Styles);
    Name = h11.name;
    Styles = h11.styles;
    if (!Styles) return `<h1>${Name}</h1>`;
    return `<h1 style="${Styles}">${Name}</h1>`;
}
export function h2(Name, Styles) {
    let h22 = n2(Name, Styles);
    Name = h22.name;
    Styles = h22.styles;
    if (!Styles) return `<h2>${Name}</h2>`;
    return `<h2 style="${Styles}">${Name}</h2>`;
}
export function h3(Name, Styles) {
    let h33 = n3(Name, Styles);
    Name = h33.name;
    Styles = h33.styles;
    if (!Styles) return `<h3>${Name}</h3>`;
    return `<h3 style="${Styles}">${Name}</h3>`;
}
export function h4(Name, Styles) {
    let h44 = n4(Name, Styles);
    Name = h44.name;
    Styles = h44.styles;
    if (!Styles) return `<h4>${Name}</h4>`;
    return `<h4 style="${Styles}">${Name}</h4>`;
}
export function h5(Name, Styles) {
    let h55 = n5(Name, Styles);
    Name = h55.name;
    Styles = h55.styles;
    if (!Styles) return `<h5>${Name}</h5>`;
    return `<h5 style="${Styles}">${Name}</h5>`;
}
export function h6(Name, Styles) {
    let h66 = n6(Name, Styles);
    Name = h66.name;
    Styles = h66.styles;
    if (!Styles) return `<h6>${Name}</h6>`;
    return `<h6 style="${Styles}">${Name}</h6>`;
}

export function p(Name, Styles) {
    let p1 = __p(Name, Styles);
    Name = p1.name;
    Styles = p1.styles;
    if (!Styles) return `<p>${Name}</p>`;
    return `<p style="${Styles}">${Name}</p>`;
}