document.addEventListener('DOMContentLoaded', function() {
    // Código para rolagem suave
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Menu hamburguer
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu-mobile');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            // Alterna a classe 'active' no menu
            menu.classList.toggle('active');
        });
    }

    // Modo escuro
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    const imagem = document.querySelector('.img-animada');
    const logoimg = document.querySelector('.img-logo');

    if (toggleDarkModeButton) {
        toggleDarkModeButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');

            if (document.body.classList.contains('dark-mode')) {
                toggleDarkModeButton.textContent = '☀︎ㅤ';
                imagem.src = 'profileDark.png';
                logoimg.src = 'logomzDark.png';
            } else {
                toggleDarkModeButton.textContent = 'ㅤ⏾';
                imagem.src = 'profile.png'; 
                logoimg.src = 'logomz.png';
            }
        });
    }
});
