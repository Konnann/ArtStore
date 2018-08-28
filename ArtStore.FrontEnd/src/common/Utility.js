export default class Utility {
    static isLoggedIn() {
        console.log(sessionStorage.getItem('authToken'))
        return false;
    }
    
    static getUserName() {
        return 'Dannie';
    }

    static isDisplayForm() {
        window.location.pathname.indexOf('DispForm') != -1;
    }
}