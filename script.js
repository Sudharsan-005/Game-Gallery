const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.info-card');
hiddenElements.forEach((el) => observer.observe(el));

// Carousel Functionality
function initCarousels() {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.bg-image');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');

        // Skip if there's only one image or no buttons
        if (images.length <= 1 || !prevBtn || !nextBtn) return;

        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        prevBtn.addEventListener('click', prevImage);
        nextBtn.addEventListener('click', nextImage);
    });
}

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', initCarousels);

// Video Player Controls
document.addEventListener('DOMContentLoaded', function () {
    // Marvel Rivals Video Controls
    const video = document.getElementById('myVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');

    if (video && playPauseBtn && muteBtn) {
        // Play/Pause functionality
        playPauseBtn.addEventListener('click', function () {
            if (video.paused) {
                video.play();
                playPauseBtn.textContent = '⏸ Pause';
            } else {
                video.pause();
                playPauseBtn.textContent = '▶ Play';
            }
        });

        // Mute/Unmute functionality
        muteBtn.addEventListener('click', function () {
            if (video.muted) {
                video.muted = false;
                muteBtn.textContent = '🔊 Mute';
            } else {
                video.muted = true;
                muteBtn.textContent = '🔇 Unmute';
            }
        });
    }

    // Rainbow Six Siege Video Controls
    const r6Video = document.getElementById('r6Video');
    const r6PlayPauseBtn = document.getElementById('r6PlayPauseBtn');
    const r6MuteBtn = document.getElementById('r6MuteBtn');

    if (r6Video && r6PlayPauseBtn && r6MuteBtn) {
        // Play/Pause functionality
        r6PlayPauseBtn.addEventListener('click', function () {
            if (r6Video.paused) {
                r6Video.play();
                r6PlayPauseBtn.textContent = '⏸ Pause';
            } else {
                r6Video.pause();
                r6PlayPauseBtn.textContent = '▶ Play';
            }
        });

        // Mute/Unmute functionality
        r6MuteBtn.addEventListener('click', function () {
            if (r6Video.muted) {
                r6Video.muted = false;
                r6MuteBtn.textContent = '🔊 Mute';
            } else {
                r6Video.muted = true;
                r6MuteBtn.textContent = '🔇 Unmute';
            }
        });
    }
});

// Screenshot Tooltip
document.addEventListener('DOMContentLoaded', function () {
    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'screenshot-tooltip';
    tooltip.textContent = '📸 Screenshot taken by me';
    document.body.appendChild(tooltip);

    // Get all carousel containers
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        carousel.addEventListener('mouseenter', function () {
            // Find the active screenshot image/video in this carousel
            const activeScreenshot = this.querySelector('.bg-image.active[data-screenshot="true"]');

            if (activeScreenshot) {
                tooltip.style.position = 'fixed';
                tooltip.style.right = '20px';
                tooltip.style.left = 'auto';
                tooltip.style.transform = 'none';
                tooltip.style.bottom = '20px';
                tooltip.classList.add('show');
            }
        });

        carousel.addEventListener('mouseleave', function () {
            tooltip.classList.remove('show');
        });
    });
});
