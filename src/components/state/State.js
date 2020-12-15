import React, { Fragment } from "react";
import "../../App.css";
import { Row, Col, Breadcrumb, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function State() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/state">Stan aplikacji reactowej</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">Stan aplikacji reactowej</h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Komponenty funkcyjne w React (czyli takie których używamy w
                naszych aplikacjach na ćwiczeniach) np: App.js są z zasady
                bezstanowe. Oznacza to, że nie możemy w ich środku zmieniać ich
                stanu w czasie rzeczywistym. Jedyne co możemy - to przekazać do
                nich z komponentu wyższego rzędu właściwości, które mają wpływ
                na ich stan. Np: jeżeli mam na stronie jakiś licznik, który ma
                się powiększać o jeden co sekundę, to nie mam możliwości
                zrobienia tego w samym komponencie funkcyjnym. Ponieważ to by
                oznaczało, że ma on w każdym momencie jakiś swój stan. Licznik
                sekundę temu miał wartość 2 (stan komponentu czyli wartość
                licznika = 2), a sekundę później wartość była 3. Mogę to jedynie
                zrealizować w ten sposób, że do komponentu w którym jest licznik
                przekażę jako argument wartość licznika, ale przekażę go z
                komponentu klasowego (który ma możliwość zapamiętywania stanu)
                wyższego rzędu w którym bedę zmieniał wartość licznika, a
                komponent z licznikiem będzie go tylko po prostu wyświetlał.
              </p>
              <p>
                Ponieważ jednak używanie komponentów klasowych (tych
                obsługujących stan) jest w React dużo bardziej skomplikowane,
                twórcy tej biblioteki jakiś czas temu postanowili, że rozszerzą
                funkcjonalność Reacta między innymi o możliwość obsługi stanu
                komponentów funkcyjnych. Zostało to zrobione poprzez
                wprowadzenie tak zwanych hook'ów. Jednym z nich jest właśnie
                hook o nazwie <strong>useState</strong> służący do zmiany stanu.
              </p>
              <p>
                Wróćmy zatem do naszego licznika. Aby móc go powiększać co
                sekundę o jeden, musimy wprowadzić do naszego komponentu stan,
                który będzie w każdym momencie reprezentował aktualną wartość
                licznika. Bez wiedzy jaka jest jego aktualna wartość nie
                będziemy mogli nadać jemu nowej wartości (czyli tej powiększonej
                o jeden). Musimy zatem wprowadzić zmienną która będzie
                przechowywała nam wartość naszego licznika. Wykorzystamy zatem
                hooka useState. Na pocxątku musimy zaimportować do naszego pliku
                useState z biblioteki React, za pomocą odpowiedniej komendy
                importu:
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  {"import React, {useState} from 'react'"}
                </code>
              </div>
              <p style={{ marginTop: 20 }}>
                Teraz w środku naszego komponentu użyjemy hooka poprzez komendę:
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  const [licznik, setLicznik] = useState(0);
                </code>
              </div>
              <p style={{ marginTop: 20 }}>
                useState ma zawsze stałą składnię. W nawiasach kwadratowych
                deklarujemy dwie zmienne. Pierwsza z nich określa zmienną w
                której będziemy przechowywali wartość licznika (licznik). Druga
                z nich to funkcja, która będzie zmianiała wartość tej zmiennej
                wtedy kiedy potrzebujemy (setLicznik). Te zmienne przyrównujemy
                do useState, a w nim w nawiasach okrągłych ustawiamy początkową
                wartość naszej zmiennej która ma zostać zapamiętana. W naszym
                przypadku 0. (licznik to liczba całkowita). Teraz już wtedy
                kiedy potrzebujemy (czyli co sekundę) wywołujemy naszą funkcję
                setLicznik:
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  setLicznik(licznik++);
                </code>
              </div>
              <p style={{ marginTop: 20 }}>
                Aby to zrealizować co sekundę musielibyśmy użyć wbudowanej
                funkcji javascript o nazwie setInterval - o której porozmawiamy
                kiedy indziej. To w tej chwili nie jest teraz najważniejsze.
                Równie dobrze moglibyśmy (wszystko zależy od tego co chcemy
                osiągnąć w naszym programie) powiększać zmienną licznik o jeden
                (czyli wywoływać funkcję setLicznik(licznik++)) za każdym razem
                gdy Użytkownik naciśnie jakiś przycisk. (Pisałem o tym w
                poprzednim rozdziale - czyli w środku funkcji
                "kiedyNacisnietoPrzycisk" - zamiast alertu okna przeglądarki).
                Najważniejsze jest to, że w ten sposób umiemy zapamiętywać stan
                naszego komponentu. A jeszcze ważniejszą rzeczą jest jedna z
                fundamentalnych zasad React:
              </p>
              <Alert
                variant="success"
                style={{
                  marginTop: 40,
                  fontSize: 20,
                  textAlign: "center",
                  padding: 30,
                }}
              >
                <strong>
                  Za każdym razem gdy zmienia się stan komponentu (czyli w tym
                  przypadku wartość zmiennej licznik) komponent zostaje
                  wyrenderowany od nowa !!! To znaczy, że wszystkie elementy
                  html które zawiera ta strona (tekst, ramki, przyciski,
                  zdjęcia, etc ... - absolutnie wszystko) zostaje wyświetlone od
                  nowa - bez odświeżania strony.
                </strong>
              </Alert>
              <p style={{ marginTop: 40 }}>
                Już niedługo przekonacie się, że ma to głeboki sens i jest
                nieodzowne, aby aplikacja napisana w React działała prawidłowo.
                Tak naprawdę to nasza strona nie zmienia się w ten sposób że np.
                w tagu h1, w którym pokazujemy wartośćlicznika, zmienia się
                tylko tekst np: z 2 na 3, lecz renderuje się cała strona z
                napisem 3 w tym tagu h1. React robi to jednak tak szybko i w tak
                zoptymalizowany sposób, że Użytkownik niejest wstanie tego
                zauważyć. Wydaje mu się że jedynie sam napis zawierający cyfrę
                licznika uległ zmianie.
              </p>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default State;
