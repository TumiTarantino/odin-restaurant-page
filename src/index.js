import "./styles.css";
import { homeContainer } from "./home.js";
console.log("Hi there, i ammm.....");

const content = document.querySelector("#content");
content.append(homeContainer);
// this works, but the home container is last in the DOM, i guess this is because the rest of the html hasnt been made into js, so it loads first and exists first in the dom