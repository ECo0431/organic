const MENUBURGER = document.querySelector("#picto-menu-burger");
const MENUPICTO = document.querySelector("#menu-picto");
const PICTOCLOSE = document.querySelector("#picto-close");
const PICTOREDUIRE = document.querySelector("#picto-reduire");
const MENUVERTICAL = document.querySelector('#menu-vertical');
const PICTOAFFICHER = document.querySelector('#picto-afficher');

console.log(PICTOAFFICHER)

MENUBURGER.addEventListener("click", ()=>{
    MENUPICTO.classList.remove("none");
    PICTOCLOSE.classList.remove("none");
});

PICTOCLOSE.addEventListener("click", ()=>{
    MENUPICTO.classList.add("none");
    PICTOCLOSE.classList.add("none");
});

PICTOREDUIRE.addEventListener("click", ()=>{
    MENUVERTICAL.classList.add("none");
    PICTOAFFICHER.classList.remove("none");
});

PICTOAFFICHER.addEventListener("click", ()=>{
    MENUVERTICAL.classList.remove("none");
    PICTOAFFICHER.classList.add("none");
});