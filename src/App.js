// @flow

import React, { useEffect } from "react";
import {
  ContentfulClient,
  ContentfulProvider,
  useContentful,
} from "react-contentful";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import {
  Home,
  Work,
  Contact,
  About,
  Culture,
  CaseStudy,
  Terms,
  Privacy,
  NotFound,
} from "./pages";
import { Nav } from "./components";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { TweenMax } from "gsap";

const contentfulClient = new ContentfulClient({
  accessToken: "APy2UiTtUb9pSRPndcvIZ5ezQh7gyxTXd34mwjszugg",
  space: "pk6t686rs2pw",
});

const TransitionLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0c2340;
  z-index: 9999;
  transform: translateY(100%);
`;

const RedirectWithStatus = (props) => {
  const {from, to, status} = props;
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) staticContext.status = status;
      return <Redirect from={from} to={to}></Redirect>;
    }}></Route>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 350);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <ContentfulProvider client={contentfulClient}>
      <Router>
        <Routes />
      </Router>
    </ContentfulProvider>
  );
};

const Routes = () => {
  const location = useLocation();
  const history = useHistory();
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

  const linkChange = (url) => {
    history.push(url);
  };
  const resetDiv = () => {
    TweenMax.set(".transition-div", { y: "100%" });
  };

  const handleLinkChange = (url) => {
    if (history.location.pathname === url) {
      return;
    }
    TweenMax.to(".transition-div", 0.5, {
      y: 0,
      onComplete: linkChange,
      onCompleteParams: [url],
      ease: "power3.inOut",
    });
    TweenMax.to(".transition-div", 0.5, {
      y: " -100%",
      delay: 1,
      ease: "power3.inOut",
      onComplete: resetDiv,
    });
  };

  return (
    <>
      <ScrollToTop />
      <TransitionLayer className="transition-div" />
      <Nav handleLinkChange={handleLinkChange} />
      <Switch>
        <Route exact path="/">
          <Home handleLinkChange={handleLinkChange} />
        </Route>
        <Route exact path="/work">
          <Work handleLinkChange={handleLinkChange} />
        </Route>
        {data.items.map((item, index) => {
          return (
            <Route exact path={`/work/${item.fields.url}`} key={index}>
              <CaseStudy
                handleLinkChange={handleLinkChange}
                caseStudy={item.fields}
                projects={data.items}
              />
            </Route>
          );
        })}
        <Route exact path="/culture">
          <Culture handleLinkChange={handleLinkChange} />
        </Route>
        <Route exact path="/about">
          <About handleLinkChange={handleLinkChange} />
        </Route>
        <Route exact path="/contact">
          <Contact handleLinkChange={handleLinkChange} />
        </Route>
        <Route exact path="/terms">
          <Terms handleLinkChange={handleLinkChange} />
        </Route>
        <Route exact path="/privacy">
          <Privacy handleLinkChange={handleLinkChange} />
        </Route>
        <RedirectWithStatus from="/services" to="/about#services" status={301}></RedirectWithStatus>
        <RedirectWithStatus from="/careers" to="/culture#careers" status={301}></RedirectWithStatus>
        <RedirectWithStatus from="/press" to="/about#awards" status={301}></RedirectWithStatus>
        <RedirectWithStatus from="/work-experiential" to="/work" status={301}></RedirectWithStatus>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default App;
