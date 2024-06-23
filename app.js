const shareBox = document.querySelector(".share__box");
const shareButton = document.querySelector("button");

shareButton.addEventListener('click', function () {
    shareBox.classList.toggle('hidden');
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        shareBox.classList.add('hidden');
    }
});

document.addEventListener('click', function (event) {
    if (!shareBox.contains(event.target) && !shareButton.contains(event.target)) {
        shareBox.classList.add('hidden');
    }
});