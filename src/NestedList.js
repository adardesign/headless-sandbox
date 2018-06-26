import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class NestedList extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  handleDelete = () => {
    alert("remove refinements");
  };

  render() {
    // const { classes } = this.props;

    return (
      <div>
        <h1>&nbsp; &nbsp;&nbsp; Refine results</h1>
        <div>
          <span>Refined By:</span>
          <Chip onDelete={this.handleDelete} label="$250 to $500" />
          <Chip onDelete={this.handleDelete} label="Ratings: 2 Stars" />
        </div>
        <List component="nav">
          <ListItem button onClick={this.handleClick}>
            <h5>Brand</h5>
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div">
              <ListItem button>
                <Checkbox tabIndex={-1} />
                <ListItemText inset primary="Canon" secondary="10" />
              </ListItem>

              <ListItem button>
                <Checkbox tabIndex={-1} disableRipple />
                <ListItemText inset primary="Nikon" />
              </ListItem>

              <ListItem button>
                <Checkbox tabIndex={-1} disableRipple />
                <ListItemText inset primary="Sony" />
              </ListItem>
            </List>
          </Collapse>
        </List>

        <List component="nav">
          <ListItem button onClick={this.handleClick}>
            <h5>Model</h5>
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div">
              <ListItem button>
                <Checkbox tabIndex={-1} disableRipple />
                <ListItemText inset primary="55MM" />
              </ListItem>

              <ListItem button>
                <Checkbox tabIndex={-1} disableRipple />
                <ListItemText inset primary="150MM" />
              </ListItem>

              <ListItem button>
                <Checkbox tabIndex={-1} disableRipple />
                <ListItemText inset primary="72MM" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NestedList);
