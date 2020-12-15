import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Css from "../../components/css/Css";

function CssPage() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Css />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default CssPage;
