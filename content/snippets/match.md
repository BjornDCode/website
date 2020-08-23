---
title: Match
slug: match
category: Javascript
published_at: 2020-08-15
---

A small helper function that aims to simulate the [match](https://wiki.php.net/rfc/match_expression_v2) expression in PHP.

```js
const match = (input, patterns) => {
    return patterns[input] || patterns['default']
}
```

Instead of doing this:

```js
const getStatusCode = code => {
    const lookup = {
        200: 'Success',
        300: 'Redirect',
        400: 'Client error',
        // ...
    }

    return lookup[code]
}

const status = getStatusCode(200) // Success
```

You can do this:

```js
const getStatusCode = code =>
    match(code, {
        200: 'Success',
        300: 'Redirect',
        400: 'Client error',
        // ...
    })

const status = getStatusCode(200) // Success
```
