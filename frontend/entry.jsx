import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as UTILS from './util/realtor_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store = configureStore();
  window.store = store;
  window.getCoords = UTILS.getCoordsFromLocation;

  ReactDOM.render(<Root store={store} />, root);
});
