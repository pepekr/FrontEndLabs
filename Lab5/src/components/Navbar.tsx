import React, { useState } from "react";
import "../styles/home.css"; 

import { activitiesObj } from "../activitiesObject";
import { useNavigate } from "react-router-dom";

const baseUrl = "/activities";

function Navbar() {
  const [isActive, setIsActive] = useState(false); // mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // activities dropdown
   const navigate = useNavigate();
  const toggleMenu = () => setIsActive(!isActive);
  const closeMenu = () => setIsActive(false);

  const handleDropdownClick = (key: string) => {
    const articleId = activitiesObj[key as keyof typeof activitiesObj];
    navigate( `${baseUrl}${articleId}`);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`overlay ${isActive ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      <header className="header">
        <div className="logo-div">
          <img
            src="/logo.png"
            alt="Логотип Районної державної адміністрації"
            width="70"
          />
          <h1 className="logo-header">
            Голосіївська районна державна адміністрація
          </h1>
        </div>

        {/* Burger button */}
        <button
          className="menu-toggle"
          aria-label="Відкрити меню"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Navigation menu */}
        <nav
          className={`nav-menu ${isActive ? "active" : ""}`}
          aria-label="Головна навігація"
        >
          <ul>
            {/* Activities with dropdown */}
            <li
              id="activities-li"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              style={{ position: "relative" }}
            >
              <a href="/activities" onClick={closeMenu}>
                Напрями діяльності
              </a>

              {isDropdownOpen && (
                <ul
                  className="dropdown-menu"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    display: "flex",
                    flexDirection: "column",
                    background: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    minWidth: "200px",
                    zIndex: 50,
                  }}
                >
                  {Object.keys(activitiesObj).map((key) => (
                    <li
                      key={key}
                      onClick={() => handleDropdownClick(key)}
                      style={{
                        padding: "8px 15px",
                        cursor: "pointer",
                        transition: "background 0.2s",
                      }}
                      onMouseOver={(e) => {
                        (e.currentTarget as HTMLLIElement).style.background =
                          "#f0f0f0";
                      }}
                      onMouseOut={(e) => {
                        (e.currentTarget as HTMLLIElement).style.background =
                          "transparent";
                      }}
                    >
                      {key}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Other links */}
            <li>
              <a href="/feedback" onClick={closeMenu}>
                Зворотний зв’язок
              </a>
            </li>
            <li>
              <a href="#contacts" onClick={closeMenu}>
                Контакти
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Перейти у власний кабінет
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Зареєструватись
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
