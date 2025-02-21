(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-header-open]"),
      closeModalBtn: document.querySelector("[data-modal-header-close]"),
      modal: document.querySelector("[data-header-modal]"),
    };

    if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
        refs.openModalBtn.addEventListener("click", toggleModal);
        refs.closeModalBtn.addEventListener("click", toggleModal);
    }

    function toggleModal() {
        if (refs.modal) {
            refs.modal.classList.toggle("is-hidden");
        }
    }
})();

(() => {
    const refs = {
        openFirstModalBtns: document.querySelectorAll("[data-modal-open]"),
        closeFirstModalBtn: document.querySelector("[data-modal-close]"),
        firstModal: document.querySelector("[data-modal-first]"),

        openSecondModalBtn: document.querySelector("[data-modal-open-second]"),
        closeSecondModalBtn: document.querySelector("[data-modal-close-second]"),
        secondModal: document.querySelector("[data-modal-second]"),

        openThirdModalBtn: document.querySelector("[data-modal-open-third]"),
        closeThirdModalBtn: document.querySelector("[data-modal-close-third]"),
        thirdModal: document.querySelector("[data-modal-third]"),
    };

    if (refs.openFirstModalBtns && refs.closeFirstModalBtn && refs.firstModal) {
        refs.openFirstModalBtns.forEach(btn => btn.addEventListener("click", toggleFirstModal));
        refs.closeFirstModalBtn.addEventListener("click", toggleFirstModal);
        refs.firstModal.addEventListener("click", (event) => {
            if (event.target.classList.contains("backdrop")) toggleFirstModal();
        });
    }

    function toggleFirstModal() {
        if (refs.firstModal) {
            refs.firstModal.classList.toggle("is-hidden");
            document.body.classList.toggle("no-scroll");
        }
    }

    if (refs.openSecondModalBtn && refs.closeSecondModalBtn && refs.secondModal) {
        refs.openSecondModalBtn.addEventListener("click", () => {
            refs.secondModal.classList.remove("is-hidden");
            document.body.classList.add("no-scroll");
        });

        refs.closeSecondModalBtn.addEventListener("click", toggleSecondModal);
        refs.secondModal.addEventListener("click", (event) => {
            if (event.target.classList.contains("backdrop")) toggleSecondModal();
        });
    }

    function toggleSecondModal() {
        if (refs.secondModal) {
            refs.secondModal.classList.add("is-hidden");
            document.body.classList.remove("no-scroll");
        }
    }

    if (refs.openThirdModalBtn && refs.closeThirdModalBtn && refs.thirdModal) {
        refs.openThirdModalBtn.addEventListener("click", () => {
            if (refs.secondModal) {
                refs.secondModal.classList.add("is-hidden");
            }

            setTimeout(() => {
                if (refs.firstModal) {
                    refs.firstModal.classList.add("is-hidden");
                }
            }, 500);

            setTimeout(() => {
                if (refs.thirdModal) {
                    refs.thirdModal.classList.remove("is-hidden");
                    document.body.classList.add("no-scroll");
                }
            }, 1500);
        });

        refs.closeThirdModalBtn.addEventListener("click", toggleThirdModal);
        refs.thirdModal.addEventListener("click", (event) => {
            if (event.target.classList.contains("backdrop")) toggleThirdModal();
        });
    }

    function toggleThirdModal() {
        if (refs.thirdModal) {
            refs.thirdModal.classList.add("is-hidden");
            document.body.classList.remove("no-scroll");
        }
    }
})();

document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.querySelector(".backdrop__buttons");
    const quantityInputs = document.querySelectorAll(".backdrop__input");
    const amountInput = document.querySelectorAll(".backdrop__result")[0];
    const totalInput = document.querySelectorAll(".backdrop__result")[1];

    if (calculateBtn && quantityInputs.length && amountInput && totalInput) {
        calculateBtn.addEventListener("click", () => {
            let totalQuantity = 0;
            let totalPrice = 0;
            const pricePerUnit = 4.25;

            quantityInputs.forEach(input => {
                const quantity = parseInt(input.value) || 0;
                totalQuantity += quantity;
                totalPrice += quantity * pricePerUnit;
            });

            amountInput.value = totalQuantity;
            totalInput.value = `$${totalPrice.toFixed(2)}`;
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const modalKrem = document.querySelector("[data-modal-krem]");
    const modalFirst = document.querySelector("[data-modal-first]");
    
    if (modalKrem && modalFirst) {
        document.addEventListener("click", (e) => {
            if (e.target.closest("[data-modal-krem-open]")) {
                modalKrem.classList.remove("is-hidden");
            }

            if (e.target.closest("[data-modal-krem-close]") || e.target === modalKrem) {
                modalKrem.classList.add("is-hidden");
            }

            if (e.target.closest("[data-modal-open]")) {
                modalKrem.classList.add("is-hidden");
                modalFirst.classList.remove("is-hidden");
            }

            if (e.target.closest("[data-modal-close]") || e.target === modalFirst) {
                modalFirst.classList.add("is-hidden");
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                modalKrem.classList.add("is-hidden");
                modalFirst.classList.add("is-hidden");
            }
        });
    }
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

const button = document.getElementById("buttons");

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

window.addEventListener("scroll", checkScroll);
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

    if (scrollContainer && images.length && circles.length) {
        function activateCircle(index) {
            circles.forEach(circle => circle.classList.remove("active"));
            circles[index].classList.add("active");
        }

        function centerImage(index) {
            const img = images[index];
            const containerWidth = scrollContainer.offsetWidth;
            const imgWidth = img.offsetWidth;

            const scrollX = img.offsetLeft - scrollContainer.offsetLeft - (containerWidth / 2) + (imgWidth / 2);
            scrollContainer.scrollTo({ left: scrollX, behavior: "smooth" });

            activateCircle(index);
        }
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
    }});
    