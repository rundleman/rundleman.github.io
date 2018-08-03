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

      return C ? <C /> : null;
    }
  }

  return AsyncComponent;
}
