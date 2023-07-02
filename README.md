# Tailwind Benchmark No. 3

## What this is about

This benchmark evaluates the marketing claim that Tailwind produces smaller builds.

I already did two other benchmarks before ([No. 1](https://github.com/ScriptRaccoon/tailwind-benchmark), [No. 2](https://github.com/ScriptRaccoon/tailwind-benchmark-2)). This time, we have 10 different cards on a page, all with different colors, border radiuses etc.

The CSS version is found in the subfolder `CSS`. The Tailwind version is found in the subfolder `Tailwind`. For better comparison, the (quite big) Tailwind CSS reset was replaced with the same, more simple one, used in the CSS version. The colors are not _exactly_ the same, but this is irrelevant to the benchmark.

## Results

In both cases, the CSS was minified. For the Vanilla CSS version, I simply used an [Online CSS Minifier Tool](https://www.toptal.com/developers/cssminifier). Here are the results:

### Vanilla CSS

-   `index.html`: 2.199 bytes
-   `style.css`: 1.273 bytes
-   total: 3.472 bytes

### Tailwind

-   `index.html`: 2.845 bytes
-   `style.css`: 1.778 bytes
-   total: 4.623 bytes

## Conclusion

The total bundle size of Tailwind is **33%** larger than the Vanilla CSS version, even though we reuse many of the utilities across the cards (for example, `mx-auto` and `p-4` multiple times).

Tailwind's CSS output contains several unused CSS variables such as `--tw-bg-opacity:1`. When we remove these, the file size reduces to 1.384 bytes, which is still a bit larger than the Vanilla CSS file. In any case, Tailwind's HTML will be larger.

As in the previous benchmarks, these are rather small projects, and it is not clear if they are representative of real-world projects. Further testing is necessary.
