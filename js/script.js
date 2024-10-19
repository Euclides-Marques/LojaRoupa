function updateLogoVisibility() {
    const logo = document.getElementById('Iconlogo');
    if (window.innerWidth < 992) {
        logo.src = 'img/iconLogo.png'; 
        logo.style.display = 'block'; 
    } else {
        logo.src = 'img/logo.png'; 
        logo.style.display = 'none'; 
    }
}

window.onload = updateLogoVisibility;

window.onresize = updateLogoVisibility;

