import React, { useState, useRef } from "react";
import ActivityArticle from "../../components/ActivityArticle";
import { activitiesObj } from "../../activitiesObject";
import "../../styles/activities.css"
const activitiesData = [
  {
    id: "registration-actions-article",
    title: "Реєстраційні дії",
    description:
      "Надання послуг із державної реєстрації юридичних та фізичних осіб-підприємців. Взаємодія з Міністерством юстиції України.",
    imgSrc: "/fop.png",
    imgAlt: "Ілюстрація напряму Реєстраційні дії",
  },
  {
    id: "social-protection-article",
    title: "Соціальний захист населення",
    description:
      "Забезпечення реалізації державної політики у сфері соціального захисту та надання допомоги вразливим категоріям населення.",
    imgSrc: "/protection.png",
    imgAlt: "Ілюстрація напряму Соціальний захист населення",
  },
  {
    id: "admin-services-article",
    title: "Адміністративні послуги",
    description:
      "Організація та надання громадянам доступних адміністративних послуг. Координація роботи центрів надання адмінпослуг.",
    imgSrc: "/admin.png",
    imgAlt: "Ілюстрація напряму Адміністративні послуги",
  },
  {
    id: "info-services-article",
    title: "Довідково-інформаційні сервіси",
    description:
      "Надання актуальної інформації щодо роботи органів влади та місцевого самоврядування.",
    imgSrc: "/search.png",
    imgAlt: "Ілюстрація напряму Довідково-інформаційні сервіси",
  },
  {
    id: "safety-article",
    title: "Безпека та правопорядок",
    description:
      "Розробка та реалізація заходів для підтримки громадської безпеки.",
    imgSrc: "/policeman.png",
    imgAlt: "Ілюстрація напряму Безпека та правопорядок",
    link: {
      href: "https://mvs.gov.ua/contacts/national-police-ukraine",
      text: "Співпраця з Національною поліцією та службами цивільного захисту",
    },
  },
  {
    id: "education-article",
    title: "Освітні та кадрові програми",
    description:
      "Організація навчання для працівників адміністрації та проведення підвищення кваліфікації.",
    imgSrc: "/frame.png",
    imgAlt: "Ілюстрація напряму Освітні та кадрові програми",
  },
  {
    id: "international-article",
    title: "Міжрегіональне та міжнародне співробітництво",
    description:
      "Розвиток партнерських відносин з іншими регіонами та міжнародними організаціями.",
    imgSrc: "/international.png",
    imgAlt: "Ілюстрація напряму Міжрегіональне та міжнародне співробітництво",
  },
  {
    id: "quality-article",
    title: "Контроль якості надання послуг",
    description:
      "Моніторинг якості обслуговування громадян і впровадження механізмів покращення роботи адміністрації.",
    imgSrc: "/greenSmile.png",
    imgAlt: "Ілюстрація напряму Контроль якості надання послуг",
    link: {
      href: "https://golos.kyivcity.gov.ua/administratsiia/pryiom-hromadian",
      text: "Зв'язок з державними органами влади",
    },
  },
  {
    id: "online-services",
    title: "Цифрові сервіси",
    description:
      "Розвиток електронних послуг для громадян: онлайн-звернення, подача електронних заяв, доступ до відкритих даних.",
    imgSrc: "/onlineServices.png",
    imgAlt: "Ілюстрація напряму Цифрові сервіси",
  },
  {
    id: "ideas",
    title: "Інноваційні підходи",
    description:
      "Запровадження сучасних технологій та інновацій у діяльність органів державної влади.",
    imgSrc: "/ideas.png",
    imgAlt: "Ілюстрація напряму Інноваційні підходи",
  },
];

const Activities: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const keys = Object.keys(activitiesObj);
    const matched = keys.find((k) =>
      k.toLowerCase().includes(term.toLowerCase())
    );

    if (matched) {
      const htmlId =
        activitiesObj[matched as keyof typeof activitiesObj] as string;
        const id  = htmlId.split("#")[1]
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        element.classList.add("highlight");
        setTimeout(() => element.classList.remove("highlight"), 1000);
      }
    } else if (term) {
      alert("За вашим запитом нічого не знайдено");
    }
  };

  return (
    <>
      <header className="header">
        <div className="logo-div">
          <img
            src="/logo.png"
            alt="Логотип Районної державної адміністрації"
            width={100}
          />
          <h1 className="logo-header">
            Голосіївська районна державна адміністрація
          </h1>
        </div>
        <nav aria-label="Головна навігація">
          <a href="/" role="button">
            До головної сторінки
          </a>
          <input
            id="search-input"
            type="text"
            placeholder="Пошук по напрямах"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </nav>
      </header>

      <main>
        <section id="activities-section" aria-labelledby="activities-title">
          <h2 id="activities-title">Напрями діяльності</h2>
          <ul>
            {activitiesData.map((activity) => (
              <li key={activity.id}>
                <ActivityArticle {...activity} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Activities;
