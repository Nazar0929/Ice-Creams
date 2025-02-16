
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







document.addEventListener("DOMContentLoaded", () => {
    const modalKrem = document.querySelector("[data-modal-krem]");
    const modalFirst = document.querySelector("[data-modal-first]");
    
    document.addEventListener("click", (e) => {
        // Открытие первого модального окна
        if (e.target.closest("[data-modal-krem-open]")) {
            modalKrem.classList.remove("is-hidden");
        }
        // Закрытие первого модального окна
        if (e.target.closest("[data-modal-krem-close]") || e.target === modalKrem) {
            modalKrem.classList.add("is-hidden");
        }

        // Открытие второго модального окна и закрытие первого
        if (e.target.closest("[data-modal-open]")) {
            modalKrem.classList.add("is-hidden");
            modalFirst.classList.remove("is-hidden");
        }

        // Закрытие второго модального окна
        if (e.target.closest("[data-modal-close]") || e.target === modalFirst) {
            modalFirst.classList.add("is-hidden");
        }
    });

    // Закрытие модальных окон по нажатию Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modalKrem.classList.add("is-hidden");
            modalFirst.classList.add("is-hidden");
        }
    });
});







document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.querySelector("[data-modal-milk-open]");
    const closeModalBtn = document.querySelector("[data-modal-milk-close]");
    const modalMilk = document.querySelector("[data-modal-milk]");

    if (openModalBtn && closeModalBtn && modalMilk) {
        openModalBtn.addEventListener("click", () => {
            modalMilk.classList.remove("is-hidden");
        });

        closeModalBtn.addEventListener("click", () => {
            modalMilk.classList.add("is-hidden");
        });

        modalMilk.addEventListener("click", (event) => {
            if (event.target === modalMilk) {
                modalMilk.classList.add("is-hidden");
            }
        });
    }
});





document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.querySelector("[data-modal-map-open]");
    const closeModalBtn = document.querySelector("[data-modal-map-close]");
    const modalMilk = document.querySelector("[data-modal-map]");

    if (openModalBtn && closeModalBtn && modalMilk) {
        openModalBtn.addEventListener("click", () => {
            modalMilk.classList.remove("is-hidden");
        });

        closeModalBtn.addEventListener("click", () => {
            modalMilk.classList.add("is-hidden");
        });

        modalMilk.addEventListener("click", (event) => {
            if (event.target === modalMilk) {
                modalMilk.classList.add("is-hidden");
            }
        });
    }
});







document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.querySelector("[data-modal-formss-open]");
    const closeModalBtn = document.querySelector("[data-modal-formss-close]");
    const modalMilk = document.querySelector("[data-modal-formss]");

    if (openModalBtn && closeModalBtn && modalMilk) {
        openModalBtn.addEventListener("click", () => {
            modalMilk.classList.remove("is-hidden");
        });

        closeModalBtn.addEventListener("click", () => {
            modalMilk.classList.add("is-hidden");
        });

        modalMilk.addEventListener("click", (event) => {
            if (event.target === modalMilk) {
                modalMilk.classList.add("is-hidden");
            }
        });
    }
});



// Получаем элемент кнопки
// Получаем элемент кнопки
const button = document.getElementById("buttons");

// Функция для контроля появления кнопки
function checkScroll() {
    const heroHeight = document.querySelector(".hero").offsetHeight;

    if (window.scrollY > heroHeight) {
        button.style.opacity = "1";
        button.style.visibility = "visible";
    } else {
        button.style.opacity = "0";
        button.style.visibility = "hidden";
    }
}

// Слушаем событие прокрутки
window.addEventListener("scroll", checkScroll);

// Запускаем проверку сразу при загрузке страницы
checkScroll();







document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.querySelector("[data-modal-photos-open]");
    const closeModalBtn = document.querySelector("[data-modal-photos-close]");
    const modalMilk = document.querySelector("[data-modal-photos]");

    if (openModalBtn && closeModalBtn && modalMilk) {
        openModalBtn.addEventListener("click", () => {
            modalMilk.classList.remove("is-hidden");
        });

        closeModalBtn.addEventListener("click", () => {
            modalMilk.classList.add("is-hidden");
        });

        modalMilk.addEventListener("click", (event) => {
            if (event.target === modalMilk) {
                modalMilk.classList.add("is-hidden");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".backdrop__listsscrolr");
    const images = document.querySelectorAll(".backdrop__sccrolsphot");
    const circles = document.querySelectorAll(".backdrop__circle");

    // Функция для активации точки
    function activateCircle(index) {
        circles.forEach(circle => circle.classList.remove("active"));
        circles[index].classList.add("active");
    }

    // Функция для центрирования картинки
    function centerImage(index) {
        const img = images[index];
        const containerWidth = scrollContainer.offsetWidth;
        const imgWidth = img.offsetWidth;
        
        const scrollX = img.offsetLeft - scrollContainer.offsetLeft - (containerWidth / 2) + (imgWidth / 2);
        scrollContainer.scrollTo({ left: scrollX, behavior: "smooth" });

        activateCircle(index);
    }

    // Привязываем кнопки к соответствующим картинкам
    circles.forEach((circle, index) => {
        circle.addEventListener("click", () => centerImage(index));
    });

    // Обработчик клика на картинку (она становится активной)
    images.forEach((img, index) => {
        img.addEventListener("click", () => centerImage(index));
    });

    // Обработчик прокрутки вручную (колесиком мыши или пальцем)
    scrollContainer.addEventListener("scroll", () => {
        let minDiff = Infinity;
        let activeIndex = 0;

        images.forEach((img, index) => {
            const imgCenter = img.offsetLeft + img.offsetWidth / 2;
            const containerCenter = scrollContainer.scrollLeft + scrollContainer.offsetWidth / 2;
            const diff = Math.abs(imgCenter - containerCenter);

            if (diff < minDiff) {
                minDiff = diff;
                activeIndex = index;
            }
        });

        activateCircle(activeIndex);
    });

    // Инициализация: первая картинка по центру
    centerImage(0);
});






