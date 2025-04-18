import mangoLogo from "./mng-logo.png";
// import batLogo from "./bat-coffee.png"

function createHomeTab() {
    const headline = document.createElement("h1");
    headline.textContent = "THE GOLDEN MANGO";

    const logo = document.createElement("img");
    logo.src = mangoLogo;

    const h2Line = document.createElement("h2");
    h2Line.textContent = "Where everything is fresh as a Golden Mango";

    const homeContainer = document.createElement("div");
    homeContainer.append(headline, logo, h2Line);
    
    return homeContainer;
}

export default createHomeTab;