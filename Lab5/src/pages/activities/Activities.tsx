import React from "react";
import ActivityArticle from "../../components/ActivityArticle";
import "../../styles/activities.css";
import { activitiesData } from "./activitiesData";
import useSearch from "./useSearch";
import { useCarousel } from "./useCarousel";
import { useNavigate } from "react-router-dom";

const Activities: React.FC = () => {
  const { searchTerm, handleSearch } = useSearch();
  const {
    handleNext,
    handlePrev,
    carouselRef,
    containerRef,
  } = useCarousel(activitiesData);
  const navigate = useNavigate();

  const filteredActivities = activitiesData
  // const filteredActivities = activitiesData.filter((activity) =>
  //   activity.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

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
          <a onClick={(e)=>
            {
              e.preventDefault();
               navigate("/") 
            }}  role="button">
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
        {/* === Carousel Section === */}
        <section
          id="carousel-section"
          aria-label="Карусель ілюстративних фото напрямів"
        >
          <div className="carousel-container" ref={containerRef}>
            <button className="carousel-btn prev" onClick={handlePrev}>
              &#10094;
            </button>

            <ul className="carousel" ref={carouselRef}>
              {activitiesData.map((activity) => (
                <li key={activity.id}>
                  <img
                    src={activity.imgSrc}
                    alt={activity.imgAlt}
                    title={activity.title}
                  />
                </li>
              ))}
            </ul>

            <button className="carousel-btn next" onClick={handleNext}>
              &#10095;
            </button>
          </div>
        </section>

        {/* === Activities Section === */}
        <section id="activities-section" aria-labelledby="activities-title">
          <h2 id="activities-title">Напрями діяльності</h2>
          <ul>
            {filteredActivities.map((activity) => (
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
