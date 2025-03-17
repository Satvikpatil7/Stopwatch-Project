
// setInterval stopwatch
let hr = 0, min = 0, sec = 0, ms = 0;
let interval;
let running = false;


let hrele = document.getElementById("hours-interval");
let minele = document.getElementById("minutes-interval");
let secele = document.getElementById("seconds-interval");
let msecele = document.getElementById("milliseconds-interval");

// 00
function updateDisplay() {
   hrele.innerText = hr.toString().padStart(2, '0'); //string.padStart(length, string)
    minele.innerText = min.toString().padStart(2, '0');
    secele.innerText = sec.toString().padStart(2, '0');
    msecele.innerText = ms.toString().padStart(3, '0');

    
    console.log(`Updated Time - ${hr}h : ${min}m : ${sec}s : ${ms}ms`);
}

// Stopwatch logic 
const stopwatch = () => {
    ms += 10;  // Increment

    if (ms >= 1000) {
        ms = 0;
        sec++;
    }
    if (sec >= 60) {
        sec = 0;
        min++;
    }
    if (min >= 60) {
        min = 0;
        hr++;
    }
    updateDisplay();
};

// Start 
const start = () => {
    if (!running) {
        running = true;
        interval = setInterval(stopwatch, 10);
        console.log("Stopwatch started");
    } else {
        console.log("Stopwatch is already running");
    }
};

// Stop 
const stop = () => {
    if (running) {
        running = false;
        clearInterval(interval);
        console.log("Stopwatch stopped");
    } else {
        console.log("Stopwatch is already stopped");
    }
};

// Reset 
const reset = () => {
    running = false;
    clearInterval(interval);
    hr = min = sec = ms = 0;
    updateDisplay();
    console.log("Stopwatch reset");
};

// Event delegation 
document.getElementById("buttons-interval").addEventListener("click", (event) => {
    if (event.target.classList.contains("start-interval")) {
        start();
    } else if (event.target.classList.contains("stop-interval")) {
        stop();
    } else if (event.target.classList.contains("reset-interval")) {
        reset();
    }
});

// Initialize display 
updateDisplay();
console.log("SetInterval Stopwatch initialized");

//  requestAnimationFrame 
let hrra = 0, minra = 0, secra = 0, msra = 0; 
let requestAnimationFrameId; // Variable to store the ID of the requestAnimationFrame
console.log(requestAnimationFrameId)
let runningra = false; // Flag 

let hrelera = document.getElementById("hours-raf"); 
let minelera = document.getElementById("minutes-raf"); 
let secelera = document.getElementById("seconds-raf"); 
let msecelera = document.getElementById("milliseconds-raf"); 

function updateDisplayRA() {
    // 00
    hrelera.innerText = hrra.toString().padStart(2, '0');
    minelera.innerText = minra.toString().padStart(2, '0');
    secelera.innerText = secra.toString().padStart(2, '0');
    msecelera.innerText = msra.toString().padStart(3, '0');


    console.log(`Updated Time - ${hrra}h : ${minra}m : ${secra}s : ${msra}ms`);
}

// Stopwatch logic
const stopwatchRA = () => {
    msra += 10;  // Increment milliseconds by 10 

    if (msra >= 1000) {
        msra = 0; // Reset 
        secra++; // Increment seconds
    }
    
    if (secra >= 60) {
        secra = 0; // Reset 
        minra++; // Increment minutes
    }

    if (minra >= 60) {
        minra = 0; // Reset 
        hrra++; // Increment hours
    }
    updateDisplayRA(); 
    requestAnimationFrameId = requestAnimationFrame(stopwatchRA); // Request the next animation frame, creating a loop
};

// Start function 
const startRA = () => {
    if (!runningra) { 
        runningra = true; //flag to true
        requestAnimationFrame(stopwatchRA); // Start the stopwatch by requesting the first animation frame
        console.log("RequestAnimationFrame Stopwatch started"); 
    } else {
        console.log("RequestAnimationFrame Stopwatch is already running"); 
    }
};

// Stop function 
const stopRA = () => {
    if (runningra) { 
        runningra = false; //  flag to false
        cancelAnimationFrame(requestAnimationFrameId); // Cancel the ongoing animation frame
        requestAnimationFrameId = undefined; // Reset the ID to indicate no active animation frame
        console.log("RequestAnimationFrame Stopwatch stopped"); 
    } else {
        console.log("RequestAnimationFrame Stopwatch is already stopped"); 
    }
};

// Reset function 
const resetRA = () => {
    runningra = false; //  flag to false
    hrra = minra = secra = msra = 0; // Reset
    cancelAnimationFrame(requestAnimationFrameId);
    requestAnimationFrameId = undefined; // Reset the ID to indicate no active animation frame
    updateDisplayRA(); // Update 
    console.log("RequestAnimationFrame Stopwatch reset"); 
};

// Event 
document.getElementById("buttons-raf").addEventListener("click", (event) => {
    if (event.target.classList.contains("start-raf")) {
        startRA(); 
    } else if (event.target.classList.contains("stop-raf")) {
        stopRA(); 
    } else if (event.target.classList.contains("reset-raf")) {
        resetRA(); 
    }
});

// Initialize display
updateDisplayRA(); 
console.log("RequestAnimationFrame Stopwatch initialized");
