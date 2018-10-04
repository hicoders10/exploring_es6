const axios = require('axios');

const getApiUrl = async () => 'https://jsonplaceholder.typicode.com/';

const getTodos = (apiUrl, userId) => axios.get(`${apiUrl}todos?userId=${userId}`);
const getUsers = apiUrl => axios.get(apiUrl + 'users');

/**
 * Async fuerza a devolver una promesa
 */

console.log(getApiUrl());

/**
 * Tradicionalmente para encadenar promesas
 */

/*getApiUrl().then(url => {
    getUsers(url).then(response => {
        getTodos(url, response.data[0].id).then(todosResponse => {
            console.log('todos of first user', todosResponse.data);
        })
    })
})*/

/**
 * Async / await
 */

 /*(async () => {
    const url = await getApiUrl();
    const usersResponse = await getUsers(url);
    const todos = await getTodos(url, usersResponse.data[0].id);
    console.log(todos.data);
 })();*/