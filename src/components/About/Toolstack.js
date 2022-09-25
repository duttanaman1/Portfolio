import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiPostman,
  SiHeroku,
  SiMicrosoftoffice,
  SiIntellijidea,
  SiJenkins,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import {FaJira, FaBitbucket} from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <h6>Intellij Idea</h6>
      </Col>
            <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
        <h6>GitHub</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBitbucket />
        <h6>Bitbucket</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <h6>Jenkins</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJira />
        <h6>Atlassian JIRA</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>Visual Studios Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <h6>Jupyter Notebook</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h6>Postman</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
        <h6>Microsoft Office</h6>
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <h6>Linux</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
