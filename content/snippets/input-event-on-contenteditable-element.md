---
title: Input event on contenteditable element
slug: input-event-on-contenteditable-element
category: Javascript
published_at: 2020-03-29
---

On an input event from a input element you would use `event.target.value` to get the value.

But if it's a normal HTML elemenent with the `contenteditable` attribute that doesn't work. Instead you can use `event.target.textContent`.
