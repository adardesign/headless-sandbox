import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { mailFolderListItems, otherMailFolderListItems } from "./tileData";

const styles = {
  list: {
    width: "60vw"
  },
  fullList: {
    width: "auto"
  }
};

class RefineDraw extends React.Component {
  state = {
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
      </div>
    );

    return (
      <div>
        <Button
          variant="raised"
          color="primary"
          onClick={this.toggleDrawer("right", true)}
        >
          Refine results
        </Button>

        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
        >
          {sideList}

          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          />
        </Drawer>
      </div>
    );
  }
}

RefineDraw.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RefineDraw);
