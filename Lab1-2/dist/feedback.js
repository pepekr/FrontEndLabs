const detailsTextarea = document.getElementById("details");
if (!detailsTextarea)
    throw new Error("Textarea 'details' not found");
const tooltip = document.createElement("div");
tooltip.textContent = "Вдячні за Ваш час! Конкретизуйте мету звернення, будь ласка.";
tooltip.className = "tooltip";
document.body.appendChild(tooltip);
detailsTextarea.addEventListener("mouseenter", () => {
    detailsTextarea.classList.add("highlighted");
    tooltip.classList.add("visible");
    const rect = detailsTextarea.getBoundingClientRect();
    tooltip.style.top = `${rect.top + window.scrollY}px`;
    tooltip.style.left = `${rect.right + 10 + window.scrollX}px`;
});
detailsTextarea.addEventListener("mouseleave", () => {
    detailsTextarea.classList.remove("highlighted");
    tooltip.classList.remove("visible");
});
export {};
//# sourceMappingURL=feedback.js.map