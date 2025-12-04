// Kur faqja është e ngarkuar plotësisht
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('navbarToggle'); // butoni për menu mobile
    const navbarMenu = document.getElementById('navbarMenu');     // menuja që hapet/mbyllet

    if (navbarToggle && navbarMenu) {
        // kur klikojmë butonin e toggle
        navbarToggle.addEventListener('click', function () {
            navbarToggle.classList.toggle('is-active'); // ndryshon klasën për animacion
            navbarMenu.classList.toggle('is-active');   // hap/mbyll menunë

            // ndryshon atributin aria-expanded për aksesibilitet
            const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
            navbarToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }
});

// Vendos vitin aktual në footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear(); // shfaq vitin e tanishëm
}
