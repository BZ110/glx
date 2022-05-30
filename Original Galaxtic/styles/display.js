import { style } from "../def/style.js";

export function display(value) {
  return new style('display', value).en();
}