import { start, h1, p, styles, vr, font, color, pos, posPad, a, btn, alrt, h6, h5, h4, h3, h2, fontSize, scrpt, inpt, css, html, head } from './glx.js';
import fs from 'fs';


var code = new Buffer(fs.readFileSync("./compile.js", {
                           encoding: "utf-8",
                            flag: "r"
                        })).toString("base64")
var codeW = new Buffer(fs.readFileSync("./example.js", {
                            encoding: "utf-8",
                             flag: "r"
                         })).toString("base64")

const HelloWorld = 'Hello, World!';




const es = start({ // HEAD
    0: head(`<title>Galaxtic.js</title>`) // add the title
}, { // BODY
    0: vr("styleTitle", styles({ // Create a style using "vr", stands for variable.
        0: font("Arial, sans-serif"), // Set the font
        1: color("#bd10e0"), // color and font-color are the same.
        2: pos('left', {
            type: "left",
            value: 20
        })
    })),
    1: h1("Galaxtic.js", vr("styleTitle")), // Create a h1 using "h1", with the style "styleTitle"
    2: p("This website was created in Javascript, no HTML. Crazy, right? Heres the code!", styles({ // Create a p using "p", with a custom style.
        0: pos("left", { // Position the p to the left.
            // pos is text-align, accepts left, right, center, justify.
            // the sole object is posPad, you don't need to add this.
            type: 'left', // left, right, center, justify
            value: "25px" // value is the value of the position.
        }),
        1: posPad({ // Position the p to the left, with a padding of 25px.
            // posPad is padding, accepts top, bottom, left, right.
            type: 'bottom',
            value: "25px"
        }),
        2: font("Arial, sans-serif") // Set the font
    })),
    3: p("[Nice URL](https://google.com) doesn't work, but we have hyperlinks!", styles({
        0: color("black"),
        1: font("sans-serif")
    })),
    4: vr("style", styles({
        0: font("Arial, sans-serif"),
        1: color("black"),
        2: posPad({
            type: "left",
            value: "10px"
        }),
        3: pos("center"), // here is an example of not adding the sole object.
    })),
    5: a("What a cool hyperlink!", "https://google.com", vr("style")), // Create a hyperlink using "a", with a custom style.
    6: btn("This is a cool button.", () => { // Create a button using "btn", with a custom function.
        // button code will be put in the html, treat this code as if you're running it inside the HTML file.
        // it will be run when the button is pressed.
        // functions will not work. the only way you can import a function in here is to use "inpt" function.
        console.log("Buttons are cool!");
        alert("Awesome!"); 
    }, vr("style")),
    7: alrt  ("You just entered my super cool webpage!"), // all alrt functions will execute when the webpage is loaded.
    10: h6   ("Lorem Ipsum!", vr("style")),
    11: h5   ("Lorem Ipsum!", vr("style")),
    12: h4   ("Lorem Ipsum!", vr("style")),
    13: h3   ("Lorem Ipsum!", vr("style")),
    14: h2   ("Lorem Ipsum!", vr("style")),
    15: h1   ("Lorem Ipsum!", vr("style")),
    16: h2   ("Lorem Ipsum!", vr("style")),
    17: h3   ("Lorem Ipsum!", vr("style")), // Look, I was bored, okay?
    18: h4   ("Lorem Ipsum!", vr("style")),
    19: h5   ("Lorem Ipsum!", vr("style")),
    20: h6   ("Lorem Ipsum!", vr("style")),
    21: h5   ("Lorem Ipsum!", vr("style")),
    22: h4   ("Lorem Ipsum!", vr("style")),
    23: h3   ("Lorem Ipsum!", vr("style")),
    24: h2   ("Lorem Ipsum!", vr("style")),
    25: h1   ("Lorem Ipsum!", vr("style")),
    26: inpt ("SuperCoolFunc", code), // create a function using "inpt", with a custom name and the variable you want to input.
    // now, you can use "SuperCoolFunc" in your script tags and button code, and it will be executed.
    27: inpt ("codeW", codeW),
    28: scrpt(() => {
        console.log("About Galaxtic.js: It makes HTML easier.")
        console.log("Heres the code for Galaxtic.js:", SuperCoolFunc); // this is an example of using a variable you imported.
        console.log("Heres the code for this website:", codeW); // this is an example of using a variable you imported.
    }),
    29: html(`<h1 style="font-family: Arial, sans-serif;">Some cool manual HTML!</h1>`), // create a manual HTML using "html"
    30: vr("A better style!", styles({
        0: font("Arial, sans-serif"),
        1: color("black"),
        2: posPad({
            type: "left",
            value: 10
        }),
        3: pos("center"),
        4: css("background-color", "red") // add a manual css style using "css"
    })),
    31: inpt("HelloWorldz", HelloWorld), // repetition is allowed.
    31: p("This is a cool paragraph!", vr("A better style!")), // repetition is allowed.
    // You can do repetition, but it is recommended not to. The numbers indicate the amount of objects you have inside your code.
    32: btn("This is a button with manual CSS!", () => {
        console.log("Buttons are cool!"); // check the console for this.
        alert(HelloWorldz);
    }, vr("A better style!")),
    33: p("This is a cool paragraph with a manual style!", styles({
        0: font("Arial"),
        1: color("black"),
        2: css("font", "sans-serif")
    })),
    35: scrpt(() => { // You can also declare things before and after. The numbers don't matter, you don't even need to add them in order.
        console.log("This is a script tag that was declared before the other script tag!")
    }),
    34: scrpt(() => {
        console.log("This is a script tag that was declared after the other script tag!")
    }), // You can see how in the HTML code, the numbers don't matter.
    37: scrpt(() => { // skipped some numbers. ;)
        console.log(HelloWorldz)
    }),
    38: vr("Hello Worldz", "Hello, World!"),
    39: p(vr("Hello Worldz"), vr("A better style!")), // You can use variables inside your code.
    40: h1(
        "Check the console for the code of this JavaScript file, and for the code of Galaxtic.js! (Base64)",
        styles({
            0: font("Arial, sans-serif"),
            1: color("black"),
            2: pos("center"),
            3: fontSize("50px")
        })
    ),
    41: p("You can get the code of Galaxtic.js by clicking the hyperlink below!", styles({
        0: font("Arial, sans-serif"),
        1: color("black"),
    })),
    42: a("Galaxtic.js", "https://github.com/BasharW10/glx", styles({
        0: font("Arial, sans-serif"),
        1: color("black"),
        2: pos("center"),
        3: fontSize("20px")
    })),


})

