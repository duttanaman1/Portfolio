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
  SiPytorch,
  SiTensorflow,
  SiJava,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="Java">
          <SiJava />
        </abbr>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="Cpp">
          <CgCPlusPlus />
        </abbr>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="Python">
          <DiPython />
        </abbr>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="PHP">
          <DiPhp />
        </abbr>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="JavaScript">
          <DiJavascript1 />
        </abbr>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <abbr title="NodeJs">
          <DiNodejs />
        </abbr>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="ReactJs">
          <DiReact />
        </abbr>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="Jquery">
          <SiJquery />
        </abbr>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="MongoDb">
          <DiMongodb />
        </abbr>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="Mysql">
          <SiMysql />
        </abbr>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <abbr title="Sass">
          <DiSass />
        </abbr>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="Tailwindcss">
          <SiTailwindcss />
        </abbr>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="Bootstrap">
          <SiBootstrap />
        </abbr>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <abbr title="Git">
          <DiGit />
        </abbr>
      </Col>
    </Row>
  );
}

export default Techstack;
