import { hot } from "react-hot-loader/root";
import React from 'react';
import ReactDOM from "react-dom";
import App from "./components/App";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/index.scss";


const render = (Component) => ReactDOM.render(<Component />, document.getElementById("root"));

render(hot(App));