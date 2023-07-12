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
    deferredPrompt.prompt(); 
    const result = await deferredPrompt.userChoice; 
    console.log('User choice:', result.outcome);
    deferredPrompt = null; 
    butInstall.style.display = 'none'; 
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('App installed');
});
