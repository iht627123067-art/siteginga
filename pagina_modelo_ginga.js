// GINGA - Sistema de Linguagem e Interatividade

let currentLanguage = 'pt';

/**
 * Troca o idioma da página inteira
 * @param {string} lang - Código do idioma: 'pt', 'en', 'es'
 */
function changeLanguage(lang) {
    currentLanguage = lang;

    // Atualizar botões de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Atualizar todos os elementos com data-attributes de idioma
    updateElementsWithLanguage(lang);

    // Atualizar tooltips das letras GINGA
    updateGingaTooltips(lang);

    // Atualizar navegação
    updateNavigation(lang);

    // Salvar preferência
    localStorage.setItem('ginga-language', lang);
}

/**
 * Atualiza elementos HTML baseado no idioma selecionado
 * @param {string} lang - Código do idioma
 */
function updateElementsWithLanguage(lang) {
    const languageMap = {
        'pt': 'pt',
        'en': 'en',
        'es': 'es'
    };

    const selectedLang = languageMap[lang];

    // Atualizar elementos com data attributes
    document.querySelectorAll('[data-pt], [data-en], [data-es]').forEach(element => {
        const text = element.getAttribute(`data-${selectedLang}`);
        if (text) {
            // Se for um link ou botão, atualizar textContent
            if (element.tagName === 'A' || element.tagName === 'BUTTON') {
                element.textContent = text;
            } else {
                element.textContent = text;
            }
        }
    });

    // Mostrar/ocultar elementos baseado no idioma
    document.querySelectorAll('ul[data-pt], ul[data-en], ul[data-es]').forEach(list => {
        if (list.hasAttribute(`data-${selectedLang}`)) {
            list.style.display = 'block';
        } else {
            list.style.display = 'none';
        }
    });
}

/**
 * Atualiza tooltips das letras GINGA
 * @param {string} lang - Código do idioma
 */
function updateGingaTooltips(lang) {
    document.querySelectorAll('.ginga-letter').forEach(letter => {
        const tooltip = letter.getAttribute(`data-tooltip-${lang}`);
        if (tooltip) {
            letter.setAttribute('title', tooltip);
        }
    });
}

/**
 * Atualiza links de navegação
 * @param {string} lang - Código do idioma
 */
function updateNavigation(lang) {
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const text = link.getAttribute(`data-${lang}`);
        if (text) {
            link.textContent = text;
        }
    });
}

/**
 * Scroll suave para seção específica
 * @param {string} sectionId - ID da seção alvo
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offset = 80; // Altura da navegação
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

/**
 * Destaca a dimensão selecionada com animação
 * @param {string} dimensionId - ID da dimensão
 */
function expandDimension(dimensionId) {
    const dimension = document.getElementById(dimensionId);
    if (!dimension) return;

    // Remove destaque anterior
    document.querySelectorAll('.dimensao-item.highlighted').forEach(el => {
        el.classList.remove('highlighted');
    });

    // Adiciona destaque com delay para sincronizar com scroll
    setTimeout(() => {
        dimension.classList.add('highlighted');

        // Remove após 3 segundos
        setTimeout(() => {
            dimension.classList.remove('highlighted');
        }, 3000);
    }, 600);
}

/**
 * Animação de reveal ao scroll
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animação aos elementos
    const animatedElements = document.querySelectorAll('.dimensao-item, .equipe-card, .recurso-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * Navegação mobile - Toggle menu
 */
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

/**
 * Adiciona efeito de parallax suave ao símbolo hero
 */
function initParallax() {
    const symbol = document.querySelector('.symbol-large');
    if (!symbol) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * 0.3;

                if (symbol) {
                    symbol.style.transform = `translateY(${rate}px)`;
                }

                ticking = false;
            });

            ticking = true;
        }
    });
}

/**
 * Lazy loading para imagens
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

/**
 * Inicializa navegação sticky com efeito de scroll
 */
function initStickyNav() {
    const nav = document.querySelector('.main-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            nav.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
            // Scroll down
            nav.classList.remove('scroll-up');
            nav.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
            // Scroll up
            nav.classList.remove('scroll-down');
            nav.classList.add('scroll-up');
        }

        lastScroll = currentScroll;
    });
}

/**
 * Adiciona smooth scroll aos links de navegação
 */
function initSmoothScrollLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

/**
 * Detecta idioma do navegador e define como padrão
 */
function detectBrowserLanguage() {
    const savedLang = localStorage.getItem('ginga-language');

    if (savedLang) {
        changeLanguage(savedLang);
        return;
    }

    const browserLang = navigator.language || navigator.userLanguage;

    if (browserLang.startsWith('pt')) {
        changeLanguage('pt');
    } else if (browserLang.startsWith('es')) {
        changeLanguage('es');
    } else {
        changeLanguage('en');
    }
}

/**
 * Adiciona analytics/tracking (placeholder para implementação futura)
 */
function trackEvent(category, action, label) {
    // Implementar analytics conforme necessário
    console.log('Event:', category, action, label);
}

/**
 * Adiciona eventos de tracking aos elementos principais
 */
