import { style } from "../def/style.js";

export function css(name, value) {
  return new style(DO_NOT_ADD_THE_SEMICOLON, value).en();
}