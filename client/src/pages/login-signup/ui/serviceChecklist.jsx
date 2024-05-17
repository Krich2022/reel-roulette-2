import { Form, Col, Row } from "react-bootstrap";
import { useState } from "react";

export default function StreamingChecklist({ list, click }) {
  return (
    <Row className="pb-4 streaming-row">
      {Array.isArray(list) &&
        list.map((choice, index) => {
          return (
            <Col sm={12} md={6} lg={4} key={index} style={{ padding: "0px" }}>
              <Form.Check
                type="checkbox"
                label={choice.title}
                id={choice.id}
                onChange={(e) =>
                  click(
                    { id: choice.id, title: choice.title },
                    e.target.checked
                  )
                }
              />
            </Col>
          );
        })}
    </Row>
  );
}
