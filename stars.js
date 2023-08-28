generateStars();
function generateStars() {
  const starsContainer = document.querySelector(".background-stars");
  const numStars = 900;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    starsContainer.appendChild(star);
  }
}
