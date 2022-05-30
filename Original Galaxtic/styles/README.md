# Styles
Because... you need them?
## How do they work?
All styles are functions, seperated into different files.

## What is the file 'aot' for?
It's for errors, and more. It also exports all styles imported, than Galaxtic.js imports said files, soon to export them all in one place.

## An example of style code:
    import { style } from "../def/style.js";

    export function color(value) {
      return new style('color', value).en();
    }

## What is the class 'style' used for?
It simply gives us a readable css version of our style.

The en() inside the class just returns that readable version.
