btnAbrirPopup23 = document.getElementById('btn-abrir-popup23'),
overlay23 = document.getElementById('overlay23'),
popup23 = document.getElementById('popup23'),
btnCerrarPopup23 = document.getElementById('btn-cerrar-popup23');
btnAbrirPopup23.addEventListener('click', function(){
    overlay23.classList.add('active');
    popup23.classList.add('active');
    });
    
    btnCerrarPopup23.addEventListener('click', function(e){
    e.preventDefault();
    overlay23.classList.remove('active');
    popup23.classList.remove('active');
    })