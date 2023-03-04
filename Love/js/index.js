'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const nowZomosNobios = () => {
    Swal.fire({
      title: 'Sabias que...',
      text:'Eres el int i de mi bluce for, por ti mi cabeza da vueltas ',
      imageUrl:'img/img1.gif',
      imgWidth: '10%',
      confirmButtonText: 'Siguiente',
  
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          title:'Sabias que...',
          text:'Eres como un ID, irrepetible',
          imageUrl:'img/img2.gif',
          imgWidth: '10%',
          confirmButtonText: 'Siguiente',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire({
              title:'Sabias que...',
              text:'Eres el ; que siempre me falta para que funcione todo',
              imageUrl:'img/img3.gif',
              imgWidth: '10%',
              confirmButtonText: 'Siguiente',
            })
          } 
        })
      } 
    })
  };




  const evitarKCRompanMyBobo = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };

  

  heroButtonSi.addEventListener('click', nowZomosNobios);
 
  heroButtonNo.addEventListener('mouseover', evitarKCRompanMyBobo);
};

document.addEventListener('DOMContentLoaded', documentReady);