import "../../styles/feedback.css";
import useHandleSubmit from "./useHandleSubmit";
import useMouseEvents from "./useMouseEvents";

const Feedback = () => {
  const { handleSubmit, formRef } = useHandleSubmit();
  const {
    handleMouseEnter,
    handleMouseLeave,
    tooltipPos,
    tooltipVisible,
    detailsRef,
  } = useMouseEvents();

  return (
    <div className="feedback-form">
      <header>
        <nav>
          <a className="back-button" href="/" role="button">
            До головної сторінки
          </a>
        </nav>
      </header>

      <main className="feedback-main">
        <section aria-labelledby="feedback-title">
          <h1 id="feedback-title">Зворотній зв’язок</h1>

          <form ref={formRef} onSubmit={handleSubmit} noValidate={false}>
            <fieldset>
              <legend>Персональна інформація</legend>

              <div>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder=" "
                  required
                />
                <label htmlFor="fullname">Прізвище та ім’я</label>
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                />
                <label htmlFor="email">E-mail</label>
              </div>

              <div>
                <input
                  placeholder=" "
                  type="number"
                  id="age"
                  name="age"
                  min="0"
                  max="120"
                  required
                />
                <label htmlFor="age">Вік</label>
              </div>

              <div>
                <select
                  className="floating-select"
                  id="education"
                  name="education"
                  required
                  onChange={(e) =>
                    e.currentTarget.setAttribute("value", e.currentTarget.value)
                  }
                >
                  <option value=""></option>
                  <option value="повна">Повна</option>
                  <option value="неповна">Неповна</option>
                  <option value="вища">Вища</option>
                  <option value="професійна">Професійна</option>
                </select>
                <label className="education-label" htmlFor="education">
                  Освіта
                </label>
              </div>
            </fieldset>

            <div>
              <select
                className="floating-select"
                id="purpose"
                name="purpose"
                required
                onChange={(e) =>
                  e.currentTarget.setAttribute("value", e.currentTarget.value)
                }
              >
                <option value=""></option>
                <option value="співпраця">Співпраця</option>
                <option value="скарга">
                  Скарга на порушення права власності
                </option>
                <option value="пропозиція">Пропозиція</option>
                <option value="помилка">Наявність помилки</option>
              </select>
              <label htmlFor="purpose">Мета зворотного зв’язку</label>
            </div>

            <div className="details-div">
              <label htmlFor="details">
                <span style={{ color: "blue" }}>Детально</span>
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                cols={50}
                maxLength={1000}
                required
                ref={detailsRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={tooltipVisible ? "highlighted" : ""}
              ></textarea>
            </div>

            <div className="checkbox-div">
              <input type="checkbox" id="consent" name="consent" required />
              <label htmlFor="consent">
                Я даю згоду на обробку наданої інформації
              </label>
            </div>

            <div className="buttons">
              <button type="submit">Відправити</button>
              <button type="reset">Очистити</button>
            </div>
          </form>
        </section>
      </main>

      {tooltipVisible && (
        <div
          className="tooltip visible"
          style={{
            position: "absolute",
            top: `${tooltipPos.top}px`,
            left: `${tooltipPos.left}px`,
          }}
        >
          Вдячні за Ваш час! Конкретизуйте мету звернення, будь ласка.
        </div>
      )}
    </div>
  );
};

export default Feedback;
