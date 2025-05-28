// ...existing code...

// Set timer duration (30 minutes = 1800 seconds)
let timeLeft = 30 * 60;

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.querySelector('.timer').textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

updateTimerDisplay(); // Initial display

const timerInterval = setInterval(() => {
    if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
    } else {
        clearInterval(timerInterval);
        document.querySelector('.timer').textContent = "Time's up!";
    }
}, 1000);

// ...existing code...

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Copied to clipboard!');
        })
        .catch(err => {
            alert('Failed to copy!');
        });
}

// Successful submission
const successMessage = document.querySelector('.acceptFill');

successMessage.addEventListener('click', () => {
    document.querySelector('.confirmed').style= 'display: block';})

