import React, { Fragment } from "react";
import "../../App.css";
import { Row, Col, Breadcrumb, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Bootstrap() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/bootstrap">React Bootstrap</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">React Bootstrap</h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Za wygląd wizualny strony internetowej (w naszym przypadku
                aplikacji internetowej) odpowiadają pliki css. Są to tak zwane
                kaskadowe arkusze stylów (ang. cascade style sheet). To w nich
                zapisane jest to w jaki sposób będą wyświetlane elementy na
                naszej stronie i jak będą wyglądać.
              </p>
              <p>
                My w naszej aplikacji skorzystamy z gotowego wzorca - biblioteki
                Bootstrap. Jest to framework UI (User Interface), który będzie
                odpowiadał za poprawne wyświetlanie się w przeglądarkach naszej
                strony - niezależnie od rodzielczości ekranu oraz rodzaju
                urządzenia (monitory, matryce laptopów, tablety, smartfony etc
                ...). A dokładniej wykorzystamy wersję tej biblioteki
                przeznaczoną specjalnie dla aplikacji reactowych - React
                Bootstrap. Link do tej biblioteki znajdziecie Państwo poniżej.
              </p>
              <a
                href="https://react-bootstrap.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="no-und"
              >
                <Button
                  variant="primary"
                  style={{
                    paddingLeft: 25,
                    paddingRight: 25,
                    marginBottom: 20,
                    marginTop: 10,
                  }}
                >
                  Biblioteka React Bootstrap
                </Button>
              </a>
              <p>
                Biblioteka ta zawiera cały zestaw plików css, które dostarczają
                nam gotowy wzorzec rozmieszczenia elementów na stronie (oparty
                na systemie grid) oraz cały zestaw gotowych, ładnie
                zaprojektowanych elementów html takich jak przyciski, pola
                tekstowe (inputy), formularze, elementy nawigacji strony, etc.
                Możecie sobie Państwo obejrzeć je wszystkie, wchodząc na stronie
                bootstrapa w zakładkę Components.
              </p>
              <p>
                Instalacja tej biblioteki w aplikacji React jest dziecinnie
                prosta. W terminalu Edytora tekstowego wystarczy wpisać komendę:
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  npm install react-bootstrap bootstrap
                </code>
              </div>
              <p style={{ textAlign: "justify" }} className="mt-4">
                Aby otworzyć terminal np. w Visual Studio Code należy wybrać
                odpowiednią opcję z menu View lub zastosować kombinację klawiszy{" "}
                <strong>Ctrl + `</strong>. Po zainstalowaniu się biblioteki
                trzeba jeszcze zaimportować ją do naszego projektu dopisując w
                sekcji import (na górze pliku) pliku App.js lub index.js
                linijki:
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  import 'bootstrap/dist/css/bootstrap.min.css';
                </code>
              </div>
              <p style={{ textAlign: "justify" }} className="mt-4">
                Od tego momentu mamy do dyspozycji wszystko co jest zawarte w
                tej bibliotece. Jeżeli chcemy np wykorzystać przycisk na danej
                stronie musimy jedynie zaimportować go w pliku tej strony na
                górze wpisując:
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  {`import { Button } from "react-bootstrap";`}
                </code>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default Bootstrap;
