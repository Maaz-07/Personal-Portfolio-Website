function typeText(element, text, speed) {
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
      setTimeout(type, speed);
    }
  }

  type();
}

function typeMultipleTexts(elements, speed, delay) {
  elements.forEach((element, index) => {
    setTimeout(() => {
      typeText(element, element.getAttribute("data-text"), speed);
    }, index * delay);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll(".typing-animation");

  typeMultipleTexts(elements, 40, 8000);

  const aboutSection = document.querySelector(".fade-in");
  aboutSection.classList.add("visible");
});
