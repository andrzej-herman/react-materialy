import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CreateProject from "../../components/createProject/CreateProject";

function CreateProjectPage() {
  return (
    <Fragment>
      <Container>
        <Header />
        <CreateProject />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default CreateProjectPage;
