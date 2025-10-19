import { activitiesObj } from "./activitiesObject.js";

// carousel
const activitiesSection = document.getElementById("activities-section");
if (!activitiesSection) throw new Error("Cannot find activities section");

const carouselSection = document.createElement("section");
carouselSection.id = "carousel-section";
carouselSection.setAttribute(
  "aria-label",
  "Карусель ілюстративних фото напрямів"
);
activitiesSection.parentElement!.insertBefore(
  carouselSection,
  activitiesSection
);

const carouselContainer = document.createElement("div");
carouselContainer.className = "carousel-container";
carouselSection.appendChild(carouselContainer);

const prevBtn = document.createElement("button");
prevBtn.className = "carousel-btn prev";
prevBtn.innerHTML = "&#10094;";
carouselContainer.appendChild(prevBtn);

const nextBtn = document.createElement("button");
nextBtn.className = "carousel-btn next";
nextBtn.innerHTML = "&#10095;";
carouselContainer.appendChild(nextBtn);

const carousel = document.createElement("ul");
carousel.className = "carousel";
carouselContainer.appendChild(carousel);

const images = [
  { src: "public/fop.png", alt: "Реєстраційні дії" },
  { src: "public/protection.png", alt: "Соціальний захист населення" },
  { src: "public/admin.png", alt: "Адміністративні послуги" },
  { src: "public/search.png", alt: "Довідково-інформаційні сервіси" },
  { src: "public/policeman.png", alt: "Безпека та правопорядок" },
  { src: "public/frame.png", alt: "Освітні та кадрові програми" },
  {
    src: "public/international.png",
    alt: "Міжрегіональне та міжнародне співробітництво",
  },
  { src: "public/greenSmile.png", alt: "Контроль якості надання послуг" },
  { src: "public/onlineServices.png", alt: "Цифрові сервіси" },
  { src: "public/ideas.png", alt: "Інноваційні підходи" },
];

images.forEach(({ src, alt }) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  li.appendChild(img);
  carousel.appendChild(li);
});

let currentIndex = 0;

function showImage(index: number) {
  const width = carouselContainer.clientWidth;
  carousel.style.transform = `translateX(-${index * width}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

window.addEventListener("resize", () => showImage(currentIndex));

// search
const searchInput = document.getElementById(
  "search-input"
) as HTMLInputElement | null;
if (!searchInput) throw new Error("Cant find search input");
searchInput.addEventListener("input", (event) => {
  const target = event.target as HTMLInputElement;
  if (!target) throw new Error("Target is null");
  const search = target.value.toLowerCase();
  console.log(activitiesObj);
  const arr = Object.keys(activitiesObj).filter((el) =>
    el.toLowerCase().includes(search)
  );
  console.log(arr);
  if (arr[0]) {
    const htmlId = activitiesObj[arr[0] as keyof typeof activitiesObj] as string;
    const idSplitter = htmlId.split("#");
    if(idSplitter.length!=2 || !idSplitter[1]) throw new Error("Wrongly typed id")
    const el = document.getElementById(idSplitter[1]!);
    if (!el) throw new Error("Couldn`t find element");
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.add("highlight");
    setTimeout(() => el.classList.remove("highlight"), 1000);
  } else {
    alert("За вашим запитом нічого не знайдено");
  }
});
