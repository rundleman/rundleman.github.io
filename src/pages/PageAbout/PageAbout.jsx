import * as React from "react";
import { PageLayout } from "components";
// import { setDescription } from "utils/setDescription";
import { Helmet } from "react-helmet";

export default class PageAbout extends React.Component {
  // componentDidMount() {
  //   document.title =
  //     "Фронтенд разработчик Дмитрий Кузьмин - образование, опыт, контакты, профессиональные навыки";
  //   setDescription(
  //     "Информация обо мне, немного биографии до настоящего времени, скилы и контактные данные, по которым можно связаться со мной."
  //   );
  // }

  render() {
    return (
      <div>
          <Helmet>
          <title>
          Фронтенд разработчик Дмитрий Кузьмин - образование, опыт, контакты, профессиональные навыки
          </title>
          <meta name="description" content="Информация обо мне, немного биографии до настоящего времени, скилы и контактные данные, по которым можно связаться со мной." />
        </Helmet>
      <PageLayout>
        <p>
          Меня зовут Дмитрий Кузьмин. Мне 23 года и в данный момент я начинающий
          front-end разработчик.
        </p>
        <p>
          В&nbsp;свободное время читаю книги, на которые делаю обзоры, изучаю и
          тестирую новые технологии.
        </p>
        <h2>Образование</h2>
        <ul>
          <li>
            Незаконченное высшее, 2015-2020 УрФУ - Уральский федеральный
            университет, институт математики и компьютерных наук (ИМКН),
            Специальность: прикладная информатика.
          </li>
          <li>Среднее, 2011–2013 школа № 85, Екатеринбург.</li>
          <li>Неполное среднее, 2002–2011 школа № 85, Екатеринбург.</li>
        </ul>
        <h2>Дополнительное образование</h2>
        <ul>
          <li>
            HTML, CSS, and Javascript for Web Developers by Johns Hopkins
            University. январь&nbsp;2017&nbsp;-&nbsp;февраль&nbsp;2017,
            Сoursera.org
          </li>
          <li>
            "Информатика и информационные технологии". Уральская компьютерная
            школа. 15&nbsp;ноября&nbsp;2012&nbsp;-&nbsp;17&nbsp;мая&nbsp;2013
          </li>
        </ul>
        <h2>Контактные данные</h2>
        <address>
          <dl>
            <dt>Мобильный телефон:</dt>
            <dd> +7&nbsp;(950)&nbsp;200-33-57</dd>
            <dt>Электронный адрес:</dt>
            <dd>
              <a href="mailto:dmitry@rung.pro"> dmitry@rung.pro</a>
            </dd>
            <dt>Профиль на GitHub:</dt>
            <dd>
              <a href="https://github.com/rundleman">github.com/rundleman</a>
            </dd>
          </dl>
        </address>
        <h2>Профессиональные навыки</h2>
        <table>
          <thead>
            <tr>
              <th />
              <th>Beginner</th>
              <th>Intermediate</th>
              <th>Expert</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Языки программирования</td>
              <td>JavaScript, C#, Java</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>Базы данных</td>
              <td>MySQL</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>Языки разметки</td>
              <td />
              <td>HTML5, CSS3</td>
              <td />
            </tr>
            <tr>
              <td>Фреймворки</td>
              <td>Bootstrap</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>Системы контроля версий</td>
              <td>Git</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>Операционные системы</td>
              <td>Ubuntu</td>
              <td>Windows</td>
              <td />
            </tr>
          </tbody>
        </table>
        <h2>Хобби и качества</h2>
        <p>
          Я люблю триатлон, спортивное программирование, шахматы, внимание к
          деталям.
        </p>
      </PageLayout>
      </div>
    );
  }
}
