let subscriptions = {
    'loginUser': [],
    'notification': [],
    'logout': []
};

export default {
    events: {
        loginUser: 'loginUser',
        notification: 'notification',
        logout: 'logout'
    },
    subscribe: (eventName, fn) => 
        subscriptions[eventName].push(fn),
    trigger: (eventName, data) => 
        subscriptions[eventName].forEach(fn => fn(data))
}