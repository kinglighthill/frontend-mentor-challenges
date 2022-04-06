let navIcon = document.querySelector("#nav-icon")
let nav = document.querySelector("nav")

navIcon.addEventListener("click", () => {
    nav.classList.toggle("gone")
})