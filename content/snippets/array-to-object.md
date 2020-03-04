---
title: Array to object
slug: array-to-object
category: Javascript
---

A small helper function to create an object from an array of objects.
It accepts an array and the the key it should create the object with.

```js
export const arrayToObject = (array, key) => {
    const initialValue = {}
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: item
        }
    }, initialValue)
}
```
