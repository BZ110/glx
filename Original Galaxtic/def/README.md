# def
Needed files.

## What is the def file?
The def file contains classes, functions, etc that are needed to be used everywhere.

## What type of code in Galaxtic is needed everywhere?
For example, randomStr will give us a random string of characters starting with nc. This is for unnamed functions and buttons.

## An example of code needed to be used everywhere:
A simple constructor class for all of our headers, paragraphs, hyperlinks, etc.

    import { errorBase } from "./errs.js";
    export class txt {
        constructor(Name, Styles) {
            this.styles = Styles;
            this.name = Name;
            this.type = '';
            if (!this.name)
            throw new Error(errorBase[2]);
        }
    }

