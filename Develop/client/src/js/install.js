const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // Used to handle the deferred prompt

// Event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault(); // Prevent the default prompt from showing
  deferredPrompt = event; // Store the event for later use
  butInstall.style.display = 'block'; // Show the install button
});

// Event handler for the click event on the install button
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt(); // Show the installation prompt
    const result = await deferredPrompt.userChoice; // Wait for the user's choice
    console.log('User choice:', result.outcome);
    deferredPrompt = null; // Reset the deferred prompt variable
    butInstall.style.display = 'none'; // Hide the install button
  }
});

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App installed');
  // Perform any additional actions after the app is installed
});
