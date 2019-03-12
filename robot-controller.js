var Emitter = require('./event-emitter');
var emitter = new Emitter();

emitter.on("get", () =>
{
    console.log("COMMAND GET");
})

function executeCommand(command)
{
    emitter.emit(command);
}

module.exports = 
{
    executeCommand : executeCommand
}