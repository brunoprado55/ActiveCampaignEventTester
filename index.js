const {getEmail, sendEvent} = require('./functions');

const contactId = 48;
const eventName = "testing";
const eventData = "Final test";

const main = async () =>{
    await getEmail(contactId)
    .then(email => sendEvent(email, eventName, eventData))
    .catch (err => res.status(400)
    .end(err));
}

main();