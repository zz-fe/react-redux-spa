import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Home from '../containers/Home'
import City from '../containers/City'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
//引入History 管理
const history = createHistory()

const RouterMap = () => {
  return(
    <Router history={history}>
        <Switch>
          <Route exact path="/" component={ Home }></Route>
          <Route path="/city" component={ City }></Route>
          <Route path="/search/:keyword" component={ Search }></Route>
          <Route path="/detail/:id" component={ Detail }></Route>
        </Switch>
    </Router>
  )
}

export default RouterMap
