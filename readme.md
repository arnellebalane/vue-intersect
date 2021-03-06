# vue-intersect

VueJS plugin that reports element intersections using the [IntersectionObserver API][1].


## Installation

Via npm:

```bash
$ npm install @arnellebalane/vue-intersect
```

Via yarn:

```bash
$ yarn add @arnellebalane/vue-intersect
```


## Usage

First, load the plugin. Depending on the environment, you have several options:

```js
// ES6
import VueIntersect from '@arnellebalane/vue-intersect';

// AMD, e.g. RequireJS
require(['path/to/vue-intersect/dist/vue-intersect.js'], (VueIntersect) => { /**/ });
```

```html
<!-- <script>, exposed as `VueIntersect`. -->
<script src="path/to/vue-intersect/dist/vue-intersect.js"></script>

<!-- or if you wanna load it via CDN (unpkg) -->
<script src="https://unpkg.com/@arnellebalane/vue-intersect@latest/dist/vue-intersect.umd.js"></script>
```

Then, tell Vue to use the plugin:

```js
Vue.use(VueIntersect);
```

Then, add the `v-intersect` directive on the element whose intersection you
want to observe:

```vue
<div v-intersect="onIntersect"></div>

export default {
    methods: {
        onIntersect(entry) {
            // Do something...
        }
    }
};
```

The value passed to the `v-intersect` directive is described in the
[**API**](#api) section.


### IntersectionObserver Polyfill

This plugin uses the IntersectionObserver API under the hood. If a target
browser does not support the API, we can use a polyfill for it.

However, as of v2.0.0 of this plugin, the polyfill for the IntersectionObserver
API is not bundled anymore. This means that if you want to support browsers
that don't natively support the API, you'd have to load the polyfill yourself.

This keeps the package size of this plugin very small and also keeps users from
having to unnecessarily download the polyfill even when their browsers already
support the IntersectionObserver API natively.

You may check out [intersection-observer][4] for steps on how to use the polyfill.


## API

The `v-intersect` accepts either a `Function` or an `Object`.

If a `Function` is given, it will be used as the callback function which gets
called whenever the element's intersection changes. The callback function is
passed an [`IntersectionObserverEntry`][2] object, from which you can get the
intersection ratio and other properties.

Passing a `Function` creates an `IntersectionObserver` using the default
configurations. If you want to specify custom configurations, you should pass
an `Object` to the `v-intersect` directive, which can contain the following keys:

- `callback`: `Function`. Required.
- `threshold`: `Number` or `Array`. Optional, defaults to `0`.
- `root`: `HTMLElement`. Optional, defaults to `null`, which corresponds to the
    viewport itself.
- `rootMargin`: `String`. Optional, defaults to `0px`.

I wrote [an article][3] explaning what the IntersectionObserver API and its
terminologies.


## License

MIT License

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
[2]: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry
[3]: https://blog.arnellebalane.com/the-intersection-observer-api-d441be0b088d
[4]: https://www.npmjs.com/package/intersection-observer
