const publicationButton = document.querySelector(".dropdown .fButton");
const publicationDropdown = document.querySelector(".dropdown-content");
    

const studentButton = document.querySelectorAll(".dropdown .fButton")[1];
const studentDropdown = document.querySelectorAll(".dropdown-content")[1];


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

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel-image");
    let currentIndex = 0;
    const totalImages = images.length;
    const intervalTime = 30000; // 30 seconds

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove("active");
            if (i === index) {
                img.classList.add("active");
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    showImage(currentIndex);

    let imageInterval = setInterval(nextImage, intervalTime);

    document.getElementById("next").addEventListener("click", function () {
        nextImage();
        resetInterval();
    });

    document.getElementById("prev").addEventListener("click", function () {
        prevImage();
        resetInterval();
    });

    function resetInterval() {
        clearInterval(imageInterval);
        imageInterval = setInterval(nextImage, intervalTime);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-item img");
    let currentIndex = 0;
    let modal;

    function openModal(index) {
        currentIndex = index;
        modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <button id="prev" class="modal-arrow">&#10094;</button>
                <img id="modal-img" src="${images[currentIndex].src}" alt="Expanded Image">
                <button id="next" class="modal-arrow">&#10095;</button>
            </div>
        `;
        document.body.appendChild(modal);

        document.querySelector(".close").addEventListener("click", closeModal);
        document.getElementById("prev").addEventListener("click", prevImage);
        document.getElementById("next").addEventListener("click", nextImage);
        modal.addEventListener("click", closeModalOutside);
        document.addEventListener("keydown", handleKeyPress);
    }

    function closeModal() {
        modal.remove();
        document.removeEventListener("keydown", handleKeyPress);
    }

    function closeModalOutside(event) {
        if (event.target === modal) closeModal();
    }

    function prevImage(event) {
        event.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        document.getElementById("modal-img").src = images[currentIndex].src;
    }

    function nextImage(event) {
        event.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById("modal-img").src = images[currentIndex].src;
    }

    function handleKeyPress(event) {
        if (event.key === "Escape") closeModal();
        else if (event.key === "ArrowLeft") prevImage(event);
        else if (event.key === "ArrowRight") nextImage(event);
    }

    images.forEach((image, index) => {
        image.addEventListener("click", () => openModal(index));
    });
});
