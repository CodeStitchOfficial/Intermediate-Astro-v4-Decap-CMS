// Astro:page-load wrapper for View Transitions purposes
document.addEventListener('astro:page-load', () => { // Make the script controlling the <Hamburger /> mobile menu component available after navigating to a new page.

    const CSbody = document.querySelector('body');
    const CSnavbarMenu = document.getElementById('cs-navigation');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    
    // Toggles the hamburger mobile menu
    mobileMenuToggle.addEventListener('click', function () {
        mobileMenuToggle.classList.toggle('cs-active');
        CSnavbarMenu.classList.toggle('cs-active');
        CSbody.classList.toggle('cs-open');
        ariaExpanded(mobileMenuToggle);
    });
  
    // Checks the value of aria expanded on an element and changes it accordingly whether it is expanded or not
    function ariaExpanded(element) {
        const isExpanded = element.getAttribute('aria-expanded');
        if (isExpanded === "false") {
            element.setAttribute('aria-expanded', 'true');
        } else {
            element.setAttribute('aria-expanded', 'false');
        };
    };

    ///// Handling dropdown menus on desktop (keyboard navigation) and mobile (clicks)/////
    const dropdownElements = document.querySelectorAll(".cs-dropdown");
    dropdownElements.forEach(element => {
        
        element.addEventListener("keydown", function(event) {
            const dropdownButton = element.querySelector(".cs-dropdown-button");
            // Makes dropdown menus appear upon hitting "Enter" or "Spacebar"
            if (event.key === "Enter" || event.key === " ") {
                element.classList.toggle("cs-active");
                if (dropdownButton) {
                    ariaExpanded(dropdownButton);
                }
                event.preventDefault() // prevents default behavior of keys (moving down the page for "space")
            };

            // Makes dropdown menus disappear upon hitting "Esc"
            if (event.key === 'Escape') {
                element.classList.remove("cs-active");
                element.focus(); // Set focus back to the element
                if (dropdownButton) {
                    ariaExpanded(dropdownButton);
                }
            };
        });

        // Makes dropdown menus disappear upon tabbing out of the menu
        element.addEventListener("focusout", function(event) {
            // Checks if the new focused element is outside of the current .cs-dropdown
            const relatedTarget = event.relatedTarget;
            if (!element.contains(relatedTarget)) {
                element.classList.remove("cs-active");
                const dropdownButton = element.querySelector(".cs-dropdown-button");
                if (dropdownButton) {
                    ariaExpanded(dropdownButton);
                }
            };
        });

        // Handles dropdown menus on mobile - matching media query (max-width: 63.9375rem) so clicks and hover don't interfere with each other on desktop
        const maxWidthMediaQuery = window.matchMedia("(max-width: 63.9375rem)");
        if (maxWidthMediaQuery.matches) {
            element.addEventListener("click", () => {
                element.classList.toggle("cs-active")
                const dropdownButton = element.querySelector(".cs-dropdown-button");
                    if (dropdownButton) {
                        ariaExpanded(dropdownButton);
                    }
            });
        };
    });

    // Redirect to the href when Enter is pressed
    const dropdownLinks = document.querySelectorAll(".cs-drop-li > .cs-li-link");
    dropdownLinks.forEach(link => {
        link.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                window.location.href = this.href;
            } 
        });
    });
});