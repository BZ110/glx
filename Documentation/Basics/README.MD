# The basics of GLX.
Here, you will learn the functions of GLX and example cases.
## Important functions.
These functions are the functions you will most likely use in GLX.
```js
import { start, $ } from "./pkg.js";
```

### `start();` function.
This function is the function that reads all code inside the objects and turns them into a readable HTML file.
- **This function is required for GLX to work.**
- **The first object is the *head*. *If NoTMP is false, leave this object empty.***
- **The seocnd object is the *body*.**
- **The third object is the *settings*. *This is optional.***

Example case:
```js
import { start, h1 } from "./pkg.js";
const returnedHTML = start({}, {
   0: h1("Hello, World!") // Header 1
}, {
   "NoTMP": false, // NoTMP: Boolean - Whether to include required HTML code. Typically used in for loops. Default is false.
   "nullify": true // nullify: Boolean - Whether to reset all memory after execution of function. Default is true.
});
```

### `$();` function.
*jQuery vibes?*

GLX does not have every HTML value, therefore, the creation of this function. This function can turn 2 values into an HTML value.
- **Please use the ```as``` keyword if you are using jQuery with this program.**

Example case:
```js
import { start, $ } from "./pkg.js"
const returnedHTML = start({
   0: $("title", "Document")
}, {
   0: $("h1", "GLX already has a function for header 1, so the $() function here isn't needed.")
});
```
