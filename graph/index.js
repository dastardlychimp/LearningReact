const data = require('./data');

var start = Date.now();

function* iterate (start) {
    while(true) {
        let now = Date.now();
        let timelapse = now - start;
        let dataSpot = timelapse / config.time;
        let currentIndex = Math.floor(spot);
        let nextIndex = currentIndex + 1;
        let progressThroughIndex = dataSpot % 1;
        let currentData = {};
        for (let category in data[currentIndex]) {
            let diff = data[nextIndex] - data[currentIndex];
            currentData[category] = data[currentIndex] + (diff * progressThroughIndex);
        }
        yield currentData;
    }
}

function begin () {
    start = Date.now();
}

function run () {
    let generator = iterate();
    let currentData = generator.next();
    if (currentData.status = 'finished') {
        end();
    }
    else {
        draw(currentData.value);
    }
}

function draw () {

}

function end () {

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
    
    progressThroughIndex = spot % 1;

    roadmapA = nextIndex.a - currentIndex.a;

    current = {
        a: currentIndex.a + rodamapA * progressThroughIndex;
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