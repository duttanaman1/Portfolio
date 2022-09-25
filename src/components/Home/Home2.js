import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">              
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              I am fluent in classics like
              <i><b className="purple"> Java, Javascript </b></i>and<i><b className="purple"> MySQL.</b></i>
              <br />
              <br/>
              I am working as a <i><b className="purple"> Software Developer</b></i>&nbsp; in a agile team.
              <br/>              
              <i><b className="purple"> Design, Development, Production </b></i>and
              <i><b className="purple"> Support</b></i>
              <br/>
              That pretty much sums up most of my work activities.
              <br />
              <br/>
              I am <i><b className="purple"> Technology Enthusiat</b></i>; passionate about Learning.
              <br/>
              My field of Interest's are: &nbsp;
              <br/>
              &nbsp;          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i><b className="purple"> Software Engineering</b></i>
              <br />
              &nbsp;          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i><b className="purple"> Web Development</b></i>
              <br />
              &nbsp;          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i><b className="purple"> Data Analysis</b></i>
              <br />
              &nbsp;          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i><b className="purple"> Machine Learning</b></i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              using <b className="purple">Blockchain, Cloud Technology</b> and&nbsp;
              <i><b className="purple">Artificial Intelligence</b></i>              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/duttanaman1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dutta.naman.until_eternity/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/duttanaman1999/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
