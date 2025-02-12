function openLink(url) {
    window.open(url, '_blank'); 
}



document.addEventListener('DOMContentLoaded', function() {
    // Código para rolagem suave
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });


    
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    const imagem = document.querySelector('.img-animada');
    const logoimg = document.querySelector('.img-logo')
    
    toggleDarkModeButton.addEventListener('click', function() {
        // Alternar entre o modo escuro e claro
        document.body.classList.toggle('dark-mode');
    
        // Alternar o texto do botão
        if (document.body.classList.contains('dark-mode')) {
            toggleDarkModeButton.textContent = 'Modo Claro';
            imagem.src = 'profileDark.png';
            logoimg.src = 'logomzDark.png';
        } else {
            toggleDarkModeButton.textContent = 'Modo Escuro';
            imagem.src = 'profile.png'; 
            logoimg.src = 'logomz.png';
        }
    });
    
});
