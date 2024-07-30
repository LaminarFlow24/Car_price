window.addEventListener('DOMContentLoaded', (event) => {
    const slidePanel = document.getElementById('slidePanel');

    // Slide the panel down on page load
    setTimeout(() => {
        slidePanel.classList.add('show');
    }, 100); // Add a slight delay for better visual effect

    // Close the panel when clicking outside the panel content
    slidePanel.addEventListener('click', (e) => {
        if (e.target === slidePanel) {
            closePanel();
        }
    });

    // Close the panel when pressing the escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePanel();
        }
    });

    function closePanel() {
        slidePanel.classList.remove('show');
        setTimeout(() => {
            window.location.href = 'index.html'; // Redirect to the original page
        }, 100); // Add a delay to allow the panel to slide up before redirecting
    }
});
