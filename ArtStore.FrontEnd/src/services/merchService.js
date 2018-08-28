import requester from '../infrastructure/requester'

export default {
    create: {
        send: data => requester.post('appdata', 'Merchandise', 'basic', data),
        success: function(res) {
            console.log('success');
        },
        fail: function(res) {
            console.log(res)
        }
    },
}