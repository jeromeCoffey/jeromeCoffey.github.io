document.addEventListener('DOMContentLoaded', function() {
    // Project Modal Handling
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project-id');
            const modal = document.querySelector(`#modal-${projectId}`);
            modal.classList.add('show');
        });
    });

    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.parentElement.classList.remove('show');
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animated Loader
    const loader = document.querySelector('.loader');
    window.addEventListener('load', function() {
        loader.classList.add('hide');
    });

    // Load More Projects Button with Simulated Async Request
    const loadMoreButton = document.querySelector('#load-more-projects');
    loadMoreButton.addEventListener('click', function() {
        this.textContent = 'Loading...';
        setTimeout(() => {
            // Simulate async operation like fetching data
            alert('More projects loaded (simulated)');
            this.textContent = 'Load More Projects';
        }, 2000); // Simulated delay of 2 seconds
    });

    // Interactive Hover Effects for Projects
    projectItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            // Example: animate or change style
            item.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
});

