import React, { Component } from "react";
// import PageAbout from "pages/PageAbout/PageAbout";

export function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;
      console.log("​AsyncComponent -> render -> C", C);
      // console.log("​AsyncComponent -> render -> ", <PageAbout />);
      // console.log("​AsyncComponent -> render -> ", PageAbout);

      return C ? <C /> : null;
    }
  }

  console.log("​asyncComponent -> AsyncComponent", AsyncComponent);
  return AsyncComponent;
}
