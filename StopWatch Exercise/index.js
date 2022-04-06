//StopWatch Constructor
function StopWatch() {
  //variables stop watch will need to function
  let startTime,
    endTime,
    running,
    duration = 0;

  //this will start the stop watch
  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");
    running = true;
    startTime = new Data();
  };

  // this will stop the watch, and capture duration from start to stop
  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started.");
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  // this will reset the stopwatch
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
}

const sw = new StopWatch();
