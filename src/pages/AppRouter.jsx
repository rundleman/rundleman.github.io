import * as React from "react";
import { Route, Switch, Router, Redirect } from "react-router";
import { ABOUT, MAIN } from "constants/links";
// import { PageAbout } from "./PageAbout";
import { PageMain } from "./PageMain";
// import { ArticleVscode } from "./Articles";
// import { AsyncComponent } from "components";
import { asyncComponent } from "constants/AsyncComponent";
import { createBrowserHistory } from "history";

const AsyncAbout = asyncComponent(() => import("./PageAbout/PageAbout"));

export class AppRouter extends React.Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path={MAIN} component={PageMain} />
          <Route exact path={ABOUT} component={AsyncAbout} />
          <Redirect to={MAIN} />
          {/* <Route exact path={CONTACTS} component={PageAbout} />
          <Route exact path={VSCODE} component={ArticleVscode} /> */}
        </Switch>
      </Router>
    );
  }
}
