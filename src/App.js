import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

const JacketsPage = () => (
  <div>
    <h1>Jackets Page</h1>
  </div>
);

const SneakersPage = () => (
  <div>
    <h1>Sneakers Page</h1>
  </div>
);

const WomensPage = () => (
  <div>
    <h1>Womens Page</h1>
  </div>
);

const MenPage = () => (
  <div>
    <h1>Men Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        <Route exact path="/jackets" component={JacketsPage} />
        <Route path="/sneakers" component={SneakersPage} />
        <Route exact path="/womens" component={WomensPage} />
        <Route path="/men" component={MenPage} />
      </switch>
    </div>
  );
}

export default App;
