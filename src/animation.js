document.addEventListener('DOMContentLoaded', function () {
    // Function to check if an element is at least 40% visible in the viewport
    function isElementInView(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Calculate the percentage of the element visible
        const visiblePercentage = (rect.top + rect.height) / windowHeight * 100;

        return visiblePercentage >= 40; // When 40% or more is visible
    }

    // Function to trigger the animation
    function triggerAnimation() {
        const section = document.getElementById("animate-section");
        if (!section) return; // Prevent errors if the section is not found

        const letters = section.querySelectorAll('.letter span');

        // Check if the section is at least 40% in view
        if (isElementInView(section)) {
            letters.forEach((letter, index) => {
                // Add a delay to each letter's animation
                letter.style.animationDelay = `${index * 0.05}s`;
                letter.classList.add('animate');
            });
        }
    }

    // Listen for the scroll event
    window.addEventListener('scroll', triggerAnimation);

    // Call the function once to handle the initial state
    triggerAnimation();
});
