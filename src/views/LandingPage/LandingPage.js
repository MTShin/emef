import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import LandingPageCarousel from "components/Carousel/LandingPageCarousel.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import AboutSection from "./Sections/AboutSection.js";
import BusinessSection from "./Sections/BusinessSection.js";
import ContactSection from "./Sections/ContactSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="EMEF"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/emef_landingpage_bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Evergreen Mission & Education Foundation 2016 Inc.</h1>
              {/* <h4>
                landing Page title desc
              </h4> */}
            </GridItem>
          </GridContainer>
          <LandingPageCarousel />
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <AboutSection />
          <BusinessSection />
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
