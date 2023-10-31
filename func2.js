function initMobile() {
  // Код для бургер-меню
  const burgerMenu = document.querySelector('.burger-menu');
  const navbarMenu = document.querySelector('.navbar-menu');
  burgerMenu.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
  });

  // Код для отправки формы и отображения модального окна
  const modal = document.getElementById('myModal');
  const btn = document.getElementById('submit-button');
  const nameInput = document.getElementById("name-input-zwei");
  const contactInput = document.getElementById("contact-input-zwei");
  const span = document.querySelector('#myModal .close');

  btn.addEventListener('click', (event) => {
    event.preventDefault();

    if (nameInput.value.trim() === '' || contactInput.value.trim() === '') {
        alert('Bitte füllen Sie alle Felder aus.');
        return;
    }

    const formData = new FormData();
    formData.append('contact', nameInput.value); 
    formData.append('message', contactInput.value);

    fetch('', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    })
    .then(() => {
        nameInput.value = "";
        contactInput.value = "";
        modal.style.display = 'block';
    })
    .catch(error => {
        console.error("There was an error sending the form", error);
    });
});


  span.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });

  // Код для второго модального окна
  const contactPopup = document.getElementById('contact-popup');
  const closeContactPopup = document.querySelector('.pop-up-content .close'); // Селектор изменён для ясности

  document.querySelector('.rounded-button').addEventListener('click', () => {
    contactPopup.style.display = 'flex';
  });

  closeContactPopup.addEventListener('click', () => {
    contactPopup.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target == contactPopup) {
      contactPopup.style.display = 'none';
    }
  });
   // Код для третьего модального окна
   const contactInfoPopup = document.getElementById('contact-info-popup');
   const closeContactInfoPopup = document.querySelector('#contact-info-popup .close');
   
   document.querySelector('#contact-popup .pop-up-button:first-child').addEventListener('click', () => {
       contactInfoPopup.style.display = 'flex';
       // Закрываем первый попап при открытии второго
       document.getElementById('contact-popup').style.display = 'none';
   });
   
   closeContactInfoPopup.addEventListener('click', () => {
       contactInfoPopup.style.display = 'none';
   });
   
   window.addEventListener('click', (event) => {
       if (event.target == contactInfoPopup) {
           contactInfoPopup.style.display = 'none';
       }
   });
   const detailsPopup = document.getElementById('details-popup');
  const detailsButton = document.querySelector('.pop-up-buttons .pop-up-button:nth-child(2)'); // предполагаем, что кнопка 'Kontaktdetails hinterlassen' вторая в .pop-up-buttons
  
  detailsButton.addEventListener('click', () => {
    detailsPopup.style.display = 'flex';
  });

  document.querySelector('#details-popup .close').addEventListener('click', () => {
    detailsPopup.style.display = 'none';
  });
  // Находим элемент кнопки "Kontakt aufnehmen" по ID
const kontaktButton = document.getElementById('kontakt-button');
const nameInputPopup = document.getElementById("name-input");
const contactInputPopup = document.getElementById("contact-input");

kontaktButton.addEventListener('click', function(event) {
  event.preventDefault();

  if (nameInputPopup.value.trim() === '' || contactInputPopup.value.trim() === '') {
      alert('Bitte füllen Sie alle Felder aus.');
      return;
  }

  const formData = new FormData();
  formData.append('contact', nameInputPopup.value);
  formData.append('message', contactInputPopup.value);

  fetch('https://formspree.io/f/xdoryoqr', {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
  })
  .then(() => {
      nameInputPopup.value = "";
      contactInputPopup.value = "";
      document.getElementById('details-popup').style.display = 'none';
      document.getElementById('myModal').style.display = 'block';
  })
  .catch(error => {
      console.error("There was an error sending the form", error);
  });
});
document.querySelector(".rounded-button_2").addEventListener("click", function(event) {
  event.preventDefault(); // Предотвращаем стандартное поведение кнопки
  const targetElement = document.getElementById("dienstleistungen");
  
  if (targetElement) {
      targetElement.scrollIntoView({
          behavior: "smooth" // Плавная прокрутка
      });
  }
});



}
// Если вы хотите, чтобы функции выполнялись при загрузке страницы, то:
document.addEventListener('DOMContentLoaded', initMobile);
