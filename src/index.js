import createHomeTab from "./create-home-tab.js";
import createMenuTab from "./create-menu-tab.js";

const [homeBtn, menuBtn, aboutBtn] = document.querySelector("nav").children;
const homeContainer = createHomeTab();
const menuContainer = createMenuTab();
const content = document.querySelector("#content");

//intially we will load the home tab;
load(homeContainer)();

homeBtn.addEventListener("click", load(homeContainer));
menuBtn.addEventListener("click", load(menuContainer));

function load(tab) {
    return () => {
        content.innerHTML = "";
        content.append(tab);
    };
}




