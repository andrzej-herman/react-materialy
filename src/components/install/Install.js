import React, { Fragment } from "react";
import "../../App.css";
import { Row, Col, Tabs, Tab, Breadcrumb, Alert } from "react-bootstrap";
// import moduly from "../img/moduly.jpg";
// import tg from "../img/tg.jpg";

import { Link } from "react-router-dom";

function Install() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/install">Instalacja oprogramowania</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">Instalacja oprogramowania</h3>
        </Col>
      </Row>

      <Row>
        <Row className="software__container">
          <Col>
            <div className="software__desc">
              <Tabs defaultActiveKey="git" id="uncontrolled-tab-example">
                <Tab eventKey="git" title="Git" className="tab">
                  <div className="software__tab">
                    <p className="mb-4">
                      Pobieramy instalator. Instalacja jest typowa. Jest wiele
                      okien "po drodze", ale cały czas wybieramy "Next". Nie
                      zmieniamy żadnych ustawień podczas instalacji. Po paru
                      chwilach proces zakończy się.
                    </p>
                    <p className="mb-4">
                      Po zakończeniu procesu instalacji musimy upewnić się, że
                      Git został poprawnie zainstalowany oraz zarejestrowany w
                      systemie. Dotyczy to zarówno systemu Windows jak i macOS.
                      W tym celu uruchamiamy:
                      <ul>
                        <li>
                          - dla systemu Windows => wiersz polecenia lub Power
                          Shell
                        </li>
                        <li>- dla systemu macOS => Terminal</li>
                      </ul>
                      W oknie wpisujemy komendę:
                    </p>
                    <div>
                      <code style={{ fontSize: 18, fontWeight: "bold" }}>
                        git --version
                      </code>
                    </div>
                    <p className="mt-4">
                      Jeżeli wszystko jest ok, w oknie wyświetli się numer
                      wersji Gita, np:
                    </p>
                    <div>
                      <code style={{ fontSize: 18, fontWeight: "bold" }}>
                        git version 2.25.1.windows.1
                      </code>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="node" title="Node.js" className="tab">
                  <div className="software__tab">
                    <p className="mb-4">
                      Pobieramy instalator. Nastepnie uruchamiamy plik
                      instalacyjny. Proces jest w pełni automatyczny. Razem z
                      Node zainstaluje się menedżer pakietów npm. To właśnie
                      jego potrzebujemy.
                    </p>
                    <p className="mb-4">
                      Po zakończeniu procesu instalacji musimy upewnić się, że
                      Node oraz npm zostały poprawnie zainstalowane oraz
                      zarejestrowane w systemie. Dotyczy to zarówno systemu
                      Windows jak i macOS. W tym celu uruchamiamy:
                      <ul>
                        <li>
                          - dla systemu Windows => wiersz polecenia lub Power
                          Shell
                        </li>
                        <li>- dla systemu macOS => Terminal</li>
                      </ul>
                      W oknie wpisujemy komendę:
                    </p>
                    <div>
                      <code style={{ fontSize: 18, fontWeight: "bold" }}>
                        node --version
                      </code>
                    </div>
                    <p className="mt-4">
                      Jeżeli wszystko jest ok, w oknie wyświetli się numer
                      wersji Node, np:
                    </p>
                    <div>
                      <code style={{ fontSize: 18, fontWeight: "bold" }}>
                        v14.15.0
                      </code>
                    </div>
                    <p className="mb-4 mt-4">
                      Następnie sprawdzamy poprawność instalacji npm. W oknie
                      wpisujemy komendę:
                    </p>
                    <div>
                      <code style={{ fontSize: 18, fontWeight: "bold" }}>
                        npm --version
                      </code>
                    </div>
                    <p className="mt-4">
                      Jeżeli wszystko jest ok, w oknie wyświetli się numer
                      wersji npm, np:
                    </p>
                    <div>
                      <code style={{ fontSize: 18, fontWeight: "bold" }}>
                        6.14.8
                      </code>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="cra" title="Create React App" className="tab">
                  <div className="software__tab">
                    <p className="mb-4">
                      Po poprawnej instalacji npm, możemy przystąpić do
                      instalacji pakietu <strong>create-react-app</strong>.
                      Instalacja odbywa sie poprzez wywołanie polecenia pakietu
                      npm w wiersz polecenia, Power Shellu lub terminalu.
                    </p>
                    <p className="mb-4">
                      W tym celu uruchamiamy:
                      <ul>
                        <li>
                          - dla systemu Windows => wiersz polecenia lub Power
                          Shell
                        </li>
                        <li>- dla systemu macOS => Terminal</li>
                      </ul>
                      W oknie wpisujemy komendę:
                    </p>
                    <div>
                      <code style={{ fontSize: 18, fontWeight: "bold" }}>
                        npm install create-react-app
                      </code>
                    </div>
                    <p className="mt-4">
                      Po kilku chwilach pakiet zostanie zainstalowany.
                    </p>
                  </div>
                </Tab>
                <Tab
                  eventKey="ide"
                  title="Edytory (VS Code, WebStorm, Brackets)"
                  className="tab"
                >
                  <div className="software__tab">
                    <p className="mb-4">
                      Instalacja środowisk programistycznych jest banalna i
                      typowa. Pobieramy wersję instalatora właściwą dla systemu
                      operacyjnego i uruchamiamy instalator. Proszę wybrać sobie
                      edytor który najbardziej Państwu odpowiada. VS Code i
                      Brackets są aplikacjami darmowymi. Natomiast WebStorm jest
                      programem płatnym.
                    </p>
                    <p className="mb-4">
                      Jednakże, studenci mogą uzyskać bezpłatnie na rok pełną
                      licencję na wszystkie produkty firmy JetBrains (w tym
                      także WebStorm).W tym celu należy wypełnić krótką ankietę
                      dostępną{" "}
                      <a
                        className="text-blue"
                        href="https://www.jetbrains.com/shop/eform/students"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>pod tym adresem.</strong>
                      </a>
                    </p>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default Install;