function initTracking() {
    // Track language changes
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            trackEvent('Language', 'Change', btn.dataset.lang);
        });
    });

    // Track GINGA letter clicks
    document.querySelectorAll('.ginga-letter').forEach(letter => {
        letter.addEventListener('click', () => {
            trackEvent('Navigation', 'GINGA Letter Click', letter.textContent.trim());
        });
    });

    // Track external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('External Link', 'Click', link.href);
        });
    });
}

/**
 * Inicializa funcionalidade de alternância entre letra e logo
 */
function initLetterLogoToggle() {
    document.querySelectorAll('.ginga-letter').forEach(letter => {
        let isLogoMode = false;

        // Duplo clique para travar no modo logo ou letra
        letter.addEventListener('dblclick', (e) => {
            e.preventDefault();
            isLogoMode = !isLogoMode;

            if (isLogoMode) {
                letter.classList.add('logo-locked');
            } else {
                letter.classList.remove('logo-locked');
            }

            trackEvent('GINGA Letter', 'Toggle Mode', isLogoMode ? 'Logo' : 'Letter');
        });

        // Adiciona indicação visual de que é clicável
        letter.style.cursor = 'pointer';
    });
}

/**
 * Animação de rotação automática entre letras e logos
 */
function initAutoRotation() {
    const letters = document.querySelectorAll('.ginga-letter');
    let currentIndex = 0;

    // Rotação automática a cada 3 segundos (opcional - comentado por padrão)
    /*
    setInterval(() => {
        letters.forEach((letter, index) => {
            if (index === currentIndex && !letter.classList.contains('logo-locked')) {
                letter.classList.add('show-logo-temp');
                setTimeout(() => {
                    letter.classList.remove('show-logo-temp');
                }, 1500);
            }
        });

        currentIndex = (currentIndex + 1) % letters.length;
    }, 3000);
    */
}

/**
 * Alternância automática do slider de texto na Hero com controles de dots
 */
function initTextSlider() {
    const slides = document.querySelectorAll('.text-slide');
    const dots = document.querySelectorAll('.slider-dot');
    if (slides.length < 2) return;

    let currentSlide = 0;
    let autoSlideInterval;

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        if (dots[currentSlide]) {
            dots[currentSlide].classList.remove('active');
            dots[currentSlide].setAttribute('aria-selected', 'false');
        }
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
            dots[currentSlide].setAttribute('aria-selected', 'true');
        }
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 8000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            goToSlide(index);
            startAutoSlide();
        });
    });

    startAutoSlide();
}

/**
 * Controla visibilidade do floating mini-nav baseado na posição do hero
 */
function initFloatNav() {
    const hero = document.getElementById('oque-e');
    const floatnav = document.getElementById('floatnav');

    if (!hero || !floatnav) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Mostra o floatnav quando o hero NÃO está visível
            if (!entry.isIntersecting) {
                floatnav.classList.add('visible');
            } else {
                floatnav.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.3 // Quando 30% do hero sai de vista
    });

    observer.observe(hero);
}

/**
 * ScrollSpy para destacar navegação flutuante
 */
function initScrollSpy() {
    const targets = ['governanca', 'incentivos', 'normas', 'gestao', 'ambiencia'];
    const navButtons = document.querySelectorAll('.floatnav-letter');

    window.addEventListener('scroll', () => {
        let currentId = '';
        const scrollY = window.pageYOffset;

        targets.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                const sectionTop = section.offsetTop - 150;
                const sectionHeight = section.offsetHeight;

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    currentId = id;
                }
            }
        });

        navButtons.forEach(btn => {
            btn.classList.remove('active');
            const onClick = btn.getAttribute('onclick');
            if (currentId && onClick && onClick.includes(`'${currentId}'`)) {
                btn.classList.add('active');
            }
        });
    });
}


/**
 * Inicialização quando DOM estiver pronto
 */
document.addEventListener('DOMContentLoaded', () => {
    // Detectar e definir idioma inicial
    detectBrowserLanguage();

    // Inicializar funcionalidades
    initScrollAnimations();
    initParallax();
    initLazyLoading();
    initStickyNav();
    initSmoothScrollLinks();
    initTracking();
    initLetterLogoToggle(); // Nova funcionalidade de toggle letra/logo
    initAutoRotation();      // Rotação automática (opcional)
    initTextSlider();        // Slider de texto Hero
    initFloatNav();          // Floating mini-nav
    initScrollSpy();         // ScrollSpy para navegação flutuante

    // Log de inicialização
    console.log('🎯 GINGA - Sistema inicializado com sucesso');
    console.log(`📍 Idioma atual: ${currentLanguage}`);
});

/**
 * Adiciona suporte a teclado para acessibilidade
 */
document.addEventListener('keydown', (e) => {
    // Atalhos de teclado para idiomas
    if (e.altKey) {
        switch (e.key) {
            case '1':
                changeLanguage('pt');
                break;
            case '2':
                changeLanguage('en');
                break;
            case '3':
                changeLanguage('es');
                break;
        }
    }
});

/**
 * Expor funções globais para uso no HTML
 */
window.changeLanguage = changeLanguage;
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;
window.expandDimension = expandDimension;