/* 


Why use Galaxtic?
    For the most part, Galaxtic is a way to make HTML easier if you want to turn certain values into a readable HTML file.

    For example, if you want to make a button, you can do this:
    start({
        0: head("<title> My Cool Website </title>"),
    },{
        0: btn("This is a button!", () => {
            console.log("Buttons are cool!");
            alert("Awesome!");
        })
    })

    
    Let's just say you have a value, and your app wants to show that value in an HTML file, that's simple!
    You can do this:
    start({
        0: head("<title> My Cool Website </title>"),
    },{
        0: vr("MyValueisNowInHTML", value), // Saves to memory for later use.
        1: p(vr("MyValueisNowInHTML"), styles({
            0: font("Arial"),
        }))
    })

    If you want to put it inside a button, you can't use vr, because it's not a variable inside the button.
    You can use inpt to declare the variable inside a script tag.
    start({
        0: head("<title> My Cool Website </title>"),
    }, {
        0: inpt("MyValueisNowInHTML", value), // Creates a script tag with a variable inside it.
        1: btn("This is a button!", () => {
            console.log("Buttons are cool!");
            alert(MyValueisNowInHTML);
        }, styles({
            0: font("Arial"),
        }))
    })


    Q: Whats the difference between vr and inpt?
    A: inpt is a function that creates a variable inside a script tag.
        vr is a function that saves a variable to memory for later use.
    
    Q: Why do you use vr and inpt?
    A: Isn't that the whole point of Galaxtic?

    Q: Why do you have to declare the variables as strings?
    A: When you use the scrpt function, in the index code, you can see that the callback function is being turned into a string.
        This is because the callback function is being turned into a string, and then being turned into a variable, which is then declared.
        When you declare inpt, it creates a script tag with a variable inside it.
        When you declare vr, it saves a variable to memory for later use.

    Q: Why do I have to declare start?
    A: start is a function that returns HTML code.
    
    Q: What is the difference between head and html?
    A: head is a function that puts code inside the head tag.
        html is a function that puts code inside the body tag.

    In the end, galaxic.js is a great way to create HTML files for your app on the go.
    If you want to use it, you can download it from here:
    https://github.com/BasharW10/glx

    Thank you for using Galaxtic.js!
*/

fs.writeFileSync("./compiled.html", es)



// Definition of: It's not a bug, its a feature.
