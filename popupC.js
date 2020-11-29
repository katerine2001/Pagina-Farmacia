btnAbrirPopup25 = document.getElementById('btn-abrir-popup25'),
overlay25 = document.getElementById('overlay25'),
popup25 = document.getElementById('popup25'),
btnCerrarPopup25 = document.getElementById('btn-cerrar-popup25');
btnAbrirPopup25.addEventListener('click', function(){
    overlay25.classList.add('active');
    popup25.classList.add('active');
    });
    
    btnCerrarPopup25.addEventListener('click', function(e){
    e.preventDefault();
    overlay25.classList.remove('active');
    popup25.classList.remove('active');
    })