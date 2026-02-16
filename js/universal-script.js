/* ========================================== 
   UNIVERSAL JAVASCRIPT FOR ALL PAGES
   Mobile Menu + Navigation + Search + Modal
========================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================== 
    // MOBILE MENU TOGGLE
    // ========================================== 
    const mobileToggle = document.querySelector('.mobile-toggle') || document.getElementById('mobileToggle');
    const navMenu = document.querySelector('.nav-menu') || document.getElementById('navMenu');
    const body = document.body;
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownColumns = document.querySelectorAll('.dropdown-column');
    
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
        if (window.innerWidth <= 1024) {
            if (navMenu && navMenu.classList.contains('active')) {
                // Check if click is outside menu and not on toggle button
                if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                    closeMenu();
                }
            }
        }
    });
    
    // ========================================== 
    // PRODUCTS DROPDOWN TOGGLE (Mobile only)
    // ========================================== 
    if (dropdownToggle && dropdown) {
        dropdownToggle.addEventListener('click', function(e) {
            if (window.innerWidth < 1024) {
                e.preventDefault();
                e.stopPropagation();
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
                if (window.innerWidth < 1024) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Close all other columns
                    dropdownColumns.forEach(function(otherColumn) {
                        if (otherColumn !== column) {
                            otherColumn.classList.remove('expanded');
                        }
                    });
                    
                    // Toggle current column
                    column.classList.toggle('expanded');
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
        if (e.key === 'Escape') {
            if (navMenu && navMenu.classList.contains('active')) {
                closeMenu();
            }
            // Also close quote modal if open
            const quoteModal = document.getElementById('quoteModal');
            if (quoteModal && quoteModal.classList.contains('active')) {
                closeQuoteModal();
            }
        }
    });
    
    console.log('Mobile menu script loaded successfully');
});

// ========================================== 
// NAVBAR SCROLL EFFECT
// ========================================== 
const navbar = document.getElementById('navbar') || document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ========================================== 
// BACK TO TOP BUTTON
// ========================================== 
const backToTop = document.getElementById('backToTop') || document.querySelector('.back-to-top');
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

// ==========================================
// ACTIVE NAV LINK ON SCROLL
// ==========================================
const sections = document.querySelectorAll('section[id]');
if (sections.length > 0) {
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ==========================================
// QUOTE MODAL FUNCTIONS
// ==========================================
function openQuoteModal() {
    const modal = document.getElementById('quoteModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeQuoteModal() {
    const modal = document.getElementById('quoteModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Make functions global
window.openQuoteModal = openQuoteModal;
window.closeQuoteModal = closeQuoteModal;

// Close modal on outside click
const quoteModal = document.getElementById('quoteModal');
if (quoteModal) {
    quoteModal.addEventListener('click', function (e) {
        if (e.target === this) {
            closeQuoteModal();
        }
    });
}

// Modal form submission
const modalQuoteForm = document.getElementById('modalQuoteForm');
if (modalQuoteForm) {
    modalQuoteForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const successMsg = document.getElementById('modalSuccess');
        if (successMsg) {
            successMsg.classList.add('show');
        }
        this.reset();
        setTimeout(() => {
            if (successMsg) {
                successMsg.classList.remove('show');
            }
            closeQuoteModal();
        }, 3000);
    });
}

// ==========================================
// PRODUCT PAGE IMAGE GALLERY
// ==========================================
function changeImage(imageSrc, element) {
    const mainImage = element.closest('.product-images').querySelector('.main-image img');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
}

window.changeImage = changeImage;

// ==========================================
// SEARCH BOX FUNCTIONALITY
// ==========================================
const searchBox = document.getElementById('searchBox');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const suggestions = document.getElementById('suggestions');

// Products data for search (if it exists)
if (typeof products !== 'undefined' && searchBox && searchInput && searchBtn && suggestions) {
    
    // Render suggestions
    function renderSuggestions(list) {
        suggestions.innerHTML = '';
        const displayList = list.slice(0, 4);
        
        displayList.forEach(product => {
            const item = document.createElement('a');
            item.href = product.link;
            item.textContent = product.name;
            suggestions.appendChild(item);
        });

        suggestions.style.display = "block";
    }

    // Toggle on button click
    searchBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        searchBox.classList.toggle("active");

        if (searchBox.classList.contains("active")) {
            searchInput.focus();
            if (typeof products !== 'undefined') {
                renderSuggestions(products);
            }
        } else {
            suggestions.style.display = "none";
            searchInput.value = "";
        }
    });

    // Filter while typing
    searchInput.addEventListener("input", function () {
        const value = this.value.toLowerCase();

        if (value.length === 0) {
            if (typeof products !== 'undefined') {
                renderSuggestions(products);
            }
            return;
        }

        if (typeof products !== 'undefined') {
            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(value)
            );

            if (filtered.length === 0) {
                suggestions.style.display = "none";
                return;
            }

            renderSuggestions(filtered);
        }
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
        if (!searchBox.contains(e.target)) {
            searchBox.classList.remove("active");
            suggestions.style.display = "none";
            searchInput.value = "";
        }
    });
}

/* ========================================== 
   PRODUCT IMAGE GALLERY SWITCHER
   Works for Passenger, Home, Hospital Lifts, etc.
========================================== */
function initImageGalleries() {
    // Find all product sections on the page
    const productSections = document.querySelectorAll('.product-detail-section');

    productSections.forEach(section => {
        const mainImg = section.querySelector('.main-image img');
        const thumbnails = section.querySelectorAll('.thumbnail-list img');

        if (mainImg && thumbnails.length > 0) {
            thumbnails.forEach(thumb => {
                // Change cursor to pointer so user knows it's clickable
                thumb.style.cursor = 'pointer';

                thumb.addEventListener('click', function() {
                    // 1. Update the main image source
                    mainImg.src = this.src;

                    // 2. Visual feedback: Highlight active thumbnail
                    thumbnails.forEach(t => {
                        t.style.opacity = '0.6';
                        t.style.border = '2px solid transparent';
                    });
                    
                    this.style.opacity = '1';
                    this.style.border = '2px solid #1e3a8a'; // Your primary blue color
                });
            });
        }
    });
}

// Run the function
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImageGalleries);
} else {
    initImageGalleries();
}
