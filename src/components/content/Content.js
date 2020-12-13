import React, { Fragment } from "react";
import "../../App.css";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContentCard from "../contentCard/ContentCard";

function Content() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">Spis treści</h3>
        </Col>
      </Row>
      <Row>
        <div>
          <Row className="software__container">
            <ContentCard
              title="1. Oprogramowanie"
              text="Potrzebne oprogramowanie oraz linki do pobrania."
              link="/software"
            />
            <ContentCard
              title="2. Instalacja oprogramowania"
              text="Informacje dotyczące prawidłowej instalacji oprogramowania."
              link="/install"
            />
            <ContentCard
              title="3. Klonowanie repozytorium z serwera Github"
              text="Informacje dotyczące klonowania repozytorium aplikacji quiz
                    z serwera Github."
              link="/clone"
            />
          </Row>
        </div>
      </Row>
      <Row>
        <div>
          <Row className="software__container">
            <ContentCard
              title="4. Tworzenie projektu aplikacji React"
              text="Tworzenie szablonu projektu z wykorzystaniem create-react-app"
              link="/solution"
            />
            <ContentCard
              title="5. Oczyszczanie projektu ze zbędnych plików"
              text="Dostosowanie projektu do naszych potrzeb"
              link="/project"
            />
            <ContentCard
              title="6. React Bootstrap"
              text="Instalacja biblioteki react-bootstrap za pomocą menedżera pakietów npm"
              link="/thinking"
            />
          </Row>
        </div>
      </Row>
      <Row>
        <div>
          <Row className="software__container">
            <ContentCard
              title="7. CSS - kaskadowe arkusze stylów"
              text="Krótki przewodnik po CSS"
              link="/objects"
            />
            <ContentCard
              title="8. Fundamentalne zasady React"
              text="Kilka słów na temat ważnych rzeczy w bibliotece React"
              link="/properties"
            />
            <ContentCard
              title="9. Stan aplikacji reactowej"
              text="Użycie hooka useState w komponencie funkcyjnym"
              link="/methods"
            />
          </Row>
        </div>
      </Row>
    </Fragment>
  );
}

export default Content;
