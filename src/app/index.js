import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./store";
import history from "./utils/history";

import Root from "./components/Root";
import Home from "./components/Home";
import ContainerMap from "./components/ContainerMap";


render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Root>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/map"} component={ContainerMap}/>

                </Root>
            </div>
        </Router>

    </Provider>,
    window.document.getElementById('app'));