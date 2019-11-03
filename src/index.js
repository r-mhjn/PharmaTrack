import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./login.scss";
import "./billbox.scss";
import "./addstockbox.scss";
import "./alertbox.scss";
import "./billlogs.scss";
import "./stocktable.scss";
import "./vendors.scss";
import "./mynav.scss";
import './prediction.scss';
import './salesreport.css';

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
