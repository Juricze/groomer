document.addEventListener('DOMContentLoaded', function () {

    // Inicializace AOS (Animate on Scroll)
    AOS.init({
        duration: 800, // Trvání animace v ms
        once: true, // Animace se spustí pouze jednou
        offset: 50, // Spustí se 50px předtím, než je prvek viditelný
    });

    // Změna stylu navigace při skrolování
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Plynulé skrolování pro navigační odkazy
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Zjistíme, zda odkaz směřuje na kotvu na stejné stránce
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                const targetElement = document.querySelector(hash);
                if(targetElement) {
                    const navbarHeight = navbar.offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });

                    // Zavření mobilního menu po kliknutí
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                            toggle: false
                        });
                        bsCollapse.hide();
                    }
                }
            }
        });
    });

    // Smooth scroll for the scroll-down arrow
    const scrollDownArrow = document.querySelector('.scroll-down-arrow');
    if (scrollDownArrow) {
        scrollDownArrow.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector('#services'); // Target the Services section
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight; // Reuse existing navbarHeight
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    }

});
