document.addEventListener("DOMContentLoaded", () => {
    // Select all tab buttons
    const tabButtons = document.querySelectorAll(".tab-button");

    // Add event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Get the target tab content ID
            const tabId = button.getAttribute("data-tab");

            // Deactivate all buttons and hide all contents
            tabButtons.forEach(btn => btn.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(content => {
                content.style.display = "none";
            });

            // Activate the clicked button and display the corresponding tab content
            button.classList.add("active");
            document.getElementById(tabId).style.display = "grid";
        });
    });
});
