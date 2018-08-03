import * as React from "react";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Wrapper, Main } from "./components";

export class PageLayout extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { children, ...props } = this.props;

    return (
      <Wrapper {...props}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    );
  }
}
