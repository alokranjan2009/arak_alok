// Highlight node on click
document.querySelectorAll('svg circle').forEach(node => {
    node.addEventListener('click', () => {
        node.setAttribute('fill', '#ffaa00');
        console.log(node.nextElementSibling.textContent + " clicked!");
    });
});

// Optional: log site loaded
document.addEventListener("DOMContentLoaded", function() {
    console.log("Arak Alok site loaded with interactive SVG!");
});

