import React from 'react'
import "../../styles/home.css"
import Navbar from '../../components/Navbar'
function Home() {
  return (
    <div>
      <Navbar/>
       <main>
      <section aria-labelledby="purpose">
        <h2 id="purpose">Мета створення</h2>
        <p>
          Районну державну адміністрацію створено для забезпечення реалізації
          <em>державної політики</em>, надання
          <em>якісних адміністративних послуг</em>
          громадянам та підтримки ефективного функціонування органів влади на
          місцевому рівні.
        </p>
        <h3><u>Завдання для досягнення мети:</u></h3>
        <ol type="a">
          <li>
            Надання прозорих і доступних адміністративних послуг населенню.
          </li>
          <li>
            Забезпечення <em>ефективної</em> роботи структурних підрозділів
            району.
          </li>
          <li>
            Впровадження сучасних інформаційних технологій у роботу
            адміністрації.
          </li>
        </ol>
        <p>
          <strong>Місце у держустрої:</strong> установа входить до
          <i>системи виконавчої влади України</i> та підпорядковується
          <b>обласній державній адміністрації</b>.
        </p>
      </section>

      <section aria-labelledby="leaders" className="table-container">
        <h2 id="leaders">Керівництво установи</h2>
        <p>Нижче наведено інформацію про керівників установи:</p>
        <table className="leaders-table" border={1}>
          <caption>
            Керівництво Районної державної адміністрації
          </caption>
          <thead>
            <tr>
              <th scope="col">Прізвище та ініціали</th>
              <th scope="col">Посада</th>
              <th scope="col">Досвід</th>
              <th scope="col">Освіта</th>
              <th scope="col">Примітки</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2}>Іваненко І.І.</td>
              <td>Голова адміністрації</td>
              <td>15 років</td>
              <td>Національна академія державного управління</td>
              <td rowSpan={2}>Очолює з 2020 року</td>
            </tr>
            <tr>
              <td>Головний адміністратор</td>
              <td>15 років</td>
              <td>Курси підвищення кваліфікації</td>
            </tr>
            <tr>
              <td>Петренко П.П.</td>
              <td>Заступник голови</td>
              <td>15 років</td>
              <td>Київський національний університет</td>
              <td>Відповідає за соціальний захист населення</td>
            </tr>
            <tr>
              <td>Сидоренко С.С.</td>
              <td>Керівник відділу</td>
              <td>12 років</td>
              <td>Львівський національний університет</td>
              <td>Координація освітніх програм</td>
            </tr>
            <tr>
              <td>Коваль К.К.</td>
              <td>Аналітик</td>
              <td>8 років</td>
              <td>Університет економіки</td>
              <td>Аналітична підтримка рішень</td>
            </tr>
            <tr>
              <td>Шевченко Ш.Ш.</td>
              <td>Юрист</td>
              <td>10 років</td>
              <td>Юридичний інститут</td>
              <td>Правове забезпечення</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5}>Оновлено: вересень 2025</td>
            </tr>
          </tfoot>
        </table>
      </section>
    </main>

    <aside>
      <h2>Додаткова інформація</h2>
      <p>
        У разі виникнення питань звертайтесь до гарячої лінії адміністрації.
      </p>
    </aside>

    <footer id="contacts">
      <section>
        <h2>Контактна інформація</h2>
        <address tabIndex={0}>
          <p>Адреса: м. Київ, вул. Прикладна, 10</p>
          <p className="contact-phone">
            Телефон: <a href="tel:+380442901988"><b>(044) 290-19-88</b></a>
          </p>
          <p>Email: <a href="mailto:info@rda.gov.ua">info@rda.gov.ua</a></p>
        </address>
      </section>
      <section aria-labelledby="social-media">
        <h3 id="social-media">Посилання на соціальні мережі</h3>
        <ul>
          <li><a href="https://www.facebook.com/">Facebook</a></li>
          <li><a href="https://www.instagram.com/">Instagram</a></li>
        </ul>
      </section>
    </footer>
    <script type="module" src="dist/index.js"></script>
    <div className="overlay"></div>
    </div>
  )
}

export default Home
