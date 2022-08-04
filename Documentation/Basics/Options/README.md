# Options
Here, you will learn how to configure your GLX. The third object inside `start();`.
```js
start({}, {}, {/* This One! */});
```
## Available Settings:
- NoTMP
- nullify

### NoTMP: bool (default is false)
This setting accepts a boolean. This setting decides whether or not adding the mandatory DOCTYPE html> head, and body tags are required.
```js
  // With
  start({}, {
  0: h1("Hello, World!")
  }, {
  "NoTMP": true,
  "nullify": true
  }) // Returns: string: "<h1>Hello, World</h1>"
```

### nullify: bool (default is true)
This setting accepts a boolean. This setting decides whether or not to reset the GLX variables.
```js
  // Without
  start({}, {
    0: h1("Hello, World")
  }, {
    "NoTMP": false,
    "nullify": false
  }) // Returns: <h1>Hello, World</h1>


  start({}, {
    0: h1("Hello, World")
  }, {
    "NoTMP": false,
    "nullify": false
  }) // Returns: <h1>Hello, World</h1><h1>Hello, World</h1>
```
