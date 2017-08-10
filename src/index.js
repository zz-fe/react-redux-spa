import React, { Component } from "react";
import { render } from "react-dom";
import { Router } from "react-router";
import './assets/index.less';
import { Provider } from 'react-redux';
import { configStore } from './store';

const store = configStore();
import App from './containers'



let root = document.getElementById("app");
  render(
    <Provider store={store}>
    <App/>
    </Provider>
    ,root);
