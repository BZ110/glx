import { style } from "../def/style.js";

export function font(value) {
  return new style('font-family', value).en();
}