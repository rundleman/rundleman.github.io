import * as React from "react";
import { PageLayout } from "components";
// import { Link } from "react-router-dom";
// import { setDescription } from "utils/setDescription";
import { Helmet } from "react-helmet";

export class PageMain extends React.Component {
  // componentDidMount() {
  //   document.title =
  //     "Блог о фронтенд разработке - инструменты, книги и не только";
  //   setDescription(
  //     "Различные статьи и фронтентд разработке, актуальный материал, обзоры на новые книги и инструменты"
  //   );
  // }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            Блог о фронтенд разработке - инструменты, книги и не только
          </title>
          <meta name="description" content="Различные статьи и фронтентд разработке, актуальный материал, обзоры на новые книги и инструменты" />
        </Helmet>
        <PageLayout>
          {/* <Link to="/vscode">VS Code</Link> */}
          <ul>
            <li>
              <h2>Будущие статьи</h2>
              <p>
                Обзор книги "Новая большая книга CSS" Д.Макфарланд<br /> Обзор
                книги "Выразительный Javascript" M. Haverbeke
              </p>
              <time>?</time>
            </li>
            <li>
              <h2>
                <span>
                  Обзор курса HTML, CSS, and Javascript for Web Developers by
                  Johns Hopkins University
                </span>
              </h2>
              <p>
                "...ощущения как после сеанса хорошего фильма"<br /> It was
                really fun!
              </p>
              <time dateTime="2012-02-09">
                <span>
                  9<br />февраля<br />2017
                </span>
              </time>
            </li>
            <li>
              <h2>Следующие статьи</h2>
              <p>Статей нет</p>
              <time>+</time>
            </li>
          </ul>
        </PageLayout>
</div>
    );
  }
}
