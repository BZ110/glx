import { style } from "../def/style.js";

export function backgroundColor(value) {
  return new style('background-color', value).en();
}