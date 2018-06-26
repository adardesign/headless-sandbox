import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import RefineDraw from "./RefineDraw";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Adorama headless sandbox</h1>

      <Badge badgeContent={118} color="secondary">
        <RefineDraw />
      </Badge>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
