const steps = document.querySelectorAll(".stp");
const circleSteps = document.querySelectorAll(".step");
const formInputs = document.querySelectorAll(".step-1 form input");
let currentStep = 1;
let currentCircle = 0;

steps.forEach((step) => {
  const nextBtn = step.querySelector(".next-stp");
  const prevBtn = step.querySelector(".prev-stp");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      document.querySelector(`.step-${currentStep}`).style.display = "none";
      currentStep--;
      document.querySelector(`.step-${currentStep}`).style.display = "flex";
      circleSteps[currentCircle].classList.remove("active");
      currentCircle--;
    });
  }
  nextBtn.addEventListener("click", () => {
    document.querySelector(`.step-${currentStep}`).style.display = "none";
    if (currentStep < 5 && validateForm()) {
      currentStep++;
      currentCircle++;
    }
    document.querySelector(`.step-${currentStep}`).style.display = "flex";
    circleSteps[currentCircle].classList.add("active");
  });
});

function validateForm() {
  let valid = true;
  formInputs.forEach(input => {
    if (!input.value) {
      valid = false;
      input.classList.add("err");
      findLabel(input).nextElementSibling.style.display = "flex";
    } else {
      input.classList.remove("err");
      findLabel(input).nextElementSibling.style.display = "none";
    }
  });
  return valid;
}

function findLabel(el) {
  const idVal = el.id;
  const labels = document.getElementsByTagName("label");
  for (let i = 0; i < labels.length; i++) {
    if (labels[i].htmlFor === idVal) return labels[i];
  }
}