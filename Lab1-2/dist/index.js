import { activitiesObj } from "./activitiesObject.js";
const baseUrl = "activities.html";
const dropDownMenu = document.createElement("ul");
dropDownMenu.style.position = "absolute";
dropDownMenu.style.display = "flex";
dropDownMenu.style.flexDirection = "column";
dropDownMenu.style.background = "#fff";
dropDownMenu.style.border = "1px solid #ccc";
dropDownMenu.style.borderRadius = "5px";
dropDownMenu.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
dropDownMenu.style.margin = "0";
dropDownMenu.style.listStyle = "none";
dropDownMenu.style.minWidth = "200px";
Object.keys(activitiesObj).forEach((key) => {
    const li = document.createElement("li");
    li.textContent = key;
    li.style.padding = "8px 15px";
    li.style.cursor = "pointer";
    li.style.transition = "background 0.2s";
    li.addEventListener("click", () => {
        const articleId = activitiesObj[key];
        window.location.href = `${baseUrl}${articleId}`;
    });
    li.addEventListener("mouseover", (event) => {
        event.stopPropagation();
        li.style.background = "#f0f0f0";
    });
    li.addEventListener("mouseout", (event) => {
        event.stopPropagation();
        li.style.background = "transparent";
    });
    dropDownMenu.appendChild(li);
});
const directionsLiElement = document.getElementById("activities-li");
if (!directionsLiElement)
    throw new Error("Cant find direction button");
directionsLiElement.style.position = "relative";
directionsLiElement?.append(dropDownMenu);
directionsLiElement.addEventListener("mouseenter", () => {
    dropDownMenu.style.display = "flex";
});
directionsLiElement.addEventListener("mouseleave", () => {
    dropDownMenu.style.display = "none";
});
//# sourceMappingURL=index.js.map