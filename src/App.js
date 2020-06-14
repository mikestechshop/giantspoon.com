// @flow

import React from "react";
import {
  ContentfulClient,
  ContentfulProvider,
  useContentful,
} from "react-contentful";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Work, Contact, About, Culture } from "./pages";
import { Wrapper } from "./components";

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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/work">
            <WorkRoute />
          </Route>
          <Route exact path="/culture">
            <Culture />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Route path={`/work/hbo1`}>
          <Home />
        </Route>
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
          <Route exact path={`/work/${item.fields.url}`}>
            <Wrapper>
              <div>{item.fields.url}</div>
            </Wrapper>
          </Route>
        );
      })}
    </Switch>
  );
};

export default App;
