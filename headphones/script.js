// Ensure the DOM is fully loaded before executing the script.
document.addEventListener('DOMContentLoaded', () => {
    // Select the hamburger menu icon
    const menuIcon = document.querySelector('.menu-icon');
    // Select the navigation links list
    const navLinks = document.querySelector('.nav-links');
    // Select the hidden checkbox (though we will directly toggle classes now)
    const menuToggleCheckbox = document.getElementById('menu-toggle');

    // Add a click event listener to the menu icon
    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            // Toggle the 'active' class on the navLinks list.
            // This class will control the visibility and animation of the mobile menu.
            navLinks.classList.toggle('active');

            // Optionally, update the checkbox state for accessibility or if
            // any CSS was still tied to :checked pseudo-class.
            menuToggleCheckbox.checked = navLinks.classList.contains('active');

            // Toggle the hamburger icon between bars and times (X) for visual feedback
            const icon = menuIcon.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // Change to 'X' icon
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars'); // Change back to bars icon
            }
        });

        // Optional: Close the menu when a link is clicked (for better UX)
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggleCheckbox.checked = false; // Uncheck the checkbox
                    menuIcon.querySelector('i').classList.remove('fa-times');
                    menuIcon.querySelector('i').classList.add('fa-bars');
                }
            });
        });
    } else {
        console.error("Hamburger menu elements not found. Please ensure .menu-icon and .nav-links exist in your HTML.");
    }
});
