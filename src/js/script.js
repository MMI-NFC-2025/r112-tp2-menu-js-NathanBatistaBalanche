const toggle = document.querySelector('.header__menu-btn');
const nav = document.querySelector('.header__menu');

toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    if (isClosed) {
        toggle.ariaExpanded = "true";
        nav.ariaHidden = "false";
    } else {
        toggle.ariaExpanded = "false";
        nav.ariaHidden = "true";
    }
});
