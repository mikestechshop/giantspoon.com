// @flow

import React from "react";
import {
  ContentfulClient,
  ContentfulProvider,
  useContentful,
} from "react-contentful";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Work } from "./pages";

const contentfulClient = new ContentfulClient({
  accessToken: "APy2UiTtUb9pSRPndcvIZ5ezQh7gyxTXd34mwjszugg",
  space: "pk6t686rs2pw",
});

const App = () => {
  return (
    <ContentfulProvider client={contentfulClient}>
      <Router>
        {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/work">
            <WorkRoute />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ContentfulProvider>
  );
};

const WorkRoute = () => {
  const { data, error, fetched, loading } = useContentful({
    contentType: "caseStudy",
  });
  if (loading || !fetched) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }
  return (
    <Switch>
      <Route exact path="/work">
        <Work />
      </Route>
      {data.items.map((item, index) => {
        console.log(item.fields.url);
        return (
          <Route key={index} path={`/work/${item.fields.url}`}>
            <h1>{item.fields.url}</h1>
          </Route>
        );
      })}
    </Switch>
  );
};

export default App;
