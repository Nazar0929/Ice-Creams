
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
        openFirstModalBtns: document.querySelectorAll("[data-modal-open]"), // Кнопки открытия первой модалки
        closeFirstModalBtn: document.querySelector("[data-modal-close]"),
        firstModal: document.querySelector("[data-modal-first]"),

        openSecondModalBtn: document.querySelector("[data-modal-open-second]"), // Кнопка "Next"
        closeSecondModalBtn: document.querySelector("[data-modal-close-second]"),
        secondModal: document.querySelector("[data-modal-second]"),

        openThirdModalBtn: document.querySelector("[data-modal-open-third]"), // Кнопка "Send" во втором окне
        closeThirdModalBtn: document.querySelector("[data-modal-close-third]"),
        thirdModal: document.querySelector("[data-modal-third]"),
    };

    // Открытие и закрытие первой модалки
    refs.openFirstModalBtns.forEach(btn => btn.addEventListener("click", toggleFirstModal));
    refs.closeFirstModalBtn.addEventListener("click", toggleFirstModal);
    refs.firstModal.addEventListener("click", (event) => {
        if (event.target.classList.contains("backdrop")) toggleFirstModal();
    });

    function toggleFirstModal() {
        refs.firstModal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }

    // Открытие второй модалки без закрытия первой
    refs.openSecondModalBtn.addEventListener("click", () => {
        refs.secondModal.classList.remove("is-hidden");
        document.body.classList.add("no-scroll");
    });

    // Закрытие второй модалки
    refs.closeSecondModalBtn.addEventListener("click", toggleSecondModal);
    refs.secondModal.addEventListener("click", (event) => {
        if (event.target.classList.contains("backdrop")) toggleSecondModal();
    });

    function toggleSecondModal() {
        refs.secondModal.classList.add("is-hidden");
        document.body.classList.remove("no-scroll");
    }

    // Открытие третьей модалки с нужной задержкой и закрытием вторго окна перед первым
    refs.openThirdModalBtn.addEventListener("click", () => {
        // Закрытие второго окна сразу
        refs.secondModal.classList.add("is-hidden");

        // Первое окно начинает закрываться с задержкой
        setTimeout(() => {
            refs.firstModal.classList.add("is-hidden");
        }, 500); // Задержка на закрытие первого окна (500ms)

        // Открытие третьего окна с большой задержкой
        setTimeout(() => {
            refs.thirdModal.classList.remove("is-hidden");
            document.body.classList.add("no-scroll");
        }, 1500); // Задержка на открытие третьего окна (1500ms)
    });

    // Закрытие третьей модалки
    refs.closeThirdModalBtn.addEventListener("click", toggleThirdModal);
    refs.thirdModal.addEventListener("click", (event) => {
        if (event.target.classList.contains("backdrop")) toggleThirdModal();
    });

    function toggleThirdModal() {
        refs.thirdModal.classList.add("is-hidden");
        document.body.classList.remove("no-scroll");
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





