# glx
A better way to write HTML for your app.

## Why use Galaxtic (GLX)
For the most part, Galaxtic is a way to make HTML easier if you want to turn certain JavaScript values into a readable HTML file.

 For example, if you want to make a button, you can do this:
 ```
 start({
     0: head("<title> My Cool Website </title>"),
 },{
     0: btn("This is a button!", () => {
         console.log("Buttons are cool!");
         alert("Awesome!");
     })
 })
 ```
 But thats not what GLX is for. GLX is for the functions inpt and vr.
     Let's just say you have a value, and your app wants to show that value in an HTML file, that's simple!
     
You can do this:

```
start({
    0: head("<title> My Cool Website </title>"),
},{
    0: vr("MyValueisNowInMem", value), // Saves to memory for later use.
    1: p(vr("MyValueisNowInMem"), styles({
        0: font("Arial"),
    }))
})
```
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
    
You can use vr for styles, too.

Check example.js and compile.js for more information.
Check compiled.html for the end result.
