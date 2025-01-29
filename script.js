const publicationButton = document.querySelector(".dropdown .fButton");
const publicationDropdown = document.querySelector(".dropdown-content");

publicationButton.addEventListener("click", () => {
    publicationDropdown.classList.toggle("show");
});


const studentButton = document.querySelectorAll(".dropdown .fButton")[1];
const studentDropdown = document.querySelectorAll(".dropdown-content")[1];

studentButton.addEventListener("click", () => {
    studentDropdown.classList.toggle("show");
});


window.addEventListener("click", (e) => {
    if (!e.target.matches(".fButton")) {
        document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
            dropdown.classList.remove("show");
        });
    }
});

function openNav() {
    if (window.innerWidth <= 1200) {
        document.getElementById("layout-menu").style.width = "280px";
        document.getElementById("layout-content-container").style.marginLeft = "280.8px";
        document.getElementById("layout-content-container").style.position = "fixed";
    }
}
function closeNav() {
    if (window.innerWidth <= 1200) {
        document.getElementById("layout-menu").style.width = "0";
        document.getElementById("layout-content-container").style.position = "static";
        document.getElementById("layout-content-container").style.marginLeft = "0px";
        setInterval(
            function(){ location.reload() },
            500
        );
    }
}
