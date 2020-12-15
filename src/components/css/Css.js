import React, { Fragment } from "react";
import "../../App.css";
import { Row, Col, Breadcrumb, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import bootstrapRow from "../../img/bootstrap-row.jpg";
import margin from "../../img/margin.jpg";
import padding from "../../img/padding.jpg";

function Css() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/css">CSS - kaskadowe arkusze stylów</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">CSS - kaskadowe arkusze stylów</h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Nie będę w tym miejscu opisywał całego systemu kaskadowych
                arkuszy stylów, ponieważ rodział musiałby zająć kilkadzisiąt
                stron. W stopce strony w sekcji Ważne linki znajdziecie Państwo
                link do podstawowego kursu CSS. Zresztą takich kursów tylko w
                serwisie YouTube są setki i jeżeli chcecie skorzystać z nich,
                możecie sobie wybrać taki, który Wam najbardziej odpowiada.
              </p>
              <p>
                Ja - w tym rodziale opiszę jedynie te właściwości CSS które
                wykorzystujemy w naszych szkoleniowych aplikacjach React, które
                piszemy sobie na naszych ćwiczeniach. Możecie sobie Państwo sami
                poeksperymentować i sprawdzić w waszej aplikacji jak zmiana
                poszczególnych właściwości CSS wpływa na wygląd strony.
              </p>
              <p>
                Przede wszystkim, aby spowodować, żeby nasza strona wyświetlała
                się zgodnie z wytycznymi zawartymi w pliku CSS, musimy taki plik
                dołączyć do pliku js, który zawiera zawartość naszej strony.
                Konwencja jest taka, że nadajemy nazwę plikowi CSS taką samą jak
                plikowi js i dołączamy (importujemy) go do naszego pliku js.
                Jeżeli np: nasz plik strony ma nazwę Strona.js to tworzymy plik
                Strona.css i na górze, w sekcji import pliku Strona.js
                wskazujemy ścieżkę do pliku Strona.css. Gdy będą one w tym samym
                katalogu wówczas import wygląda nastepująco:
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  import "./Strona.css"
                </code>
              </div>
              <p style={{ marginTop: 20, marginBottom: 20 }}>
                Gdy już mamy taki plik css, wówczas w pliku js nadajemy
                elementom naszej strony, które chcemy ostylować nazwy klas
                używając słowa className (słowo: class jest React zastrzeżone) i
                nastepnie nadejemy właściwości css w pliku css tej klasie. Np: w
                pliku js piszemy:
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  {"<div className='element'>ZAWARTOŚĆ ELEMENTU</div>"}
                </code>
              </div>
              <p style={{ marginTop: 20, marginBottom: 20 }}>
                A w pliku css piszemy:
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  {".element {"}
                  <br />
                  {" // właściwości css, które chcemy ustawić "}
                  <br />
                  {"}"}
                </code>
              </div>
              <p style={{ marginTop: 20, marginBottom: 20 }}>
                Teraz omówię w skrócie właściwości css, które wykorzystujemy w
                naszych aplikacjach.
              </p>
              <h5>
                Sposób wyświetlania elementów na stronie (lub w środku
                komponentu nadrzędnego) - <strong>display</strong>
              </h5>
              <p style={{ marginTop: 20, marginBottom: 20 }}>
                Domyślnie elementy html są wyświetlane blokowo, czyli mają
                właściwość display ustawioną na wartość block. (jak nie jest
                ustawiona żadna to właśnie domyślnie jest block) - czyli jeden
                pod drugim. Jeżeli korzystamy z bootstrapa i użyjemy elementu{" "}
                <strong>Row</strong> wówczas w środku tego elementu układ będzie
                typu grid (display: grid - tak działa bootstrap) i elementy bedą
                wyświetlane w kolumnach obok siebie. Pamiętajmy, że kolumn może
                być maksymalnie 12. Ilustruje to przykład poniżej:
              </p>
              <div className="center">
                <img
                  className="software__clone__img"
                  src={bootstrapRow}
                  alt="moduły visual studio"
                />
              </div>
              <p style={{ marginTop: 20, marginBottom: 20 }}>
                Oczywiście, my nie musimy nadawać właściwości display: grid
                samodzielnie. Robi to za Nas bootstrap. Wystarczy, że
                wykorzystamy elementy Row oraz Col. Jeżeli jednak nie chcemy
                korzystać z dobrodziejstw bootstrapa i samodzielnie ustawiać
                sposób wyświetlania elementów, możemy użyć na przykład
                właściwości <strong>flex</strong>. (display: flex). Wówczas
                elementy w tak ostylowanym elemencie nadrzędnym bedą się
                wyświetlały jeden obok drugiego bez żadnej przerwy. Możemy je
                wyśrodkować horyzontalnie nadając dodatkową właściwość:{" "}
                <strong>justify-content: center</strong> a także wertykalnie
                poprzez właściwość: <strong>align-items: center</strong>
              </p>
              <h5>
                Zewnętrzny margines elementu - <strong>margin</strong>
              </h5>
              <p style={{ marginTop: 20, marginBottom: 20 }}>
                Właściwość margin określa margines zewnętrzny elementu. Innymi
                słowy mówi o tym jak daleko od granic tego elementu bedą
                wyświetlały się inne elementy sąsiadujące. Gdy użyjemy
                właściwości margin, wówczas ustawimy tę odległość dla każdej ze
                stron tego elementu. Gdy potrzebujemy zrobić to wybiórczo
                wówczas mamy do dyspozycji właściwości: margin-top,
                margin-bottom, margin-left i margin-right. Poniżej przykład.
                Jeśli nadamy elementowi A właściwość margin: 20px, to wówczas
                wszystkie pozostałe elementy będą wyświetlone w odległości 20 px
                od niego.
              </p>
              <div className="center">
                <img
                  className="software__clone__img"
                  src={margin}
                  alt="moduły visual studio"
                />
              </div>
              <h5>
                Wewnętrzny margines elementu - <strong>padding</strong>
              </h5>
              <p style={{ marginTop: 20, marginBottom: 20 }}>
                Właściwość padding określa margines wewnętrzny elementu. Innymi
                słowy mówi o tym jak daleko krawędzi tego elementu bedą
                wyświetlały się inne elementy znajdujące się w jego wnętrzu. Gdy
                użyjemy właściwości padding, wówczas ustawimy tę odległość dla
                każdej z krawędzi tego elementu. Gdy potrzebujemy zrobić to
                wybiórczo wówczas mamy do dyspozycji właściwości: padding-top,
                padding-bottom, padding-left i padding-right. Poniżej przykład.
                Jeśli nadamy elementowi A właściwość padding: 20px, to wówczas
                wszystkie elementy wewnatrz będą wyświetlone w odległości 20px
                od jego krawędzi niego.
              </p>
              <div className="center">
                <img
                  className="software__clone__img"
                  src={padding}
                  alt="moduły visual studio"
                />
              </div>
              <h5>
                Rozmiar elementu - <strong>height i width</strong>
              </h5>
              <p style={{ marginTop: 20, marginBottom: 20 }}>
                Dokładny rozmiar elementu możemy ustawić wykorzystując
                właściwości height (wysokość) oraz width (szerokość). Możemy
                ustawić je w pikselach. Możemy także ustawić tę wartość w
                procentach. Jeżeli np. na rysunku powyżej nadamy zielonemu
                elementowi właściwość width: 100%, wówczas będzie on miał
                szerokość równą elementowi A - wypełni bowiem całkowicie wnętrze
                elementu nadrzędnego.
              </p>
              <h5>
                Kolor elementu - <strong>color i background-color</strong>
              </h5>
              <p style={{ marginTop: 20, marginBottom: 20 }}>
                Kolor elementu (kolor tła) ustawiamy za pomocą właściwości{" "}
                <strong>background-color</strong>. Więc jeżeli chcielibyśmy (tak
                jak na rysunkach powyżej) usyskać taki kolor elementu A
                użylibyśmy: background-color: #da3030 (to ten ciemnoczerwony
                kolor wyrażony w postaci hex). Natomiast właściwość{" "}
                <strong>color</strong> określa kolor tekstu (czcionki) wewnątrz
                elementu). Wartości kolorów możemy przedstawiać na trzy różne
                sposoby:
              </p>
              <ul>
                <li>
                  jako nazwy kolorów: np: white, red, green, forestgreen, grey,
                  black,
                </li>
                <li>
                  jako hex czyli kod koloru w systemie szesnastkowym poprzedzony
                  znakiem krzyżyka: np: #ffffff (biały), #000000 (czarny),
                  #ff0000 (czerwony)
                </li>
                <li>
                  jako składowe rgb (liczby całkowite od 0 do 255 oznaczające
                  kolejno barwę czerwoną, zieloną i niebieską) plus współczynnik
                  przezroczystości od 0 do 1 np: rgba (255, 255, 255, 1) - biały
                  zupełnie nieprzezroczysty, rgba(0, 0, 0, 0.8) - czarny
                  przezroczysty w 20%, rgba(0, 0, 255, 0.5) - niebieski
                  przezroczysty w 50%,
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default Css;
