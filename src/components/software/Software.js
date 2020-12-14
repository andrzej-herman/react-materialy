import React, { Fragment } from "react";
import "../../App.css";
import { Row, Col, Card, Button, Breadcrumb } from "react-bootstrap";
import node from "../../img/software/node-logo.jpg";
import cra from "../../img/software/create-react-app.jpg";
import vs from "../../img/software/visual-studio-code.jpg";
import webStorm from "../../img/software/webstrom-logo.jpg";
import brackets from "../../img/software/brackets-logo.jpg";
import git from "../../img/software/git-logo.jpg";

import { Link } from "react-router-dom";

function Software() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/software">Oprogramowanie</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">Oprogramowanie</h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col lg={4} md={4} xs={12}>
            <Card className="software__card">
              <Card.Img
                className="software__img"
                variant="top"
                src={node}
                alt="node"
              />
              <Card.Body>
                <Card.Title>Node.js</Card.Title>
                <Card.Text>
                  Asynchroniczne środowisko wykonawcze JavaScript,
                  zaprojektowane do tworzenia skalowalnych aplikacji sieciowych.
                  Dodatkowo oferuje wbudowany manager pakietów Node (NPM - node
                  package manager) za pośrednictwem którego mamy dostęp do
                  tysięcy rozszerzeń i frameworków.
                </Card.Text>
                <a
                  href="https://nodejs.org/en/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-und"
                >
                  <Button
                    variant="primary"
                    style={{ paddingLeft: 25, paddingRight: 25 }}
                  >
                    Pobierz
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={4} xs={12}>
            <Card className="software__card">
              <Card.Img
                className="software__img"
                variant="top"
                src={cra}
                alt="cra"
              />
              <Card.Body>
                <Card.Title>Create React App</Card.Title>
                <Card.Text>
                  Predefiniowany template służący jako podstawa do zbudowania w
                  pełni funkcjonalnej aplikacji webowej w technologii React.js.
                  Jest to framwework napisany przez programistów Facebooka,
                  oparty na języku Javascript. Wszelkie zmiany na stronie
                  odbywają się w czasie rzeczywistym.
                </Card.Text>
                <a
                  href="https://create-react-app.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-und"
                >
                  <Button
                    variant="primary"
                    style={{ paddingLeft: 25, paddingRight: 25 }}
                  >
                    Zobacz
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={4} xs={12}>
            <Card className="software__card">
              <Card.Img
                className="software__img"
                variant="top"
                src={git}
                alt="git"
              />
              <Card.Body>
                <Card.Title>Git</Card.Title>
                <Card.Text>
                  Oprogramowanie umożliwiające obsługę technologii Git, czyli
                  systemu kontroli wersji. Niezbędne do pobrania. Bez tej
                  aplikacji nie będzie możliwa współpraca z serwerami webowymi
                  oferującymi obsługę Git takimi jak Github, Gitlab, Azure Dev
                  Ops. Oferuje własny terminal do obsługi poleceń.
                </Card.Text>
                <a
                  href="https://git-scm.com/downloads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-und"
                >
                  <Button
                    variant="primary"
                    style={{ paddingLeft: 25, paddingRight: 25 }}
                  >
                    Pobierz
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="software__container">
          <Col lg={4} md={4} xs={12}>
            <Card className="software__card">
              <Card.Img
                className="software__img"
                variant="top"
                src={vs}
                alt="vs"
              />
              <Card.Body>
                <Card.Title>Visual Studio Code</Card.Title>
                <Card.Text>
                  Popularne środowisko programistyczne idealne do realizacji
                  projektów w technologiach React, Angular, Node.js, Vue. Jest
                  lekkie, szybkie ale jednocześnie posiada ogromne możliwości
                  personalizacji dzięki wielu dostępnym rozszerzeniom. Dodatkową
                  zaletą VS Code są moduły obsługi Gita i Dockera.
                </Card.Text>
                <a
                  href="https://code.visualstudio.com/Download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-und"
                >
                  <Button
                    variant="primary"
                    style={{ paddingLeft: 25, paddingRight: 25 }}
                  >
                    Pobierz
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={4} xs={12}>
            <Card className="software__card">
              <Card.Img
                className="software__img"
                variant="top"
                src={webStorm}
                alt="webStorm"
              />
              <Card.Body>
                <Card.Title>JetBrains WebStorm</Card.Title>
                <Card.Text>
                  Drugie - po VS Code wiodące IDE (Integrated Development
                  Environment - środowisko programistyczne) przeznaczone ściśle
                  do realizacji projektów dla sieci web. Oferuje olbrzymie
                  możliwości. Doskonały edytor tekstu, rozbudowane intellisense,
                  dbałość o czystość kodu to tylko niektóre z jego cech.
                </Card.Text>
                <a
                  href="https://www.jetbrains.com/webstorm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-und"
                >
                  <Button
                    variant="primary"
                    style={{ paddingLeft: 25, paddingRight: 25 }}
                  >
                    Pobierz
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={4} xs={12}>
            <Card className="software__card">
              <Card.Img
                className="software__img"
                variant="top"
                src={brackets}
                alt="brackets"
              />
              <Card.Body>
                <Card.Title>Brackets</Card.Title>
                <Card.Text>
                  Brackets to opracowany przez Google lekki, ale bardzo
                  funkcjonalny, nowoczesny edytor tekstu. Łączy narzędzia
                  wizualne z edytorem tekstowym, aby uzyskać odpowiednią
                  kompromis pomiędzy prostym narzędziem developerskim a
                  rozbudowanym środowiskiem programistycznym.
                </Card.Text>
                <a
                  href="http://brackets.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-und"
                >
                  <Button
                    variant="primary"
                    style={{ paddingLeft: 25, paddingRight: 25 }}
                  >
                    Pobierz
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default Software;
