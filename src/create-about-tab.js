
function createAboutTab() {
    const aboutTab = document.createElement("div");
    aboutTab.classList.add("about-tab")
    const h2 = document.createElement("h2");
    h2.textContent = "At The Golden Mango, we believe that great food is a celebration — of flavor, color, and culture.";

    const p = document.createElement("p");
    p.textContent = "Inspired by the sun-kissed richness of mangoes, our restaurant brings together bold tropical ingredients, handcrafted recipes, and a love for culinary storytelling. Every dish on our menu is thoughtfully created using fresh, seasonal ingredients, with mango at the heart of many of our signature offerings. From zesty starters to creamy desserts, we blend tradition with creativity to serve you meals that are both comforting and adventurous. Whether you're here for a casual lunch, a romantic dinner, or a refreshing smoothie after a long day — you'll always find a little sunshine on your plate.";
    aboutTab.append(h2, p);
    return aboutTab;
}

export default createAboutTab;