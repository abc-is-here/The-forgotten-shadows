let currentScene = 0;
const scenes = document.querySelectorAll('.scene');

function showScene(index) {
    // Hide current scene
    scenes[currentScene].classList.remove('active');
    scenes[currentScene].classList.add('hidden');

    // Update current scene index
    currentScene = index;

    // Show new scene
    scenes[currentScene].classList.remove('hidden');
    scenes[currentScene].classList.add('active');
}

function nextScene() {
    if (currentScene < scenes.length - 1) {
        showScene(currentScene + 1);
    } else {
        console.log("The End!"); // Can replace with an ending scene or action
    }
}

// Trigger the next scene on click
document.addEventListener('click', nextScene);
