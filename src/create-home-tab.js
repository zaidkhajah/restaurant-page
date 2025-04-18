import mangoLogo from "./mng-logo.png";
// import batLogo from "./bat-coffee.png"

function createHomeTab() {
    const logo = document.createElement("img");
    logo.src = mangoLogo;

    const welcomeContainer = document.createElement("div");
    const h2Line = document.createElement("h2");
    h2Line.textContent = "You’ve Just Landed in Flavor Paradise";
    const pline = document.createElement("p");
    pline.textContent = "Kick back, relax, and let the golden taste of mango take you on a culinary journey";
    welcomeContainer.append(h2Line, pline);

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-tab");
    homeContainer.append(logo, welcomeContainer);
    
    return homeContainer;
}

export default createHomeTab;