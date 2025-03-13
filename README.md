# Stopwatch Project

## Overview
This project demonstrates two different approaches to implementing a stopwatch in JavaScript:
1. **setInterval()** - A time-based function that executes at fixed intervals.
2. **requestAnimationFrame()** - A more efficient method optimized for smooth animations.

## Differences: requestAnimationFrame vs setInterval
### setInterval()
- Calls a function at specified time intervals.
- Can cause timing drift due to execution delays.
- Less optimized for smooth rendering.

### requestAnimationFrame()
- Synchronizes with the display refresh rate (usually 60 FPS).
- More accurate and smoother for animations.
- Stops when the page is not visible, saving CPU resources.

## How to Use
1. Open `index.html` in a browser.
2. Click **Start**, **Stop**, and **Reset** for each stopwatch type.

## Conclusion
Use `setInterval()` for simple time-based tasks. Use `requestAnimationFrame()` for smoother animations and optimized performance.

## Author
- **Your Name** (Replace with your actual name)

## License
MIT License

