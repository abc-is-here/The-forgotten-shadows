let currentScene = 0;
const scenes = document.querySelectorAll('.scene');

function showScene(index) {
    scenes[currentScene].classList.remove('active');
    scenes[currentScene].classList.add('hidden');
    currentScene = index;

    scenes[currentScene].classList.remove('hidden');
    scenes[currentScene].classList.add('active');
}

function nextScene() {
    if (currentScene < scenes.length - 1) {
        showScene(currentScene + 1);
    } else {
        console.log("The End!");
    }
}

document.addEventListener('click', nextScene);
