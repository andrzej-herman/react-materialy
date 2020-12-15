import React, { Fragment } from "react";
import "../../App.css";
import { Row, Col, Breadcrumb, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Events() {
  const handleButton = () => {
    alert("Nacisnąłeś/aś czerwony przycisk !!!");
  };

  const handleInput = () => {
    alert(
      "Wpisałeś/aś coś w pole tekstowe lub skasowałeś/aś to co wpisałeś/aś !!!"
    );
  };

  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/events">Zdarzenia w React</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">Zdarzenia w React</h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Programista musi mieć możliwość reagowania na pewne zachowania
                użytkowników aplikacji którą programuje. Jest to fundamentalna
                zasada programowania. Bez tego nie byłaby możliwa żadna
                interakcja między aplikacją a jej użytkownikiem. Aplikacja
                udostępnia Użytkownikowi pewien interfejs (w przypadku aplikacji
                React jest to strona internetowa). Programista zamieszcza na
                niej szereg elementów, które pozwalają właśnie na taką
                interakcję. Są to w szczególności przyciski, pola tekstowe, pola
                wyboru, tzw: datepickery (kontrolki umożliwiające wybór daty)
                czy też formularze. Wyobrażmy sobie np: serwis Allegro. Bez tych
                elementów nie byłoby możliwe przeprowadzenie jakiejkolwiek
                transakcji zakupu.
              </p>
              <p>
                Co więcej - programista musi mieć narzędzia umożliwiające
                wykrycie zachowań użytkowników, czyli "momentu", gdy Ci wpisują
                coś w pola tekstowe, naciskają przyciski na stronie, wybierają
                element z listy wyboru czy też naciskają klawisz Enter po
                zakończeniu wypełniania formularza. Te "momenty" nazwywamy w
                programowaniu zdarzeniami, a narzędzia, które pozwalają Nam na
                wykrycie tych zdarzeń - event listener'ami (nasłuchiwaczami
                zdarzeń).
              </p>
              <p>
                React oferuje Nam cały zestaw takich event listenerów. Są to
                specjalne metody, które nasłuchują właśnie czy konkretne
                zdarzenie właśnie miało miejsce. Wywołujemy je wewnątrz
                elementu, którego zdarzenia chcemy nasłuchiwać i gdy ono nastąpi
                wywołujemy metodę, którą sobie wcześniej przygotowaliśmy.
                Najważniejsze z event listener'ów (te które, wykorzystamy w
                naszych aplikacjach) omówię teraz.
              </p>
              <h5>
                Naciśnięcie przycisku - zdarzenie <strong>onClick</strong>
              </h5>
              <p>
                Jest to wykrycie kiedy uzytkownik naciśnie przycisk. Przykład
                zastosowania prezentuję poniżej:
              </p>
              <Button
                variant="danger"
                onClick={handleButton}
                style={{
                  paddingLeft: 25,
                  paddingRight: 25,
                  marginBottom: 20,
                  marginTop: 10,
                }}
              >
                Naciśnij przycisk
              </Button>

              <p>
                Aby zrealizować taką funkcjonalność musimy wewnątrz elementu
                Button zamieścić "nasłuchiwacza" onClick i wskazać mu metodę,
                którą wywołamy w momencie gdy onClick wykryje naciśnięcie tego
                przycisku (tutaj: kiedyNacisnietoPrzycisk):
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  {
                    " <Button onClick={kiedyNacisnietoPrzycisk}>Naciśnij przycisk</Button>"
                  }
                </code>
              </div>
              <p style={{ marginTop: 20 }}>
                Nastepnie wewnątrz naszego pliku js musimy zadeklarować tę
                metodę, a wewnątrz niej napisać kod, który wykonamy właśnie w
                momencie gdy Użytkownik go przyciśnie. W tym konkretnym
                przypadku wyświetlamy okienko przeglądarki.
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  {" const kiedyNacisnietoPrzycisk = () => {\n" +
                    '    alert("Nacisnąłeś/aś czerwony przycisk !!!");\n' +
                    "  };"}
                </code>
              </div>
              <h5 style={{ marginTop: 40 }}>
                Wpisanie tekstu w pole tekstowe (input) - zdarzenie{" "}
                <strong>onChange</strong>
              </h5>
              <p>
                Jest to wykrycie kiedy zmieni wartość pola tekstowego (wpisze w
                nie cokolwiek z klawiatury). Przykład zastosowania prezentuję
                poniżej:
              </p>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="wpisz cokolwiek w to pole tekstowe"
                  onChange={handleInput}
                />
              </Form.Group>

              <p>
                Aby zrealizować taką funkcjonalność musimy wewnątrz elementu
                bootstrapa FormControl zamieścić "nasłuchiwacza" onChange i
                wskazać mu metodę, którą wywołamy w momencie gdy onChange
                wykryje naciśnięcie czegokolwiek na klawiaturze (tutaj:
                kiedyWpisanoCosZKlawiatury):
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  {" <Form.Control onChange={kiedyWpisanoCosZKlawiatury} />"}
                </code>
              </div>
              <p style={{ marginTop: 20 }}>
                Nastepnie wewnątrz naszego pliku js musimy zadeklarować tę
                metodę, a wewnątrz niej napisać kod, który wykonamy właśnie w
                momencie gdy Użytkownik go przyciśnie. W tym konkretnym
                przypadku wyświetlamy okienko przeglądarki.
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  {" const kiedyWpisanoCosZKlawiatury = () => {\n" +
                    '    alert("Wpisałeś/aś coś w pole tekstowe lub skasowałeś/aś to co wpisałeś/aś !!!");\n' +
                    "  };"}
                </code>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default Events;
