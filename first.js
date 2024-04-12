document.addEventListener('DOMContentLoaded', function (event) {
    // Arrays with texts to type in typewriter
    var welcomeText = ["Welcome to"];
    var locationText = ["Jamshedpur"];

    // Function to perform typewriter animation
    function typeWriter(text, i, element, fnCallback) {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriter(text, i + 1, element, fnCallback)
            }, 100);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    // Function to start the typewriter animation
    function startTextAnimation(textArray, index, containerSelector) {
        var element = document.querySelector(containerSelector);

        if (typeof textArray[index] === 'undefined') {
            setTimeout(function () {
                startTextAnimation(textArray, 0, containerSelector);
            }, 20000);
        }

        if (index < textArray[index].length) {
            typeWriter(textArray[index], 0, element, function () {
                startTextAnimation(textArray, index + 1, containerSelector);
            });
        }
    }

    // Start the text animations for both "Welcome to" and "Jamshedpur"
    startTextAnimation(welcomeText, 0, ".welcome1");
    startTextAnimation(locationText, 0, ".welcome3");
});


