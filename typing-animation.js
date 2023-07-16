document.addEventListener("DOMContentLoaded", function () {
  const text = [
    "I'm Maaz, a zealous programmer with a love for coding and problem-solving. I enjoy working on diverse projects and expanding my skills in various technologies.",
    "I am currently a dedicated and passionate student at Fast-NU with a strong interest in programming and technology. As an aspiring developer, I am eager to learn and explore various programming languages and tools.",
  ];

  const typingAnimation = document.getElementById("typing-animation");
  let paragraphIndex = 0;
  let characterIndex = 0;

  function typeText() {
    const currentParagraph = text[paragraphIndex];

    if (characterIndex <= currentParagraph.length) {
      typingAnimation.innerHTML = currentParagraph.substring(0, characterIndex);
      characterIndex++;
      setTimeout(typeText, 40);
    } else if (paragraphIndex < text.length - 1) {
      paragraphIndex++;
      characterIndex = 0;
      typingAnimation.innerHTML += "<br><br>";
      setTimeout(typeText, 40);
    }
  }
  typeText();
});
