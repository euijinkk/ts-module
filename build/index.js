function _(selector) {
    const element = document.querySelector(selector);
    const get = () => {
        return element;
    };
    const show = () => {
        if (!element) {
            return;
        }
        element.style.display = 'block';
    };
    const hidden = () => {
        if (!element) {
            return;
        }
        element.style.display = 'none';
    };
    const addEvent = (event, listener) => {
        if (!element) {
            return;
        }
        element.addEventListener(event, listener);
    };
    return {
        get,
        innerHTML: element?.innerHTML,
        show,
        hidden,
        addEvent,
    };
}
(function (_) {
    function fetch(url, options) {
        return window.fetch(url, options);
    }
    _.fetch = fetch;
    function isNull(value) {
        return value === null;
    }
    _.isNull = isNull;
    function isNil(value) {
        return value == null;
    }
    _.isNil = isNil;
    function isNumber(value) {
        return typeof value === 'number';
    }
    _.isNumber = isNumber;
    function isFunction(value) {
        return typeof value === 'function';
    }
    _.isFunction = isFunction;
    function shuffle(array) {
        const length = array == null ? 0 : array.length;
        if (!length) {
            return [];
        }
        const result = [...array];
        let index = -1;
        const lastIndex = length - 1;
        while (++index < length) {
            const random = index + Math.floor(Math.random() * (lastIndex - index + 1));
            const value = result[random];
            result[random] = result[index];
            result[index] = value;
        }
        return result;
    }
    _.shuffle = shuffle;
    // @TODO: {} vs Record
    function pick(object, ...keys) {
        return keys.reduce((prev, key) => ({ ...prev, [key]: object[key] }), {});
    }
    _.pick = pick;
    function omit(object, ...keys) {
        const result = { ...object };
        keys.forEach(key => {
            delete result[key];
        });
        return result;
    }
    _.omit = omit;
    const cache = {};
    function memoize(func, key) {
        const memoized = (...args) => {
            if (cache[key]) {
                return cache[key];
            }
            const result = func(...args);
            cache[key] = result;
            return result;
        };
        return memoized;
    }
    _.memoize = memoize;
    function debounce(func, delay) {
        let timer;
        return (...args) => {
            if (timer)
                clearTimeout(timer);
            timer = setTimeout(() => {
                func(...args);
            }, delay);
        };
    }
    _.debounce = debounce;
    function throttle(func, delay) {
        let timer;
        return (...args) => {
            if (!timer) {
                func(...args);
                timer = setTimeout(() => {
                    timer = null;
                }, delay);
            }
        };
    }
    _.throttle = throttle;
    function clickOutside() { }
    _.clickOutside = clickOutside;
})(_ || (_ = {}));
export default _;
