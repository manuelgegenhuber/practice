function Stopwatch() {
    let startTime = 0;
    let endTime = 0;
    let isRunning = false;

    this.start = function () {
        if (!isRunning) {
            startTime = new Date().getTime();
            isRunning = true;
        } else {
            throw Error("Stopwatch already started!");
        }
    };

    this.stop = function () {
        if (isRunning) {
            endTime = new Date().getTime();
            isRunning = false;
        } else {
            throw Error("Stopwatch is not started!");
        }
    };
    this.reset = function () {
        startTime = 0;
        endTime = 0;
        isRunning = false;
    };

    Object.defineProperties(this, {
        duration: {
            get: function () {
                let time = isRunning ? (new Date().getTime() - startTime) : (endTime - startTime);
                return time / 1000;
            }
        }
    });
}