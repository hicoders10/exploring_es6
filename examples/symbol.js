const privatePropConstant = Symbol('private');
const publicPropConstant = 'public';

const config = {}
config[privatePropConstant] = 'privatePropValue';
config[publicPropConstant] = 'publicPropValue';

console.log('Keys', Object.keys(config));
console.log('Values', Object.values(config));
console.log('Config', config);

console.log('Private prop value', config[privatePropConstant]);

console.log('Compare different symbols', Symbol('hola') === Symbol('hola'));

const mySymbol = Symbol();
const mySymbolCopy = mySymbol;

console.log('Compare same symbols', mySymbol === mySymbolCopy);