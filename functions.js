function openLink(url) {
    window.open(url, "_blank"); // Abre o link em uma nova aba
}

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
    const menuClose = document.getElementById('menu-close');
    const menu = document.getElementById('menu-mobile');
    const header = document.querySelector('header');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            // Alterna a classe 'active' no menu
            menu.classList.toggle('active');
        });
    }

    if (menuClose && menu) {
        menuClose.addEventListener('click', function() {
            // Remove a classe 'active' para fechar o menu
            menu.classList.remove('active');
        });
    }

    // Fecha o menu se clicar fora do header
    document.addEventListener('click', function(event) {
        if (!header.contains(event.target) && menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });

    // Modo escuro
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    const imagem = document.querySelector('.img-animada');
    const logoimg = document.querySelector('.img-logo');

    if (toggleDarkModeButton) {
        toggleDarkModeButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');

            if (document.body.classList.contains('dark-mode')) {
                toggleDarkModeButton.textContent = 'Light';
                imagem.src = 'profileDark.png';
                logoimg.src = 'logomzDark.png';
            } else {
                toggleDarkModeButton.textContent = 'Dark';
                imagem.src = 'profile.png'; 
                logoimg.src = 'logomz.png';
            }
        });
    }
});
