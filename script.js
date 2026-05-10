// ===============================
// Run after DOM is loaded
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Smooth Scroll Navigation
    // ===============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    // ===============================
    // Hero Video Control
    // ===============================
    const heroVideo = document.querySelector('.hero-video');

    if (heroVideo) {
        heroVideo.addEventListener("click", () => {
            heroVideo.paused ? heroVideo.play() : heroVideo.pause();
        });
    }


    // ===============================
    // Back To Top Button
    // ===============================
    const topButton = document.createElement("button");
    topButton.innerHTML = "⬆ Top";
    topButton.id = "topBtn";
    topButton.style.display = "none";

    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {
        topButton.style.display = window.scrollY > 300 ? "block" : "none";
    });

    topButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});


// ===============================
// Welcome Message (Modern UI)
// ===============================
window.addEventListener("load", () => {

    const welcome = document.createElement("div");
    welcome.textContent = "Welcome to Binalonan Website!";
    
    welcome.style.position = "fixed";
    welcome.style.bottom = "20px";
    welcome.style.right = "20px";
    welcome.style.background = "#333";
    welcome.style.color = "#fff";
    welcome.style.padding = "10px 20px";
    welcome.style.borderRadius = "10px";
    welcome.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    welcome.style.zIndex = "9999";

    document.body.appendChild(welcome);

    setTimeout(() => {
        welcome.remove();
    }, 3000);

});