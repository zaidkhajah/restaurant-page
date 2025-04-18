import createHomeTab from "./create-home-tab.js";
import createMargin from "./create-margins.js";
import createMenuTab from "./create-menu-tab.js";
import createAboutTab from "./create-about-tab.js"
import "./styles.css"

const [homeBtn, menuBtn, aboutBtn] = document.querySelector("nav").children;
const homeContainer = createHomeTab();
const menuContainer = createMenuTab();
const aboutContainer = createAboutTab();
const content = document.querySelector("#content");

//intially we will load the home tab;
content.append(createMargin(false));
content.append(homeContainer);
content.append(createMargin(true));


homeBtn.addEventListener("click", load(homeContainer));
menuBtn.addEventListener("click", load(menuContainer));
aboutBtn.addEventListener("click", load(aboutContainer));

function load(tab) {
    return () => {
        content.children[1].replaceWith(tab);
    };
}




