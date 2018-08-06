import * as React from "react";
import {
  Link,
  Wrapper,
  Navigation,
  List,
  Item,
  Logo,
  Inner,
  NewLogo
} from "./components";
import logo from "./img/rung-logo.svg";

export class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <Inner>
          {/* <Logo src={logo} alt="rung.pro" /> */}
          <NewLogo>RUNG.PRO</NewLogo>
          <Navigation>
            <List>
              <Item>
                <Link to="/">Блог</Link>
              </Item>
              {/* <Item>
              <Link to="/about">Проекты</Link>
            </Item>
            <Item>
              <Link to="/about">Материалы</Link>
            </Item> */}
              <Item>
                <Link to="/about/">Обо мне</Link>
              </Item>
              <Item>
                <Link to="/contacts/">Письмо</Link>
              </Item>{" "}
              {/* <Item>
              <Link to="/contacts">Письмо</Link>
            </Item> */}
            </List>
          </Navigation>
        </Inner>
      </Wrapper>
    );
  }
}
