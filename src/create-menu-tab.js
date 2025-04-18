
import goldenMangoMenu from "./golden-mango-menu.js";

function createMenuTab() {
    const menuContainer = document.createElement("div");
    for (const [menuSectionName, menuSectionItems] of Object.entries(goldenMangoMenu)) {
        menuContainer.appendChild( createMenuSection( menuSectionName,  menuSectionItems) );
    }
    return menuContainer;
}

function createMenuItem(name, description, price) {
    const item = document.createElement("li");

    const nElement = document.createElement("p");
    nElement.textContent = `${name}`;

    const dElement = document.createElement("p");
    dElement.textContent = `${description}`;

    const pElement = document.createElement("p");
    pElement.textContent = `$${price}`;
    
    item.append(nElement, dElement, pElement);
    return item;
}

function createMenuSection(sectionName, sectionItems) {
    const sectionContainer = document.createElement("div");

    const sectionHead = document.createElement("h2");
    sectionHead.textContent = sectionName;
    
    const sectionItemsList = document.createElement("ul");
    sectionItems.forEach(
        sectionItem => sectionItemsList.append(createMenuItem(...sectionItem))
    );
    sectionContainer.append(sectionHead, sectionItemsList);
    return sectionContainer;
}

export default createMenuTab;