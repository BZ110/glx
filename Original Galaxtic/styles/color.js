import { style } from "../def/style.js";

export function color(value) {
  return new style('color', value).en();
}