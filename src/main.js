
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-header-open]"),
      closeModalBtn: document.querySelector("[data-modal-header-close]"),
      modal: document.querySelector("[data-header-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();



  (() => {
    const refs = {
      openModalBtns: document.querySelectorAll("[data-modal-open]"), // выбираем ВСЕ кнопки
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtns.forEach(btn => btn.addEventListener("click", toggleModal)); // добавляем обработчик на каждую кнопку
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();
  
