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

async function cargarArchivo(uuid){
    try{
        const resp = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
    if(!resp.ok) {
        throw new Error ("Erro al cargar JSON");
    }
 const projects = await resp.json();

 let title = document.getElementById("title");
 let subtitle = document.getElementById("subtitle");
 let date = document.getElementById("date");
 let img = document.getElementById("img");
 let parr = document.getElementById("parr");
 
 title.textContent = projects[3].name;
 subtitle.textContent = projects[3].description;
 date.innerHTML = `Completed on <span style="color: gray;">${projects[3].completed_on}</span>`;
 img.src = projects[3].image;
 parr.innerHTML = projects[3].content;
} catch(error) {
    console.error("Error:", error);
}
}