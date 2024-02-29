function toggleMenu() {
    let menu = document.getElementById("mobile-menu");

    if (menu.style.display == "flex") {
        document.getElementById("mobile-menu").style.display = "none";
        return;
    }
    document.getElementById("mobile-menu").style.display = "flex";
}

document.getElementById("mobile-menu").style.display = "none";

document
    .getElementById("mobile-menu-btn")
    .addEventListener("click", toggleMenu);
