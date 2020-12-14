import React, { Fragment } from "react";
import "../../App.css";
import { Row, Col, Breadcrumb, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import cloneimg from "../../img/clone.jpg";

function Clone() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/clone">Klonowanie repozytorium z serwera Github</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">
            Klonowanie repozytorium z serwera Github
          </h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Na początku musimy wybrać na swoim dysku miejsce gdzie będziemy
                trzymali swoje kody aplikacji. W tym celu musimy utworzyć
                katalog. To, gdzie go utworzymy nie ma oczywiście żadnego
                znaczenia. Przypuśćmy, że wybraliśmy katolog o nazwie "PROJEKTY"
                umieszczony bezpośrednio na dysku C:. Po utworzeniu katalogu,
                otwieramy przeglądarkę internetową i logujemy się na swojego
                Githuba. Następnie przechodzimy na zakładkę "Repositories" i
                klikamy na nazwę repozytorium z naszym projektem aplikacji
                reactowej, które utworzyliśmy wcześniej. Klikamy na zielony
                przycisk "Code" i kopiujemy do schowka adres naszego
                repozytorium.
              </p>
              <div className="center">
                <a href={cloneimg} target="_blank" rel="noopener noreferrer">
                  <img
                    className="software__clone__img"
                    src={cloneimg}
                    alt="moduły visual studio"
                  />
                </a>
              </div>
              <p style={{ textAlign: "justify", marginTop: 40 }}>
                W systemie Windows uruchamiamy wiersz poleceń lub program Power
                Shell. Natomiast w macach i macbookach uruchamiamy Terminal. W
                oknie przechodzimy do katalogu, który przed chwilą utworzyliśmy.
                Możemy do tego wykorzystać komendę cd (change directory). W
                naszym przypadku przechodzimy do katalogu PROJEKTY. Wpisujemy
                zatem komendę: (nastepnie naciskamy Enter)
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  cd C:/PROJEKTY
                </code>
              </div>
              <p style={{ textAlign: "justify" }} className="mt-4">
                Gdy jesteśmy już we właściwym katalogu klonujemy repozytorium
                wpisując komendę git clone oraz adres repozytorium który przed
                momentem skopiowaliśmy z naszego Githuba.
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  git clone WASZ_ADRES_REPOZYTORIUM
                </code>
              </div>
              <p style={{ textAlign: "justify" }} className="mt-4">
                Po nacisnięciu klawisza Enter, repozytorium skopiuje się serwera
                Github do naszego katalogu na dysku. W okienku wyświetli się
                rezultat operacji klonowania.
              </p>
              <Alert variant="danger" style={{ marginTop: 40 }}>
                <strong>UWAGA !!! </strong>Jeżeli wykonujemy operację klonowania
                po raz pierwszy na naszym komputerze, po naciśnięciu klawisza
                Enter - zanim pliki skopiują się na nasz dysk - system wyświetli
                okienko logowania do serwisu Github. Należy wówczas dokonać
                autoryzacji, wpisując swoją nazwę Użytkownika GitHub oraz hasło.
              </Alert>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default Clone;
