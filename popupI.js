btnAbrirPopup22 = document.getElementById('btn-abrir-popup22'),
overlay22 = document.getElementById('overlay22'),
popup22 = document.getElementById('popup22'),
btnCerrarPopup22 = document.getElementById('btn-cerrar-popup22');
btnAbrirPopup22.addEventListener('click', function(){
    overlay22.classList.add('active');
    popup22.classList.add('active');
    });
    
    btnCerrarPopup22.addEventListener('click', function(e){
    e.preventDefault();
    overlay22.classList.remove('active');
    popup22.classList.remove('active');
    })