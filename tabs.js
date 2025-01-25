document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and hide content
            tabs.forEach((tab) => tab.classList.remove('active'));
            tabContents.forEach((content) => content.style.display = 'none');

            // Add active class to clicked tab and show related content
            tab.classList.add('active');
            const target = tab.dataset.target;
            document.querySelector(`#${target}`).style.display = 'grid';
        });
    });

    // Set default tab as active
    const defaultTab = document.querySelector('.tab.active');
    if (defaultTab) {
        document.querySelector(`#${defaultTab.dataset.target}`).style.display = 'grid';
    }
});
