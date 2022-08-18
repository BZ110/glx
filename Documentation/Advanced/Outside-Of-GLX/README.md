# Using GLX outside of the `start();` function.
Here, you will learn how to use the standard GLX functions outside of GLX.

## Some things to note:
- Most variables in GLX return **an HTML value as a string.**

----
## Howto
You can return raw HTML values like so:
```js
/*-- Make it compact? --*/
return ( $("div", { 0: h1("Hello, World!") }) )

/*-- Add more whitespace, and another object too! --*/
return (
  $("div", {
    0: h1("Hello, World!")
  }),
  h1("Hello World! Again.")
)
```
These functions are specifically for GLX, yet are being used differently. This is because of the simplicity of GLX. GLX does not force you to use the `start();` variable.

### Some more notes about the GLX functions:
- Functions return **string values.**
- Functions do not check the env. that they are in.
- The purpose of these functions is to allow easy-to-read HTML code, in JavaScript.

Furthermore, you can use GLX however you like. I completely allow you to isolate the functions of GLX and put them inside your code.
