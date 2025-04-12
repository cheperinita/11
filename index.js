

// montañas
// GitHub Repo : https://github.com/aryan-tayal/Mountains-Parallax
// Live Site : https://aryan-tayal.github.io/Mountains-Parallax/

const mountainLeft = document.querySelector('#mountain_left');
const mountainRight = document.querySelector('#mountain_right');
const cloud1 = document.querySelector('#clouds_1');
const cloud2 = document.querySelector('#clouds_2');
const der = document.querySelector('#der');
const izq = document.querySelector('#izq');
const text = document.querySelector('#text');
const man = document.querySelector('#man');


window.addEventListener('scroll',()=>{
    let value = scrollY;
    mountainLeft.style.left = `-${value/0.7}px`
    cloud2.style.left = `-${value*2}px`
    izq.style.left = `-${value*3}px`
    mountainRight.style.left = `${value/0.7}px`
    cloud1.style.left = `${value*2}px`
    der.style.left = `${value*3}px`
    text.style.bottom = `-${value}px`
    man.style.height = `${window.innerHeight - value}px`

});


const cliptrebol = document.querySelector('#cliptrebol'); // Selecciona por ID
const floresecascorason = document.querySelector('#floresecascorason');
const corasones = document.querySelector('#corasones');
const gusanito = document.querySelector('#gusanito');
// Inicialmente, la imagen está fuera de la pantalla (derecha)
cliptrebol.style.transform = 'translateX(100%)'; // 100% del ancho del elemento
floresecascorason.style.transform = 'translateX(100%)';
corasones.style.transform = 'translateX(-100%)';
gusanito.style.transform = 'translateX(-100%)';


window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const triggerScroll = 800; // Ajusta este valor para cambiar cuándo termina la animación

    // Calcula el progreso (0 a 1) y mueve la imagen desde translateX(100%) hasta translateX(0)
    const progress = Math.min(scrollY / triggerScroll, 1); // Limita a 1
    const movement = 100 - (progress * 100); // De 100% a 0%

    cliptrebol.style.transform = `translateX(${movement}%)`;
   
});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const triggerScroll = 700; // Ajusta este valor para cambiar cuándo termina la animación

  // Calcula el progreso (0 a 1) y mueve la imagen desde translateX(100%) hasta translateX(0)
  const progress = Math.min(scrollY / triggerScroll, 1); // Limita a 1
  const delayedProgress = Math.max((scrollY - 200) / triggerScroll, 0);
  const movement = 100 - (progress * 100); // De 100% a 0%

  floresecascorason.style.transform = `translateX(${movement}%)`;
});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const triggerScroll = 700; // Mismo punto de activación que antes
  
  // Progreso (0 a 1) y retraso opcional
  const progress = Math.min(scrollY / triggerScroll, 1); 
  const delayedProgress = Math.max((scrollY - 140) / triggerScroll, 0); // Retraso de 200px
  
  // Movimiento desde -100% (izquierda) hasta 0% (posición original)
  const movement = -100 + (delayedProgress * 100); // Invierte la dirección: -100 → 0
  
  corasones.style.transform = `translateX(${movement}%)`;
});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const triggerScroll = 500; // Mismo punto de activación que antes
  
  // Progreso (0 a 1) y retraso opcional
  const progress = Math.min(scrollY / triggerScroll, 1); 
  const delayedProgress = Math.max((scrollY - 280) / triggerScroll, 0); // Retraso de 200px
  
  // Movimiento desde -100% (izquierda) hasta 0% (posición original)
  const movement = -100 + (delayedProgress * 100); // Invierte la dirección: -100 → 0
  
  gusanito.style.transform = `translateX(${movement}%)`;
});