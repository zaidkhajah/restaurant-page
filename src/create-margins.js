
function createMargin(isRight = true) {
   const m = document.createElement("div");
   m.classList.add(isRight ? "right-margin" : "left-margin");
   return m;
}

export default createMargin;