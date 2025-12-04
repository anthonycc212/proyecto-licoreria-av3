

document.addEventListener("DOMContentLoaded", () => {

  console.log("Página cargada correctamente.");


  const scrollBtn = document.getElementById("scrollUp");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


  const enlaces = document.querySelectorAll('nav ul li a');

  enlaces.forEach(enlace => {
    enlace.addEventListener('click', e => {
      const href = enlace.getAttribute('href');

      if (href.startsWith("#")) {
        e.preventDefault();
        const seccion = document.querySelector(href);
        if (seccion) {
          seccion.scrollIntoView({ behavior: 'smooth' });
        }
      }
     
    });
  });


  const botonHero = document.querySelector('.hero button');
  if (botonHero) {
    botonHero.addEventListener('click', () => {
      const seccionDestino = document.querySelector('#servicios') || document.querySelector('section');
      if (seccionDestino) {
        seccionDestino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }


  const tarjetas = document.querySelectorAll('.tarjeta');

  const mostrarTarjetas = () => {
    const alturaVentana = window.innerHeight;

    tarjetas.forEach(tarjeta => {
      const distancia = tarjeta.getBoundingClientRect().top;

      if (distancia < alturaVentana - 100) {
        tarjeta.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', mostrarTarjetas);
  mostrarTarjetas();





const btnHamburguesa = document.querySelector(".hamburguesa"); 

const menuNav = document.getElementById("menuNav"); 

if (btnHamburguesa && menuNav) {
    btnHamburguesa.addEventListener("click", () => {
      
        btnHamburguesa.classList.toggle("active");
        
        menuNav.classList.toggle("active");
    });
}
});