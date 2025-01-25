function typewriterEffect(elementId, typingSpeed = 100) {
    const element = document.getElementById(elementId);
    const text = element.textContent.trim(); // Use the existing text in the element
    element.textContent = ""; // Clear the content to start the animation

    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }

    type();
}