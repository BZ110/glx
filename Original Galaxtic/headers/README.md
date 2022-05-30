# Headers
ALL OF THE HEADERS!!!!

## Why did you seperate headers and paragraph into a different file?
They require 2 arguments and the same 'txt' class from the def folder.

## Why is 'p' in the headers folder?
Because p uses the exact same 2 arguments as the headers, so I can just simply put them together without any problems.

## Example of header code: (p)

    import { txt } from "../def/htmltxt.js";

    class _p extends txt {
        constructor(Name, Styles) {
            super(Name, Styles);
            this.type = 'p';
        }
    }
    export function __p(Name, Styles) {
        return new _p(Name, Styles);
    }

You could say the class here is meaningless, in my opinion, I'm able to change how ALL of the headers work in one file if there is a bug.
