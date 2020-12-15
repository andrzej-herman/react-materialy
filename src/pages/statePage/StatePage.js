import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import State from "../../components/state/State";

function StatePage() {
  return (
    <Fragment>
      <Container>
        <Header />
        <State />
      </Container>
      <Footer />
    </Fragment>
  );
}
export default StatePage;
