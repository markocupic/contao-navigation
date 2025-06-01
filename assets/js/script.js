/**
 * Header dropdown navigation script for Contao CMS (pure vanilla script)
 * @author Marko Cupic, Oberkirch 2023
 */
window.addEventListener('DOMContentLoaded', () => {
    const hideSubmenus = () => {
        const navItems = document.querySelectorAll('.mod_navigation .contao-nav--nav-item.contao-nav--has-dropdown:not(.contao-nav--dropdown-toggle)');

        for (const elNavItem of navItems) {
            hideSubmenu(elNavItem);
        }
    }

    const hideSubmenu = (elNavItem) => {
        const toggleBtn = elNavItem.querySelector('.contao-nav--dropdown-toggle');
        toggleBtn?.setAttribute('aria-expanded', 'false');
        toggleBtn?.classList.remove('show');

        const dropdownMenu = elNavItem.querySelector('.contao-nav--dropdown-menu');
        dropdownMenu?.classList.remove('show');
    }

    // Close all submenus, before open a new one
    const links = document.querySelectorAll('.mod_navigation .level_1 > .contao-nav--nav-item > a, .mod_navigation .level_1 > .contao-nav--nav-item > .contao-nav--dropdown-toggle, .mod_navigation .level_1 > .contao-nav--nav-item > strong.active');

    for (const link of links) {

        link.addEventListener('click', (eventClick) => {
            const parentNavItem = link.closest('.contao-nav--nav-item:not(.contao-nav--dropdown-toggle)');
            if (!parentNavItem.classList.contains('contao-nav--has-dropdown')) {
                return true;
            }

            let shouldOpen = true;

            if (parentNavItem.querySelector('.contao-nav--dropdown-menu.show')) {
                shouldOpen = false;
            }

            eventClick.stopPropagation();
            eventClick.preventDefault();

            if (!shouldOpen) {
                hideSubmenus();
                return true;
            }

            const promise = new Promise(resolve => {
                hideSubmenus();
                resolve('done');
            });

            promise.then(valueResolve => {
                const toggleBtn = parentNavItem.querySelector('.contao-nav--dropdown-toggle');
                toggleBtn.setAttribute('aria-expanded', 'true');
                toggleBtn.classList.add('show');

                const dropdownMenu = parentNavItem.querySelector(':scope > .contao-nav--dropdown-menu');
                dropdownMenu.classList.add('show');
            });

            return false;
        });
    }


    // Hide dropdowns on window resize
    window.addEventListener('resize', function (e) {
        e.preventDefault();
        hideSubmenus();
    });

    // Hide dropdowns on scroll
    window.addEventListener('scroll', function (e) {
        //e.preventDefault();
        //hideSubmenus();
    });

    // Hide dropdown, when clicking outside
    document.addEventListener('click', function (e) {
        // child
        const clickedEl = e.target;

        // parent
        const navigation = document.querySelector('.mod_navigation .level_1:has(li.contao-nav--has-dropdown)');

        // Use this helper function, to check if an element is a child of a given parent element
        const contains = (parent, child) => {
            return parent !== child && parent.contains(child);
        }

        if (!Object.is(clickedEl, navigation) && !contains(navigation, clickedEl)) {
            hideSubmenus();
        }
    });
});
