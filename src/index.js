const defer = (func, ...args) => () => func(...args);

export default defer;
