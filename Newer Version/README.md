# GLX release 2.0 containing better arguments and less bloat.

## An example on how to use it.

```js
    import { start, $, color, pos, styles, h1, h2, css, font } from "./index.js"
    import { writeFileSync } from "fs";

    // lets try a random password generator. (example of using my module)

    const defStyle = styles({
        0: color("white"),
        1: pos("middle"),
        2: font("Arial, sans-serif"),
    })

    const randPass = (amountOfChars = 10) => {
        let inp = "abcdefghijklmnopqrstuvqxyz";
        let inp1 = "1234567890";
        let inp2 = inp.toUpperCase();
        inp += inp1 + inp2;
        let r = '';
        for(let i = 0; i < amountOfChars; i++){
            // maths
            r += inp[Math.floor(Math.random() * inp.length)]
        }
        return r
    }
    writeFileSync("index.html", start({
        0: $("title", "A website."),
        1: $("style", `body {

    ${css("background-color", "#141414")}

    }`)

    }, {
        0: h1("Hello, World", [{"style": defStyle}]),
        1: h2("Your random password is: " + randPass(10), [{"style": defStyle}, {"style": "padding-top: 1em;"}])
    }))
```
You can see defining arguments is much easier than the original GLX, this will also soon be used inside a discord bot that I will open source soon. :)

This also works with express, since it returns HTML, you can simply do:
```js
res.send(start({0: $("title", "My Cool Title")}, {0: h1("Hello, World!")}))
```
