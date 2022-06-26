/** Create a HTML tag.
    * @param {String} type - The type of HTML tag. ex. h1
    * @param {String} item - The item inside the HTML tag. ex. Hello, World.
    * @param {Array=[]} args - Other arguments. ex. [{"styles": "color: white;"}, {"onclick": "function()"}]
*/

export default class txt {
    constructor(type, item, args){
        this.type = type,
        this.item = item,
        this.args = args;
    }

    reg(){

        let R = ["<", "", ">", "", "</", "", ">"]
        // Add the variables.
        R[1] = this.type + " ";
        R[5] = this.type;
        R[3] = this.item;
        for(let i = 0; i < this.args.length; i++){
            R[1] = R[1] + Object.keys(this.args[i]) + "=" + '"' + this.args[i][Object.keys(this.args[i])] + '" '
        }

        // Finalize the R variable.
        let g = '';
        for(let i = 0; i < R.length; i++){
            g += R[i];
        }
        return g;
    }

}