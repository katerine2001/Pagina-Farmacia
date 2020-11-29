btnAbrirPopup20 = document.getElementById('btn-abrir-popup20'),
overlay20 = document.getElementById('overlay20'),
popup20 = document.getElementById('popup20'),
btnCerrarPopup20 = document.getElementById('btn-cerrar-popup20');
btnAbrirPopup20.addEventListener('click', function(){
    overlay20.classList.add('active');
    popup20.classList.add('active');
    });
    
    btnCerrarPopup20.addEventListener('click', function(e){
    e.preventDefault();
    overlay20.classList.remove('active');
    popup20.classList.remove('active');
    })