import * as React from "react";
import { Wrapper, Text } from "./components";
import { Link } from "react-router-dom";

export class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        <Text>
          © 2016—2017 <Link to="/about/">Dmitry Kuzmin</Link>. Контент
          распространяется под лицензией
          <a
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/deed.ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Commons (CC BY-NC-SA 4.0)
          </a>
        </Text>
      </Wrapper>
    );
  }
}
