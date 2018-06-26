import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Adorama headless sandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Badge badgeContent={8} color="secondary">
        <Button variant="raised" color="primary">
          Add to cart
        </Button>
      </Badge>
      <br />
      <br />
      <br />
      <Badge badgeContent={110} color="secondary">
        <MailIcon />
      </Badge>

      <SwipeableDrawer>
        <div>test</div>
      </SwipeableDrawer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);