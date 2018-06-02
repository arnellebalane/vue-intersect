const defaultConfig = {
    threshold: 0,
    root: null
};

function parseIntersectValue(value) {
    return typeof value === 'function'
        ? Object.assign({}, defaultConfig, { callback: value })
        : Object.assign({}, defaultConfig, value);
}

export default {
    install(Vue, options) {
        Vue.directive('intersect', {
            inserted(el, {value}) {
                const config = parseIntersectValue(value);
                console.log(config);
            }
        });
    }
};
