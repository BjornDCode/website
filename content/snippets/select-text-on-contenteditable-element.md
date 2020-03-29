---
title: Select text on contenteditable element
slug: select-text-on-contenteditable-element
category: Javascript
published_at: 2020-03-29
---

A small helper function to select all text in a contenteditable element.

```js
const selectElementContents = element => {
    const range = document.createRange()
    range.selectNodeContents(element)

    const selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)
}
```
