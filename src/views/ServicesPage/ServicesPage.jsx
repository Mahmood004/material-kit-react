import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import servicesPageStyle from "assets/jss/material-kit-react/views/servicesPage";
import image from "assets/img/bg3.jpg";


class ServicesPage extends React.Component {

    render () {
        const { classes, ...rest } = this.props;

        return (
            <div>
                <Header 
                    absolute
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
                <div
                    className={classes.pageHeader}
                    style={{
                        backgroundImage: "url(" + image + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "top center"
                    }}
                >
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                                <Card></Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                    <Footer whiteFont />
                </div>
            </div>
        )
    }
}

export default withStyles(servicesPageStyle)(ServicesPage);