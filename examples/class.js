/**
 * Spread operator
 * Extender logger
 */

class Logger {
    log(...messages) {
        console.log(...messages)
    }
}

class AuthService {
    constructor(logger) {
        this.logger = logger;
        this.token = '';
    }

    authenticate(username, password) {
        if(username === 'hi' && password === 'coders') {
            this.token = AuthService.getRandomToken();
            this.logger.log('Authentication', 'succeed', {token: this.token});
        }
    }

    get isLogedIn() {
        return !!this.token;
    }

    static getRandomToken() {
        return Math.floor((Math.random() * 100) + 1);
    }
}



// Create auth service and logger instances
const authServiceInstance = new AuthService(new Logger());

// Authenticate
authServiceInstance.authenticate('hi', 'coders');

// Check authentication status
console.log(authServiceInstance.isLogedIn);