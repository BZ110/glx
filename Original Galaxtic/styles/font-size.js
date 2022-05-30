import { style } from "../def/style.js";

export function fontSize(value) {
  return new style('font-size', value).en();
}