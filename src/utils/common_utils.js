function isString(input) {
    return typeof input === 'string';
}

function isArray(input) {
    return (
        input instanceof Array ||
        Object.prototype.toString.call(input) === '[object Array]'
    );
}

function isNil(value) {
    if (value === undefined || value === null) {
        return true;
    }

    return false;
}

function isNullOrEmpty(value) {
    if (isNil(value)) {
        return true;
    }

    if (isString(value)) {
        return value.length === 0;
    } else if (isArray(value)) {
        return value.length === 0;
    }

    return false;
}

function defaultTo(defaultValue, value) {
    if (isNil(value)) {
        return defaultValue;
    } else {
        return value;
    }
}

export {
    isString,
    isArray,
    isNil,
    isNullOrEmpty,

    defaultTo,
}
