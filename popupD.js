btnAbrirPopup21 = document.getElementById('btn-abrir-popup21'),
overlay21 = document.getElementById('overlay21'),
popup21 = document.getElementById('popup21'),
btnCerrarPopup21 = document.getElementById('btn-cerrar-popup21');
btnAbrirPopup21.addEventListener('click', function(){
    overlay21.classList.add('active');
    popup21.classList.add('active');
    });
    
    btnCerrarPopup21.addEventListener('click', function(e){
    e.preventDefault();
    overlay21.classList.remove('active');
    popup21.classList.remove('active');
    })