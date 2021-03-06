import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import requester from '../../infrastructure/requester';
import observer from '../../infrastructure/observer';

export default class Logout extends Component {
    logout = () => {
        requester.post('user', '_logout', 'kinvey')
            .then(res => {
                sessionStorage.removeItem('authtoken'),
                observer.trigger(observer.events.logout)
            });
    }

    render = () => {
        this.logout();
        return <Redirect to='/' />
    }
}