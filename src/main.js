
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
  




document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.querySelector(".backdrop__buttons"); // Кнопка "Calculate"
    const quantityInputs = document.querySelectorAll(".backdrop__input"); // Все инпуты с количеством
    const amountInput = document.querySelectorAll(".backdrop__result")[0]; // Поле "Amount"
    const totalInput = document.querySelectorAll(".backdrop__result")[1]; // Поле "Total"

    calculateBtn.addEventListener("click", () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        const pricePerUnit = 4.25; // Цена за 1 мороженое

        quantityInputs.forEach(input => {
            const quantity = parseInt(input.value) || 0; // Берём количество
            totalQuantity += quantity;
            totalPrice += quantity * pricePerUnit;
        });

        amountInput.value = totalQuantity; // Выводим количество
        totalInput.value = `$${totalPrice.toFixed(2)}`; // Выводим сумму в Total
    });
});


