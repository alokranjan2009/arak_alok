// Basic JS example: display a console message
document.addEventListener("DOMContentLoaded", function() {
    console.log("arak_alok site is loaded successfully!");
    
    // Example: Change header text dynamically
    const header = document.querySelector("header h1");
    if(header) {
        header.textContent = "Welcome to Arak Alok!";
    }
});
