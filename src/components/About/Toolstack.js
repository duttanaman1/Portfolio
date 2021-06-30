import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiPostman,
  SiHeroku,
  SiMicrosoftoffice,
  AiFillGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="Linux">
          <SiLinux />
        </abbr>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="Visual Studios Code">
          <SiVisualstudiocode />
        </abbr>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="Jupyter Notebook">
          <SiJupyter />
        </abbr>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="Postman">
          <SiPostman />
        </abbr>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="Heroku">
          <SiHeroku />
        </abbr>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="Microsoft Office">
          <SiMicrosoftoffice />
        </abbr>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="GitHub">
          <AiFillGithub />
        </abbr>
      </Col>
    </Row>
  );
}

export default Toolstack;
