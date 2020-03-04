---
title: Capitalize string
slug: capitalize-string
category: Javascript
published_at: 2020-03-02
---

A small helper function to capitalise the first word in a string.

```js
export const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.substring(1)
}
```
