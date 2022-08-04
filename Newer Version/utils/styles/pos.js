/** The Position for your style.
 * @param {String} value - a definite value, usually right, center, left, bottom, and justify.
*/
export default function pos(value){
    if(value = "middle") value = "center"
    return 'text-align: ' + value + ';';
}
