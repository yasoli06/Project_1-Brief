const burguer = document.getElementById("burguer");
const burguerMenu = document.querySelector(".hidden-nav");

burguer.addEventListener("click", () => {
  if (
    burguerMenu.className === `hidden-nav hidden-nav-active`
  ) {
    burguerMenu.className = `hidden-nav`;

    burguer.innerHTML = `<div class="burguer-line"></div>
        <div class="burguer-line"></div>
        <div class="burguer-line"></div>`;
  } else {
    burguerMenu.className = `hidden-nav hidden-nav-active`;

    burguer.innerHTML = `<div class="burguer-line-yellow"></div>
        <div class="burguer-line-yellow"></div>
        <div class="burguer-line-yellow"></div>`;
  }
});

