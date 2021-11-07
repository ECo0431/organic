const MENUBURGER = document.querySelector("#picto-menu-burger");
const MENUPICTO = document.querySelector("#menu-picto");
const PICTOCLOSE = document.querySelector("#picto-close");

MENUBURGER.addEventListener("click", ()=>{
    MENUPICTO.classList.remove("none");
    PICTOCLOSE.classList.remove("none");
});

PICTOCLOSE.addEventListener("click", ()=>{
    MENUPICTO.classList.add("none");
    PICTOCLOSE.classList.add("none");
});