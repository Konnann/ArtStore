export default {
    defaultState: {
        username: '',
        password: '',
        confirmPassword: ''
    },

    validate: data => {
        const {username, password, confirmPassword} = data;

        if(!username) {
            return 'Username is required';
        }

        if(!password) {
            return 'Password is required'
        }

        if(password !== confirmPassword) {
            console.error('passwrod missmatch')
            return 'Passwords must match';
        }
    }
}