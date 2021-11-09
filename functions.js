const axios = require('axios');

const {APIKEY, APIURL, EVENTKEY, ACTID} = require('./credentials');

async function getEmail(contactId) {
    return new Promise((resolve, reject) => {
        let url = APIURL + '/api/3/contacts/' + contactId;
        axios
            .get(url, { headers: { 'Api-Token': APIKEY } })
            .then(res => {
                resolve(res.data.contact.email);
            })
            .catch(error => {
                reject(error);
            })
    });
}

async function sendEvent(email, eventName, eventData) {
    return new Promise((resolve, reject) => {
        let url = 'https://trackcmp.net/event';
        let data = 'actid=' + ACTID + '&key=' + EVENTKEY + '&event=' + eventName + '&eventdata=' + eventData + '&visit=%7B%22email%22%3A%22' + encodeURIComponent(email) + '%22%7D';
        axios
            .post(url, data, { headers: { 'content-type': 'application/x-www-form-urlencoded' } })
            .then(res => {
                resolve(res);
            })
            .catch(error => {
                reject(error);
            })
    });
}

module.exports = {
    getEmail,
    sendEvent
}