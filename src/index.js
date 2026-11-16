import "./styles.css";
import { homeContainer } from "./home.js";
import { menuContainer } from "./menu.js";
import { aboutContainer } from "./about.js";

console.log("Hi there, i ammm.....");

const content = document.querySelector("#content");
content.append(homeContainer);
//content.append(menuContainer);
//content.append(aboutContainer);
// this works, but the home container is last in the DOM, i guess this is because the rest of the html hasnt been made into js, so it loads first and exists first in the dom FIXED

//How would i create "tabs?"

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

homeBtn.addEventListener("click",() => {
    content.replaceChildren();
    content.append(homeContainer);
})

menuBtn.addEventListener("click",() => {
    content.replaceChildren();
    content.append(menuContainer);
})

aboutBtn.addEventListener("click",() => {
    content.replaceChildren();
    content.append(aboutContainer);
})