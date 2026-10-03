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
    // Treat the site's directory URL as its index.html page.
    const normalizePath = path =>
        path.endsWith('/') ? `${path}index.html` : path;

    const currentPath = normalizePath(window.location.pathname);

    document.querySelectorAll('.navigation .nav-button').forEach(button => {
        // Resolve the relative link against the containing page's URL.
        const targetPath = normalizePath(
            new URL(button.getAttribute('href'), document.baseURI).pathname
        );

        const isActive = targetPath === currentPath;
        button.classList.toggle('active-nav-button', isActive);

        if (isActive) {
            button.setAttribute('aria-current', 'page');
        } else {
            button.removeAttribute('aria-current');
        }
    });
}