export class style {
    constructor(style, value){
        this.style = style;
        this.value = value;
    }
    en() {
        return `${this.style}: ${this.value};\n`;
    }
}