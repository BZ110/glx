# Creating a HTML file with GLX.
## Some things to note:
- The `start();` function returns the HTML.
- GLX does not contain every single HTML value.
- We will be creating a password generator with the express package (Node.js).

## import . as ".";
Importing all functions before using them. I recommend using VSCode while working with GLX as it will automatically import all functions you will use.
```js
import { start, $, styles, font, color, h1, h2, pos } from "./pkg.js"; // pkg.js is just an example.
import express from "express"; // This is a package.
```

## Creating the express file.
### Working with GLX.
It is required for GLX to work to add a `start();` function.
```js
return res.send(start());
```
Once we have added the start function, we can begin.
We will add a head. This will contain the title of our document. Since our document is a simple password generator, we can simply call it "Pass Generator".
```js
return res.send(start({
  0: $("title", "Pass Generator"),
  1: $("style", "body { background-color: #141414; }")
}));
```
---
The `$()` function will automatically convert the 2 values that you have specified into an HTML value. Example case:
```js
// From this:
return $("Name", "Value");
// or
return $("Name", {
  0: $("Name2", "Value"),
  1: $("Name3", "Value")
})
```
```html
<!-- To this: -->
<Name>Value</Name>
<!-- Or: -->
<Name>
  <Name2>Value</Name2>
  <Name3>Value</Name3>
</Name>
```

*In future updates, I hope to add automatic indenting.*

---
### The body.
Now, it is time to work on our stylish body! The first thing we will do is simply punch in the value "Hello, World!" to see if our program is working.
```js
return res.send(start({
  0: $("title", "Pass Generator"),
  1: $("style", "body { background-color: #141414; " + font("Arial, sans-serif") + " }")
}, {
  0: h1("Hello, World!", [
    {"style": styles({
      0: color("white") 
    })}
  ])
}));
```

*You should be left with something like this. (Without the indenting)*

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Pass Generator</title>
    <style>body { background-color: #141414; font-family: Arial, sans-serif; }</style>

  </head>
  <body>
    <h1 style="
    color: white;
    " >Hello, World!</h1>

  </body>
</html>
```

---

### Creating the actual generator.
Since GLX accepts values, we can simply create a function that will give us our random password.
```js
const mainStyle = styles({
    0: color("white"), // You can create styles just like so.
    1: pos("center")
})
res.send(start({
  0: $("title", "Pass Generator"),
  1: $("style", "body { background-color: #141414; " + font("Arial, sans-serif") + " }")
}, {
  0: h1("Your random password is:", [
      {"style": mainStyle}]),
  1: h2((() => { 
  // ^^ Here, we are declaring a function, to make sure it doesn't return the insides of the function, we will wrap it in parenthesis.
      const x = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let result = '';
      for(let i = 0; i < 10; i++){
          result += x[Math.floor(Math.random() * x.length)];
      }
      return result;
  })(), [ // << Here, we finish the function, so we add "()" to initialize the function and to return our random password.
      {"style": mainStyle},
      {"style": "padding-top: 1em;"}
  ])
}));
```
*You should be left with HTML that looks like this:*
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Pass Generator</title>
    <style>body { background-color: #141414; font-family: Arial, sans-serif; }</style>

  </head>
  <body>
    <h1 style="
    color: white;
    text-align: center;
    " >Your random password is:</h1>
    <h2 style="
    color: white;
    text-align: center;
    " style="padding-top: 1em;" >AAAAAAAAAA</h2>

  </body>
</html>
```

---

#### Comparing HTML to JavaScript, HTML does look much easier and smaller to read. When using GLX, the point of GLX is to not need to manually type out HTML. Benefits:
- Making HTML using GLX is much easier, since IntelliSense can autocomplete most of your work.
- HTML is a pain to make in JavaScript, having to concat and declare so many strings, GLX does that all for you.
```js
// I would rather type this:
const HTML = start({}, { 0: h1("Hello, World") });

// Than this!
const HTML = `
<html lang="en">
  <head></head>
  <body>
    <h1>Hello, World</h1>
  </body>
</html>
`;
```
