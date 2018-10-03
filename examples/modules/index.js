import {ApiService} from './ApiService.js';
import {sum, sumMultiple} from './Utils.js';

// import all into object
// import * as utils from './Utils';

const apiServiceInstance = new ApiService();

apiServiceInstance.getUsers().then(users => {
    console.log('Users!', users);
});

console.log('sum', sum(3, 9));
console.log('sum multiple', sumMultiple(3, 9, 10, 6, 2));