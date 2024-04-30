function menuShow() {
    let menuMobile = document.querySelector(".mobile-menu");
    // Make to loop, for see the menu contains a classe what's in the CSS
    if (menuMobile.classList.contains("open")) {
        // Close de menu window
        menuMobile.classList.remove("open");

        // Change Menu Icon
        document.querySelector(".icon").src = "./assets/imgs/menu-default.svg";
    } else {
        menuMobile.classList.add("open");
        document.querySelector(".icon").src = "./assets/imgs/menu-opened.svg";
    }
}