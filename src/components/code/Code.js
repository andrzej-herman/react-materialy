import React, { Fragment } from "react";
import "../../App.css";
import { Row, Col, Breadcrumb, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Code = () => {
  const groups_1 = [
    {
      id: 1,
      title: "Grupa 1",
      text: "Filmoteka - katalog filmów",
      link: "https://github.com/andrzej-herman/react-grupa-1",
    },
    {
      id: 2,
      title: "Grupa 2",
      text: "Filmoteka - portal filmowy",
      link: "https://github.com/andrzej-herman/react-grupa-2",
    },
    {
      id: 3,
      title: "Grupa 3",
      text: "Logowanie i rejestracja użytkowników",
      link: "https://github.com/andrzej-herman/react-grupa-3",
    },
  ];

  const groups_2 = [
    {
      id: 4,
      title: "Grupa 4",
      text: "Kalkulator",
      link: "https://github.com/andrzej-herman/react-grupa-4",
    },
    {
      id: 5,
      title: "Grupa 5",
      text: "Filmoteka - portal filmowy",
      link: "https://github.com/andrzej-herman/react-grupa-5",
    },
  ];

  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/code">Kod źródłowy aplikacji</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">Kod źródłowy aplikacji</h3>
        </Col>
      </Row>

      <Row className="software__container">
        {groups_1.map((g) => (
          <Col key={g.id} lg={4} md={4} sm={12}>
            <Card className="content__card" style={{ height: "155px" }}>
              <Card.Body>
                <Card.Title className="card__title">{g.title}</Card.Title>
                <Card.Text>{g.text}</Card.Text>
                <a
                  href={g.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-und"
                >
                  <Button
                    variant="primary"
                    style={{ paddingLeft: 25, paddingRight: 25 }}
                  >
                    Github
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="software__container">
        {groups_2.map((g) => (
          <Col key={g.id} lg={6} md={6} sm={12}>
            <Card className="content__card" style={{ height: "155px" }}>
              <Card.Body>
                <Card.Title className="card__title">{g.title}</Card.Title>
                <Card.Text>{g.text}</Card.Text>
                <a
                  href={g.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-und"
                >
                  <Button
                    variant="primary"
                    style={{ paddingLeft: 25, paddingRight: 25 }}
                  >
                    Github
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default Code;
