---
title: Capitalize string in Javascript
slug: capitalize-string-in-javascript
category: Javascript
---

A small helper function to capitalise the first word in a string.

```js
export const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.substring(1)
}
```
