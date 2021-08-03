import { hot } from "react-hot-loader/root";
import React from 'react';
import ReactDOM from "react-dom";
import App from "./components/App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./css/index.scss";

const render = (Component) => ReactDOM.render(<Component />, document.getElementById("root"));

render(hot(App));