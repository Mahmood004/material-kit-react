import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import homePageStyle from "assets/jss/material-kit-react/views/homePage.jsx";

class HomePage extends React.Component {

    render () {
        const { classes, ...rest } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        const navImageClasses = classNames(
            classes.imgRounded,
            classes.imgGallery
        );
        console.log(this.props);
        return (
            <div>
                <Header 
                    color="transparent"
                    brand="Material Kit React"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={6}>
                                    <div className={classes.home}>
                                    </div>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(homePageStyle)(HomePage);