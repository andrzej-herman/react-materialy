import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Software from "../../components/software/Software";

function SoftPage() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Software />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default SoftPage;
