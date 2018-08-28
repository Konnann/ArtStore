import requester from '../infrastructure/requester'

export default {
    create: {
        send: data => requester.post('appdata', 'Merchandise', 'kinvey', data),
        success: function (res) {
            console.log('success');
        },
        fail: function (res) {
            console.log(res)
        }
    },
    update: {
        send: data => requester.post('appdata', 'Merchandise', 'kinvey', data),
        success: function (res) {
            console.log('success');
        },
        fail: function (res) {
            console.log(res)
        }
    }, 
    getById: {
        get: id => requester.get('appdata', 'Merchandise', 'kinvey', id),
        success: function (res) {
            console.log('success');
            console.log(res);
        },
        fail: function (res) {
            console.log(res)
        }
    }, 
}