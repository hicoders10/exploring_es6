export class ApiService {
    getUsers() {
        return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
    }
}