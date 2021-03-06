// @material-ui/icons
import { Code, Eco, Palette } from "@material-ui/icons";

import Button from "components/CustomButtons/Button.js";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
/*eslint-disable*/
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="EMEF"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Eco}
          dropdownList={[
            <Tooltip
              id="instagram-facebook"
              title="EMEF Home"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="transparent" component={Link} to="/" className={classes.navLink} fullWidth>
                <i className={classes.socialIcons + " fa fa-tree"} />
                &nbsp;EMEF
              </Button>
            </Tooltip>,
            <Tooltip
              id="instagram-facebook"
              title="Follow EMEF on Facebook"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                href="https://www.facebook.com/EvergreenEducationFoundation"
                target="_blank"
                className={classes.navLink}
                fullWidth
              >
                <i className={classes.socialIcons + " fab fa-facebook"} />
                &nbsp; Follow EMEF
              </Button>
            </Tooltip>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="EAS"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Palette}
          dropdownList={[
            <Tooltip
              id="instagram-facebook"
              title="EAS Home"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="transparent" component={Link} to="/eas" className={classes.navLink} fullWidth>
                <i className={classes.socialIcons + " fa fa-paint-brush"} />
                &nbsp;EAS
              </Button>
            </Tooltip>,
            <Tooltip
              id="instagram-facebook"
              title="Follow EAS on Facebook"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                href="https://www.facebook.com/easemef/"
                target="_blank"
                className={classes.navLink}
                fullWidth
              >
                <i className={classes.socialIcons + " fab fa-facebook"} />
                &nbsp;Follow EAS
              </Button>
            </Tooltip>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="EAMCS"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Code}
          dropdownList={[
            <Tooltip
              id="instagram-facebook"
              title="EAMCS Home"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="transparent" component={Link} to="/eamcs" className={classes.navLink} fullWidth>
                <i className={classes.socialIcons + " fa fa-calculator"} />
                &nbsp;EAMCS
              </Button>
            </Tooltip>,
            <Tooltip
              id="instagram-facebook"
              title="Follow EAMCS on Facebook"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                href="https://www.facebook.com/EvergreenMath"
                target="_blank"
                className={classes.navLink}
                fullWidth
              >
                <i className={classes.socialIcons + " fab fa-facebook"} />
                &nbsp;Follow EAMCS
              </Button>
            </Tooltip>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Work with us"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button color="transparent" component={Link} to="/staff" className={classes.navLink} fullWidth>
            <i className={classes.socialIcons + " fa fa-handshake"} />
            &nbsp;Staff
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Docs & More"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button color="transparent" component={Link} to="/forms" className={classes.navLink} fullWidth>
            <i className={classes.socialIcons + " fa fa-graduation-cap"} />
            &nbsp;Forms
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="News"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button color="transparent" component={Link} to="/news" className={classes.navLink} fullWidth>
            <i className={classes.socialIcons + " fa fa-newspaper"} />
            &nbsp;What's New
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
