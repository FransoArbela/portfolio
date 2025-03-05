const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("on-hover")
    const hoverDisplay = document.createElement("div");
    hoverDisplay.className = "hover";

    const paragraph = card.querySelector("p");
    // Clone the paragraph so the original stays intact
    const clonedParagraph = paragraph.cloneNode(true);
    clonedParagraph.style.display = "block";
    hoverDisplay.appendChild(clonedParagraph);

    card.appendChild(hoverDisplay);
  });

  card.addEventListener("mouseleave", () => {
    const hover = card.querySelector(".hover");
    if (hover) {
      card.removeChild(hover);
      card.classList.remove("on-hover");
    }
  });
});
