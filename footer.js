function updateFooter() {
  const footer = document.querySelector("footer");
  const pElement = document.createElement("p");
  pElement.textContent = `© ${new Date().getFullYear()} Maaz's Portfolio. All rights reserved.`;
  footer.innerHTML = "";
  footer.appendChild(pElement);
}

updateFooter();