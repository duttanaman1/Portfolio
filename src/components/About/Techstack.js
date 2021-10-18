import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiPhp,
  DiSass,
} from "react-icons/di";
import {
  SiJava,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiSpring,
  SiApachemaven,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
        <h6>Java</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
        <h6>Spring Boot</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachemaven />
        <h6>Apache Maven</h6>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiJunit5 />
        <h6>JUnit 5</h6>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h6>C++</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <h6>PHP</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>JavaScript</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>NodeJs</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>ReactJs</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
        <h6>JQuery</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6>MongoDb</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <h6>MySql</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
        <h6>SASS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h6>Tailwindcss</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6>Git</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
