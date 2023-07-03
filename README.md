# Tailwind Benchmark

## What this is about

This benchmark is a comparison between Tailwind CSS and Vanilla CSS bundle output sizes. I created this repo after seeing a similar comparison, in which Vanilla CSS generated smaller bundle sizes: https://github.com/ScriptRaccoon/tailwind-benchmark-3

The CSS version is found in the subfolder `CSS`. The Tailwind version is found in the subfolder `Tailwind`. Tailwind is using it's full reset.

I've created 1000 unique card elements using a script to generate the HTML and CSS.

## Results

In both cases, the CSS was minified. For the Vanilla CSS version, I simply used an [Online CSS Minifier Tool](https://www.toptal.com/developers/cssminifier). Here are the results:

### Vanilla CSS

- `index.html`: 33.166 bytes
- `style.css`: 90.850 bytes
- total: 124.016 bytes

### Tailwind

- `index.html`: 63.796 bytes
- `style.css`: 4.495 bytes
- total: 68.291 bytes

## Conclusion

The total bundle size of Tailwind is **55% smaller** than the Vanilla CSS version.
