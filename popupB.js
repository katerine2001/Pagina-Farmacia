btnAbrirPopup18 = document.getElementById('btn-abrir-popup18'),
overlay18 = document.getElementById('overlay18'),
popup18 = document.getElementById('popup18'),
btnCerrarPopup18 = document.getElementById('btn-cerrar-popup18');
btnAbrirPopup18.addEventListener('click', function(){
    overlay18.classList.add('active');
    popup18.classList.add('active');
    });
    
    btnCerrarPopup18.addEventListener('click', function(e){
    e.preventDefault();
    overlay18.classList.remove('active');
    popup18.classList.remove('active');
    })