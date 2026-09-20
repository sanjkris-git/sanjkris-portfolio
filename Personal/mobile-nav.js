(() => {
    const projectItem = [...document.querySelectorAll('.nav-menu li')].find((item) => {
        const link = item.querySelector('a');
        return link && link.getAttribute('href') === 'Projects.html';
    });

    if (!projectItem) {
        return;
    }

    const arrow = document.createElement('button');
    arrow.className = 'mobile-project-toggle';
    arrow.type = 'button';
    arrow.setAttribute('aria-label', 'Open projects menu');
    arrow.setAttribute('aria-expanded', 'false');
    arrow.innerHTML = '<span aria-hidden="true"></span>';

    const menu = document.createElement('div');
    menu.className = 'mobile-project-menu';
    menu.setAttribute('aria-hidden', 'true');
    menu.innerHTML = `
        <a href="Code.html">Code</a>
        <a href="Resume.html">Resume</a>
    `;

    projectItem.classList.add('has-mobile-project-menu');
    projectItem.querySelector('a').after(arrow);
    projectItem.append(menu);

    arrow.addEventListener('click', () => {
        const isOpen = projectItem.classList.toggle('menu-open');
        arrow.setAttribute('aria-expanded', String(isOpen));
        menu.setAttribute('aria-hidden', String(!isOpen));
    });

    document.querySelectorAll('.carousel').forEach((carousel) => {
        let startX = 0;
        let startY = 0;

        carousel.addEventListener('touchstart', (event) => {
            if (event.touches.length !== 1) {
                return;
            }

            startX = event.touches[0].clientX;
            startY = event.touches[0].clientY;
        }, { passive: true });

        carousel.addEventListener('touchend', (event) => {
            if (window.matchMedia('(min-width: 769px)').matches || !startX) {
                return;
            }

            const endX = event.changedTouches[0].clientX;
            const endY = event.changedTouches[0].clientY;
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            const swipeDistance = 40;

            if (Math.abs(deltaX) < swipeDistance || Math.abs(deltaX) <= Math.abs(deltaY)) {
                return;
            }

            const buttonSelector = deltaX < 0 ? '.carousel-button.next' : '.carousel-button.prev';
            carousel.querySelector(buttonSelector)?.click();
            startX = 0;
            startY = 0;
        }, { passive: true });
    });
})();
