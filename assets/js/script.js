function initMenu() {
    const opener = document.querySelector(".menu-opener");
    const nav = document.querySelector("nav");
  
    function ativarMenu() {
      nav.classList.toggle("ativar");
    }
    opener.addEventListener("click", ativarMenu);
  }
  initMenu();