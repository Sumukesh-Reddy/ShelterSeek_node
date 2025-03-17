document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Simulate form submission (you can replace this with an actual API call)
        setTimeout(() => {
            // Clear the form
            contactForm.reset();

            // Show success message
            successMessage.classList.remove("hidden");

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.add("hidden");
            }, 5000);
        }, 1000);
    });
});