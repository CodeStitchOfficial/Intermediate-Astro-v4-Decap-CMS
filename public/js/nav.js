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

    ///// Handling keyboard navigation dropdown menus on desktop /////
    const dropdownElements = document.querySelectorAll(".cs-dropdown");
    dropdownElements.forEach(element => {
        
        element.addEventListener("keydown", function(event) {
            // Makes dropdown menus appear upon hitting "Enter" or "Spacebar"
            if (event.key === "Enter" || event.key === " ") {
                element.classList.toggle("cs-active");
                ariaExpanded(element)
                event.preventDefault() // prevents default behavior of keys (moving down the page for "space")
            };

            // Makes dropdown menus disappear upon hitting "Esc"
            if (event.key === 'Escape') {
                element.classList.remove("cs-active");
                element.focus(); // Set focus back to the element
                ariaExpanded(element)
            };
        });

        // Makes dropdown menus disappear upon tabbing out of the menu
        element.addEventListener("focusout", function(event) {
            // Check if the new focused element is outside of the current .cs-dropdown
            const relatedTarget = event.relatedTarget;
            if (!element.contains(relatedTarget)) {
                element.classList.remove("cs-active");
                ariaExpanded(element)
            };
        });
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