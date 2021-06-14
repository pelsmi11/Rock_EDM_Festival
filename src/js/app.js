document.addEventListener('DOMContentLoaded', function(){
    scrollNav();

    navegacionFija();
    scrollNavHome();
});

function navegacionFija(){

    const barra = document.querySelector('.header');

   // Registrar el Intersection Observer
   const observer = new IntersectionObserver( function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }else{
            barra.classList.add('fijo');
        }
   });
   
    // Elemento a observar 
//    observer.observe(document.querySelector('.sobre-festival'));
    observer.observe(document.querySelector('.video'));
}

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(function(enlace){
        
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            
            seccion.scrollIntoView({
                
                behavior: 'smooth'
            });
        });
    });
    
}
function scrollNavHome(){
    const enlaces = document.querySelector('.home--rock');
    console.log(enlaces);
        
        enlaces.addEventListener('click', function(e){
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            console.log(e.target.attributes.href.value);
            
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    
    
}