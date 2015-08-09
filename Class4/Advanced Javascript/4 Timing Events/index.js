// Timing events advanced javascript

/*
There’s one with timeouts and another with intervals. Timeouts execute once after a
certain amount of time has passed by.
    Intervals execute repeatedly after a certain amount of time has passed by.*/

function outputName() {
    document.write('Jasko Koyn');
}
setTimeout(function () {
    outputName();
}, 1000);