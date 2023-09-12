const toggleButton = document.getElementById('toggleButton');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Store the user's preference in local storage
    const isDarkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkModeEnabled);
});

// Check local storage for the user's preference
const isDarkModeEnabled = localStorage.getItem('dark-mode');
if (isDarkModeEnabled === 'true') {
    body.classList.add('dark-mode');
}
