btnAbrirPopup26 = document.getElementById('btn-abrir-popup26'),
overlay26 = document.getElementById('overlay26'),
popup26 = document.getElementById('popup26'),
btnCerrarPopup26 = document.getElementById('btn-cerrar-popup26');

btnAbrirPopup26.addEventListener('click', function(){
overlay26.classList.add('active');
popup26.classList.add('active');
});

btnCerrarPopup26.addEventListener('click', function(e){
e.preventDefault();
overlay26.classList.remove('active');
popup26.classList.remove('active');
})