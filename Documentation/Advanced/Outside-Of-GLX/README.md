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

/*-- Let's space it out a bit and add some whitespace! --*/
return (
  $("div", {
    0: h1("Hello, World!")
  })
)
```
These functions are specifically for GLX, yet are being used differently. This is because of the simplicity of GLX. GLX does not force you to use the `start();` variable.

### Some more notes about the GLX functions:
- Functions return **string values.**
- Functions do not check the env. that they are in.
- The purpose of these functions is to allow easy-to-read HTML code, in JavaScript.
