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
              title="1. Kod źródłowy aplikacji"
              text="Kod wszystkich aplikacji, które piszemy na zajęciach."
              link="/code"
              code={true}
            />
            <ContentCard
              title="2. Oprogramowanie"
              text="Potrzebne oprogramowanie oraz linki do pobrania."
              link="/software"
              code={false}
            />
            <ContentCard
              title="3. Instalacja oprogramowania"
              text="Informacje dotyczące prawidłowej instalacji oprogramowania."
              link="/install"
              code={false}
            />
          </Row>
        </div>
      </Row>
      <Row>
        <div>
          <Row className="software__container">
            <ContentCard
              title="4. Klonowanie repozytorium z serwera Github"
              text="Informacje dotyczące klonowania repozytorium aplikacji quiz
                    z serwera Github."
              link="/clone"
              code={false}
            />
            <ContentCard
              title="5. Tworzenie projektu aplikacji React"
              text="Tworzenie szablonu projektu z wykorzystaniem create-react-app"
              link="/createproject"
              code={false}
            />
            <ContentCard
              title="6. React Bootstrap"
              text="Instalacja biblioteki react-bootstrap za pomocą menedżera pakietów npm"
              link="/bootstrap"
              code={false}
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
              link="/css"
              code={false}
            />
            <ContentCard
              title="8. Zdarzenia w React"
              text="Przechywtywanie zachowań użytkowników aplikacji"
              link="/events"
              code={false}
            />
            <ContentCard
              title="9. Stan aplikacji reactowej"
              text="Użycie hooka useState w komponencie funkcyjnym"
              link="/state"
              code={false}
            />
          </Row>
        </div>
      </Row>
    </Fragment>
  );
}

export default Content;
