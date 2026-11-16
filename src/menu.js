const menuContainer = document.createElement("div");
menuContainer.id = "menu";

for(let i = 0; i < 4;i++){
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    
    const menuContent = document.createElement("p");
    menuContent.textContent = "Some random item";

    menuItem.append(menuContent);
    menuContainer.append(menuItem);
}
export {menuContainer};
