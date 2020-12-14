import React, { Fragment } from "react";
import "../../App.css";
import { Row, Col, Breadcrumb, Alert, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import project from "../../img/react-start.jpg";

function CreateProject() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/createproject">Tworzenie projektu aplikacji React</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">Tworzenie projektu aplikacji React</h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Po sklonowaniu naszego repozytorium na dysk twardy, utworzymy w
                nim naszą aplikację napisaną w technologii React. Wykorzystamy
                do tego pakiet create-react-app. Utworzy on Nam gotowy szablon
                aplikacji webowej. W systemie Windows uruchamiamy wiersz poleceń
                lub program Power Shell. Natomiast w macach i macbookach
                uruchamiamy Terminal. W oknie przechodzimy do katalogu, który
                przed chwilą sklonowaliśmy z Githuba. Możemy do tego wykorzystać
                komendę cd (change directory). Przypuśćmy, że nasz projekt
                nazwaliśmy projektreact. W takim przypadku przechodzimy więc do
                katalogu C:\PROJEKTY\projektreact. Wpisujemy zatem komendę:
                (nastepnie naciskamy Enter)
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  C:\PROJEKTY\projektreact
                </code>
              </div>
              <p style={{ textAlign: "justify" }} className="mt-4">
                Gdy jesteśmy już we właściwym katalogu tworzymy projekt
                aplikacji, wykorzystując komendę pakietu npm o nazwie npx
                create-react-app i jako argument podając kropkę.
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  npx create-react-app .
                </code>
              </div>
              <p style={{ textAlign: "justify" }} className="mt-4">
                Kropka oznacza, że aplikacja zostanie utworzona w katalogu w
                którym aktualnie jesteśmy. Gdybyśmy - zamiast kropki - podali
                jakąś nazwę projektu - wówczas zostałby utworzony katalog o tej
                nazwie a dopiero w nim pliki aplikacji. Po naciśnięciu klawisza
                Enter, create-react-app zacznie tworzyć szablon aplikacji.
                Chwilkę to potrwa. Czas jest uzależniony prędkości połączenia
                internetowego. Po pomyślnym zakończeniu ujrzymy napis "Happy
                hacking!".
              </p>
              <Alert variant="info" style={{ marginTop: 40 }}>
                <strong>UWAGA !!! </strong>Jeżeli nie zamierzamy trzymać naszego
                kodu w serwisach gitowych typu Github czy Gitlab, wówczas po
                prostu tworzymy sobie lokalnie na dysku katalog z naszymi
                projektami. I w nim wykonujemy uruchamiamy komendę{" "}
                <strong>npx create-react-app NAZWA_NASZEJ_APLIKACJI</strong>
              </Alert>
              <p style={{ textAlign: "justify" }} className="mt-4">
                Po utworzeniu projektu uruchamiamy nasz edutor kodu (np. Visual
                Studio Code) i otwieramy naszą aplikację wykorzystując komendę
                "Open folder". Wskazujemy nasz katalog z projektem. Projekt
                aplikacji w Visual Studio Code wygląda w ten sposób:
              </p>
              <div style={{ textAlign: "center", marginTop: 30 }}>
                <img src={project} alt="project" />
              </div>
              <p style={{ textAlign: "justify" }} className="mt-4">
                Wygodnie będzie oczyścić projekt z plików, które na tym etapie
                nie bedą Nam potrzebne oraz dokonać pewnych zmian już w plikach
                istniejących. Poniżej znajdziecie Państwo startowy szablon
                oczyszczony już ze zbędnych plików, gotowy do dalszego
                developmentu.
              </p>
              <a
                href="https://github.com/andrzej-herman/czysty-projekt-startowy-react"
                target="_blank"
                rel="noopener noreferrer"
                className="no-und"
              >
                <Button
                  variant="primary"
                  style={{ paddingLeft: 25, paddingRight: 25 }}
                >
                  Czysty szablon aplikacji React
                </Button>
              </a>
              <Alert variant="warning" style={{ marginTop: 40 }}>
                <strong>UWAGA !!! </strong>W powyższym projekcie w serwisie
                Github nie ma katalogu node_modules. Jest to jak najbardziej
                poprawne. Tego katalogu nigdy nie wysyłamy na serwery gitowe.
                Jeżeli chcemy sobie wykorzystać ten szablon w naszym projekcie
                należy go sklonować, a nastepnie w terminalu Visual Studio Code
                wykonać komendę <strong>npm install</strong>. Wówczas ten
                katalog zostanie utworzony lokalnie na naszym dysku.
              </Alert>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default CreateProject;
