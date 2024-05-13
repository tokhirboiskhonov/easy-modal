// Selectors
const modalContainer = document.getElementById("modalContainer");
const openModalBtn1 = document.querySelector("#openModalBtn-1");
const openModalBtn2 = document.querySelector("#openModalBtn-2");
const openModalBtn3 = document.querySelector("#openModalBtn-3");
const closeModalBtn = document.getElementById("closeModalBtn");

// Event Listener
openModalBtn1.addEventListener("click", openModal);
openModalBtn2.addEventListener("click", openModal);
openModalBtn3.addEventListener("click", openModal);
modalContainer.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);

// Functions
function openModal() {
  modalContainer.style.display = "block";
  document.addEventListener("keydown", closeModalOnEsc);
}

function closeModal() {
  modalContainer.style.display = "none";
  document.removeEventListener("keydown", closeModalOnEsc);
}

function closeModalOnEsc(evt) {
  if (evt.keyCode === 27) closeModal();
}
