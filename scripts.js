document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("changeColorBtn");
    const text = document.getElementById("text");

    button.addEventListener("click", function () {
        const colors = ["red", "blue", "green", "purple", "orange"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        text.style.color = randomColor;
    });
});
