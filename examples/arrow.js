/**
 * Context
 */

class LogService {
    constructor(prefix) {
        this.prefix = prefix;
    }
    log(messages) {
        messages.forEach(function (message) {
            console.log(this.prefix + ' ' + message);
        });
    }
}

const logServiceInstance = new LogService('Auth Logs');

// logServiceInstance.log(['Service up', 'Service down']);

/**
 * Implicit return and body
 */

/*console.log(['soy', 'un', 'hi', 'coder'].reduce(function (acc, val) {
    return acc + val.length;
}, 0));

console.log([120, 50, 20, 10, 185].map(function (val) {
    return val * 2;
}));*/

/**
 * Named arrow functions
 */

 const double = number => number * 2;

 // console.log(double(10));

 const getMeasureObj = (value, uom) => ({value, uom});

 // console.log(getMeasureObj(10, 'm3'));

 
