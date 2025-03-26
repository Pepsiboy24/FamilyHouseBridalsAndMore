const navOPen = document.querySelector("[data-navOpenBtn]")
const navClose = document.querySelector("[data-navCloseBtn]")
const nav = document.querySelector("[data-nav]")

navOPen.addEventListener("click", () => {
    navOPen.classList.add("hideNav")
    navClose.style.display = "flex";
    nav.style.transform = "translateX(0)";
})
navClose.addEventListener("click", () => {
    navOPen.classList.remove("hideNav")
    navClose.style.display = "none";
    nav.style.transform = "translateX(-100vw)";
})