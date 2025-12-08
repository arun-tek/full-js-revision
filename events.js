// Get the output div for logging events
const output = document.getElementById('output');

// Function to log events with timestamp
function logEvent(message) {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = document.createElement('div');
    logEntry.textContent = `[${timestamp}] ${message}`;
    output.appendChild(logEntry);
    output.scrollTop = output.scrollHeight; // Auto-scroll to bottom
}

// Click Events
document.getElementById('clickBtn').addEventListener('click', () => {
    logEvent('Button clicked!');
});

document.getElementById('dblClickBtn').addEventListener('dblclick', () => {
    logEvent('Button double-clicked!');
});

// Mouse Events
const mouseBtn = document.getElementById('mouseBtn');
mouseBtn.addEventListener('mouseover', () => {
    logEvent('Mouse entered the button!');
});

mouseBtn.addEventListener('mouseout', () => {
    logEvent('Mouse left the button!');
});

mouseBtn.addEventListener('mousedown', () => {
    logEvent('Mouse button pressed down!');
});

mouseBtn.addEventListener('mouseup', () => {
    logEvent('Mouse button released!');
});

// Keyboard Events
document.getElementById('textInput').addEventListener('keydown', (e) => {
    logEvent(`Key pressed: ${e.key}`);
});

// Form Events
document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;
    logEvent(`Form submitted with name: ${name}`);
    document.getElementById('nameInput').value = ''; // Clear input
});

// Window Events
window.addEventListener('resize', () => {
    logEvent(`Window resized to ${window.innerWidth}x${window.innerHeight}`);
});

window.addEventListener('scroll', () => {
    logEvent(`Window scrolled to position: ${window.scrollY}`);
});

// Touch Events (for mobile devices)
document.addEventListener('touchstart', () => {
    logEvent('Touch started!');
});

document.addEventListener('touchend', () => {
    logEvent('Touch ended!');
});

// Custom Events
const customEvent = new CustomEvent('myCustomEvent', {
    detail: { message: 'This is a custom event!' }
});

document.addEventListener('myCustomEvent', (e) => {
    logEvent(e.detail.message);
});

// Trigger custom event after 5 seconds
setTimeout(() => {
    document.dispatchEvent(customEvent);
}, 5000);
