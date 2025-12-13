const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", () => {
    sidebar.classList.add("active");

    // Esconde menu
    menuIcon.style.opacity = "0";
    menuIcon.style.pointerEvents = "none";

    // Mostra X
    closeIcon.style.opacity = "1";
    closeIcon.style.pointerEvents = "auto";
});

closeIcon.addEventListener("click", () => {
    sidebar.classList.remove("active");

    // Esconde X
    closeIcon.style.opacity = "0";
    closeIcon.style.pointerEvents = "none";

    // Mostra menu
    menuIcon.style.opacity = "1";
    menuIcon.style.pointerEvents = "auto";
});
