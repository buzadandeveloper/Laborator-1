const hambMenu = document.querySelector(".hamb-menu");
const navMenu = document.querySelector(".nav-buttons");

hambMenu.addEventListener("click", () => {
    hambMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    hambMenu.classList.remove("active");
    navMenu.classList.remove("active");
}))
