function createMenuItems(number=4){
    const menuContainer = document.createElement("div");
    menuContainer.id = "menu";

    for(let i = 0; i < number;i++){
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        
        const menuContent = document.createElement("p");
        menuContent.textContent = "Some random item";

        menuItem.append(menuContent);
        menuContainer.append(menuItem);
    }
    return menuContainer;
}
export {createMenuItems};
