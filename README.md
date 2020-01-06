# .dom example

I was looking for a lightweight JSX-compatible virtual DOM implementation and stumbled upon [.dom](https://github.com/wavesoft/dot-dom), so built an example that will serve me as a template for my future projects and I would like to share it with you all. Hope anyone will find it helpful.

The example consists of a page with two stateful counters with increment and decrement, and I think it's awesome to get this working in 2.4 kilobytes of minified code (not even gzipped).

The only part that left me with doubts is this:

```jsx
<span className="mr-1">Count: { '' + count }</span>
```

Where `count` is an integer. If I pass the integer only I get an error like: `TypeError: can't convert undefined to object` but works fine passing it as a string. If any you have any further questions please let me know.
