import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Events from "../../components/events/Events";

function EventsPage() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Events />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default EventsPage;
