/* ========================================== 
   MOBILE MENU JAVASCRIPT - FIXED VERSION
   Replace your existing mobile menu JS with this
========================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownColumns = document.querySelectorAll('.dropdown-column');
    
    // ========================================== 
    // MOBILE MENU TOGGLE
    // ========================================== 
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            // Toggle classes
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.classList.toggle('menu-open');
            
            console.log('Menu toggled:', navMenu.classList.contains('active'));
        });
    }
    
    // ========================================== 
    // CLOSE MENU - Click outside
    // ========================================== 
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 1024) {
            if (navMenu && navMenu.classList.contains('active')) {
                // Check if click is outside menu and not on toggle button
                if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                    closeMenu();
                }
            }
        }
    });
    
    // ========================================== 
    // CLOSE MENU - Click on overlay
    // ========================================== 
    if (body) {
        body.addEventListener('click', function(e) {
            if (e.target === body && body.classList.contains('menu-open')) {
                closeMenu();
            }
        });
    }
    
    // ========================================== 
    // PRODUCTS DROPDOWN TOGGLE (Mobile only)
    // ========================================== 
    if (dropdownToggle && dropdown) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (window.innerWidth < 1024) {
                dropdown.classList.toggle('active');
                console.log('Dropdown toggled:', dropdown.classList.contains('active'));
            }
        });
    }
    
    // ========================================== 
    // ACCORDION for Product Categories (Mobile)
    // ========================================== 
    dropdownColumns.forEach(function(column) {
        const header = column.querySelector('.column-header');
        
        if (header) {
            header.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                if (window.innerWidth < 1024) {
                    // Close all other columns
                    dropdownColumns.forEach(function(otherColumn) {
                        if (otherColumn !== column) {
                            otherColumn.classList.remove('expanded');
                        }
                    });
                    
                    // Toggle current column
                    column.classList.toggle('expanded');
                    console.log('Column expanded:', column.querySelector('h4').textContent);
                }
            });
        }
    });
    
    // ========================================== 
    // CLOSE MENU - When clicking on product links
    // ========================================== 
    const productLinks = document.querySelectorAll('.dropdown-column > a');
    productLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth < 1024) {
                closeMenu();
                // Also close the dropdown and accordion
                if (dropdown) {
                    dropdown.classList.remove('active');
                }
                dropdownColumns.forEach(function(col) {
                    col.classList.remove('expanded');
                });
            }
        });
    });
    
    // ========================================== 
    // CLOSE MENU - When clicking on regular nav links
    // ========================================== 
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth < 1024) {
                closeMenu();
            }
        });
    });
    
    // ========================================== 
    // HELPER FUNCTION - Close Menu
    // ========================================== 
    function closeMenu() {
        if (mobileToggle) mobileToggle.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
        if (body) body.classList.remove('menu-open');
        
        console.log('Menu closed');
    }
    
    // ========================================== 
    // WINDOW RESIZE - Reset on desktop
    // ========================================== 
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth >= 1024) {
                // Desktop mode - reset everything
                closeMenu();
                if (dropdown) dropdown.classList.remove('active');
                dropdownColumns.forEach(function(col) {
                    col.classList.remove('expanded');
                });
            }
        }, 250);
    });
    
    // ========================================== 
    // PREVENT BODY SCROLL when menu open
    // ========================================== 
    if (navMenu) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'class') {
                    if (navMenu.classList.contains('active')) {
                        body.style.overflow = 'hidden';
                    } else {
                        body.style.overflow = '';
                    }
                }
            });
        });
        
        observer.observe(navMenu, {
            attributes: true
        });
    }
    
    // ========================================== 
    // ESCAPE KEY - Close menu
    // ========================================== 
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    console.log('Mobile menu script loaded successfully');
});

// ========================================== 
// NAVBAR SCROLL EFFECT
// ========================================== 
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ========================================== 
// BACK TO TOP BUTTON
// ========================================== 
const backToTop = document.querySelector('.back-to-top');

if (backToTop) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================== 
// SMOOTH SCROLL for anchor links
// ========================================== 
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#!') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});