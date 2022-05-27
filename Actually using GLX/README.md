# Using GLX in a real life example.
Suppose you have an array of items, like a transcript, GLX can compile that transcript to HTML code.

## Step by Step:

## Note: Please declare glx functions first.

    import {

        start,
        vr,
        styles,
        font,
        color,
        p,
        html,
        head,
        nullify

    } from "../compile.js";
    import {
        writeFileSync
    } from "fs";
    // All functions used.

## First, we declare the information that we have.

    const info = {
        name: "Transcript for xXNoobSlayerXx",
        info: [
            "xXNoobSlayerXx: Hello!",
            "User: Hi!",
            "xXNoobSlayerXx: How are you?",
            "User: Fine, thanks! How are you?",
            "xXNoobSlayerXx: I'm good, thanks!",
            "User: How was your day?",
            "xXNoobSlayerXx: I had McDonald's for lunch today.",
            "User: Must've tasted good."
        ]
    }

## We then, declare the for loop.

    let transcript = '';
    for(let i = 0; i < info.info.length; i++) {
        transcript += await start({}, {
            0: vr("stylses", styles({
                0: font("Arial, sans-serif"),
                1: color("black"),
            })),
            1: p(info.info[i], vr("stylses")),
        }, {
            "noTemplate": true,
        })
        nullify();
    }
    
### nullify() what does it do?
If you were to type the 'start' function twice, it would CONTINUE from the old start function.
nullify() erases that completely.

### "noTemplate" What does it do? Do I need it?
noTemplate erases the head, and the body, including <!DOCTYPE HTML> tags.
The whole point of it is to do stuff like for loops without the code continously adding the body and head tags.
#### You don't need it.



## Next thing we do is to declare another start() for the HTML.

    let endhtml = start({
        0: head("<title>" + info.name + "</title>"),
    }, {
        0: html(transcript)
    })
    nullify();

    writeFileSync("./transcript.html", endhtml);

If you're done using Galaxtic, you don't need the end nullify(), I just personally put it there due to habit.
