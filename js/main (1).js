// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ==========================================
// BACK TO TOP BUTTON
// ==========================================
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

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

// Close modal on outside click
const quoteModal = document.getElementById('quoteModal');
if (quoteModal) {
    quoteModal.addEventListener('click', function (e) {
        if (e.target === this) {
            closeQuoteModal();
        }
    });
}

// Close modal on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeQuoteModal();
    }
});

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

// Make functions global
window.openQuoteModal = openQuoteModal;
window.closeQuoteModal = closeQuoteModal;

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
// QUOTE FORM PAGE (quote.html)
// ==========================================
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
            successMessage.classList.add('show');
        }

        this.reset();

        if (successMessage) {
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        setTimeout(() => {
            if (successMessage) {
                successMessage.classList.remove('show');
            }
        }, 5000);
    });
}
