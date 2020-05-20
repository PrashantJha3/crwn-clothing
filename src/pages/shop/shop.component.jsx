import React from "react";

import { Route } from "react-router-dom";

import CollectionPage from "../collection/collection.component";
import CollectionOvreview from "../../components/collections-overview/collections-overview.component";
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOvreview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
