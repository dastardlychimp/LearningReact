const data = require('./data');

var start = Date.now();

function* iterate () {
    while(true) {
        var now = Date.now();
        var timelapse = now - start;
        var dataSpot = timelapse / config.time
    }
}

const config = {
    time: 1000,
    min: 0,
    max: 10,
    width: 5000,
    height: 5000
}

/*
    data = [{a: 0, b: 0}, {a: 1, b: 2}, {a: 3, b: 1}];
    time = 1000ms;
    totaltime = data.length * time


    now = 1100ms;
    spot = 1.1 // now / time;
    currentIndex = Math.floor(spot);
    nextIndex = currentIndex + 1;
    
    dataSpot = currentDataIndex.split('.

    current = {
        a:
        b:
    }



    now = 1400ms;
    current = {
        a:
        b:
    }

    now = 1500ms;
    current = {
        a:
        b:
    }
*/