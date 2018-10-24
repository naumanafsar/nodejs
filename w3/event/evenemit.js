var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an Event Hanlder

var myEventHandler = funtion() {
    console.log('I hear a scream!');
}

// Assign the event handler an event!

eventEmitter.on('scream', myEventHandler);

// Fire the Scream Event!
eventEmitter.emit('scream');
