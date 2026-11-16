//I guess i'll use this as the template for the home page?

const homeContainer = document.createElement("div");
homeContainer.id = "home";

const h1HomeHeader = document.createElement("h1");
h1HomeHeader.textContent = "The Nugget Cave";

const p1 = document.createElement("p");
p1.textContent = "Here we have all kinds of nuggets, the best nuggets";

const p2 = document.createElement("p");
p2.textContent = "All the nuggets!!!";

homeContainer.append(h1HomeHeader,p1,p2);

export {homeContainer};
