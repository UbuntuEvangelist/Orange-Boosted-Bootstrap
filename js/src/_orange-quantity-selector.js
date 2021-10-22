let stepUpButton = document.querySelector("[data-bs-step='up']");
let stepDownButton = document.querySelector("[data-bs-step='down']");
let counterInput = document.querySelector("[data-bs-step='counter']");
let counterInputValue = counterInput.value;

[stepUpButton].forEach((button) => {
  button.addEventListener("click", () => {
    if (counterInputValue >= 0) {
      counterInput.value = ++counterInputValue;
    }
  });
});

[stepDownButton].forEach((button) => {
  button.addEventListener("click", () => {
    if (counterInputValue > 0) {
      counterInput.value = --counterInputValue;
    }
  });
});
