import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import NotFoundPage from "../../components/NotFoundPage";
import GalleryPage from "../GalleryPage";
import NavbarHeader from "../NavbarHeader";
import { Container, Row, Col } from "react-bootstrap";
import SideMenu from "../SideMenu";
import AlertMsg from "../AlertMsg";

const Routes = () => {
  return (
    <>
      <NavbarHeader />
      <Container fluid>
        <Row>
          <SideMenu />
          <Col md={9}>
            <AlertMsg />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/gallery" component={GalleryPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Routes;
