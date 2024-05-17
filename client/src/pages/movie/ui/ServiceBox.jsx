import { Card, Col } from "react-bootstrap";

export default function ServiceBox({ services }) {
  console.log(services);
  return (
    <>
      {Array.isArray(services) &&
        services.map((service, index) => {
          console.log(service);
          return (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>{service}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </>
  );
}
