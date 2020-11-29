btnAbrirPopup24 = document.getElementById('btn-abrir-popup24'),
overlay24 = document.getElementById('overlay24'),
popup24 = document.getElementById('popup24'),
btnCerrarPopup24 = document.getElementById('btn-cerrar-popup24');
btnAbrirPopup24.addEventListener('click', function(){
    overlay24.classList.add('active');
    popup24.classList.add('active');
    });
    
    btnCerrarPopup24.addEventListener('click', function(e){
    e.preventDefault();
    overlay24.classList.remove('active');
    popup24.classList.remove('active');
    })