

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
    toggleBtns[i].addEventListener("click", function () {

        elemToggleFunc(toggleBtnBox);
        for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
        elemToggleFunc(skillsBox);

    });
}


let loader = document.getElementById("loader");
window.addEventListener("load", function () {
    console.log("This message will print just after fully loading the website")
    loader.style.display = 'none';
});