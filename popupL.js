btnAbrirPopup19 = document.getElementById('btn-abrir-popup19'),
overlay19 = document.getElementById('overlay19'),
popup19 = document.getElementById('popup19'),
btnCerrarPopup19 = document.getElementById('btn-cerrar-popup19');
btnAbrirPopup19.addEventListener('click', function(){
    overlay19.classList.add('active');
    popup19.classList.add('active');
    });
    
    btnCerrarPopup19.addEventListener('click', function(e){
    e.preventDefault();
    overlay19.classList.remove('active');
    popup19.classList.remove('active');
    })