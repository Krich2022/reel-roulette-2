import { useState, useEffect } from "react";
import ServiceBox from "./ui/ServiceBox";
import { Row, Accordion } from "react-bootstrap";

export default function Movie() {
  const [serviceState, setServiceState] = useState(["apple", "hbo", "prime"]);
  const [genreState, setGenreState] = useState([]);

  useEffect(() => {});
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Streaming Services</Accordion.Header>
        <Accordion.Body>
          <Row>
            <ServiceBox services={serviceState} />
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Movie Genre</Accordion.Header>
        <Accordion.Body></Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
