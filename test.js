var Emitter = require('./event-emitter');
var emitter = new Emitter();

emitter.on("haha", () =>
{
    console.log("HAHA");
})

emitter.emit("haha", ()=>
{

});