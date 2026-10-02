/* Load banner and nav bar HTML fragments and inline them into the page.
   After those fragments are inserted, run the activate the current nav button and show main content. */
function loadBannerAndNavBar() {
    fetch('./html-fragments/site-banner.html')
        .then(response => response.text())
        .then(html => {

            // Inject the banner HTML fragment.
            document.getElementById('banner-placeholder-id').innerHTML = html;
        });

    fetch('./html-fragments/nav-bar.html')
        .then(response => response.text())
        .then(html => {
            
            // Inject the navigation HTML fragment.
            document.getElementById('nav-placeholder-id').innerHTML = html;
            
            // Indicate the navigation button that is currently active.
            MarkActiveNavButton();

            // Make the main content visible.
            document.getElementById('content-container-id').classList.remove('hidden-content-container');
        });
}

// Make the button for the loaded page active
function MarkActiveNavButton() {
    const nav_button_elements = Array.from(document.querySelectorAll('.navigation .nav-button'));
    const current_page_path = window.location.pathname;
    nav_button_elements.some(button => {
        if ((button.getAttribute('href') === current_page_path) || ((current_page_path === "/") && (button.getAttribute('href') === "/index.html"))) {
            button.className = 'active-nav-button';

            // Return once a matching button is found.
            return true;
        }
    });
}
