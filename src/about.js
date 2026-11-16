const aboutContainer = document.createElement("div");
aboutContainer.id = "about";

const p1 = document.createElement("p");
p1.textContent = "This is the about page";

aboutContainer.append(p1);

export {aboutContainer};