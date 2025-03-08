const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const visitBtn = card.querySelector("#visit-btn");
  const githubLink = card.querySelector("#github-link");

  githubLink.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  card.addEventListener("click", function() {
    visitBtn.click();
  });
});
