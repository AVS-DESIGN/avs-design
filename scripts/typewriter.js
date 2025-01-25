function typewriterEffectMultiple(selector, speed) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element) => {
        const text = element.textContent; // Get the text of each element
        element.textContent = ""; // Clear the element's content

        let index = 0;

        function typeCharacter() {
            if (index < text.length) {
                element.textContent += text.charAt(index); // Add one character at a time
                index++;
                setTimeout(typeCharacter, speed);
            }
        }

        typeCharacter();
    });
}
