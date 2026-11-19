import "./styles.css";
import { createHomePage } from "./home.js";
import { createMenuItems } from "./menu.js";
import { createAboutPage } from "./about.js";

console.log("Hi there, i ammm.....");

//const content = document.querySelector("#content");
//content.append(createHomePage());
console.log(document.body.innerHTML);
console.log(document.querySelector("#content"));
//content.append(menuContainer);
//content.append(aboutContainer);
// this works, but the home container is last in the DOM, i guess this is because the rest of the html hasnt been made into js, so it loads first and exists first in the dom FIXED

//How would i create "tabs?"

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

homeBtn.addEventListener("click",() => {
    content.replaceChildren();
    content.append(createHomePage());
})

menuBtn.addEventListener("click",() => {
    content.replaceChildren();
    content.append(createMenuItems());
})

aboutBtn.addEventListener("click",() => {
    content.replaceChildren();
    content.append(createAboutPage());
})