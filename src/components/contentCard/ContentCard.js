import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";

function ContentCard({ title, text, link, code }) {
  const clsName = !code ? "content__card" : "content__card__code";
  return (
    <Col lg={4} md={4} xs={12}>
      <Link className="link" to={link}>
        <Card className={clsName} style={{ height: "155px" }}>
          <Card.Body>
            <Card.Title className="card__title">{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default ContentCard;
