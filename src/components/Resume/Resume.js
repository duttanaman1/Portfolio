import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Naman-Dutta.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="GRADUATE ANALYST [Barclays]"
              date="AUGUST 2021 - PRESENT"
              content={[
                "Started full time job from 2nd August 2021 as graduate analyst",
              ]}
            />
            <Resumecontent
              title="WEB DEVELOPER INTERNSHIP [Techniqa Solutions]"
              date="April 2020 - May 2020"
              content={[
                "Integrated 6+ end-to-end website in PHP, MySQL, and JavaScript by working 45+ hours a week",
                "Google pay & Paytm API integration for payment, Google & Facebook API integration for login",
                "Used FaceAPI, Web Audio Analyser Tools; object-oriented programming",
              ]}
            />
            <Resumecontent
              title="WEB DEVELOPER INTERNSHIP [10 Orbits]"
              date="June 2019 - July 2019"
              content={[
                "45+ hours a week of component building, custom web templates, and assistant graphical designing in ongoing projects",
                " Utilized the data to find the issues using Topic Modelling and Building models using LSTM, BERT to predict the sentiments of the youth.",
                " Demonstration, wireframing and testing report on 3 team projects. Improved MVC concepts, REST API, and CodeIgnitor Framework; Troubleshooting 10 to 15 small web components",
              ]}
            />
            <Resumecontent
              title="PUBLIC RELATION EXECUTIVE [IEEE SSIT VIT Student Chapter]"
              date="March 2018 - March 2020"
              content={[
                "Consolidated marketing, strategic advertisements, and sponsorship management that yielded in 50% growth",
                "Operated 3 major competitive hacks, 5 major recruitments, 12 workshops, and 120 days of night session activities",
                "Lead a chapter of 100+ members as Board by imposing various decisions. Directed designing and marketing team",
                "Volunteered in Student Outreach Program activities for 1.5 years and collaboration with other chapters and clubs",
                "Provided support for technical documentations, website integration and Project Management for the chapter",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="COMPUTER SCIENCE ENGINEERING [VIT, Vellore ] "
              date="2018 - 2021"
              content={["CGPA: 8.6 "]}
            />
            <Resumecontent
              title="12TH BOARD [Modern Indian School, Kathmandu]"
              date="2015 - 2017"
              content={["Precentage: 87%"]}
            />
            <Resumecontent
              title="10TH BOARD [Bridgewater International School] "
              date="2015"
              content={["Precentage: 86.5%"]}
            />
            <h3 className="resume-title">
              Awards <span className="purple">and</span> Achievements
            </h3>
            <Resumecontent
              title="Certificate of Merit"
              content={[
                "Highest Scrorer in Computer Science in class 12, Modern Indian School",
              ]}
            />
            <Resumecontent
              title="Gold Certification"
              content={["Secured rank 6th in HACK4CAUSE 3.0"]}
            />

            <Resumecontent
              title="5 stars Golden badge"
              content={["Problem Solving in Hackerrank"]}
            />

            <Resumecontent
              title="Project Presentationn"
              content={[
                "Project Presentation 0n 23rd October 2020 in 4th International Online Multidisciplinary Research Conference",
              ]}
            />

            <Resumecontent
              title="Paper Publication"
              content={[
                "Publication in Journal of Information and Computational Science: 'A novel approach for accident detection and traffic control' ",
              ]}
            />
            <h3 className="resume-title">Certification</h3>
            <Resumecontent
              title=""
              content={[
                `Fundamentals of Digital Image Processing`,
                `Single Page Web Application with Angular JS`,
                "Advanced Styling with Response Design",
                "Rin Career Academy Course",
                "Bootstrap & JQuery – Certification Course",
                "Cyber Security and Internet of Things",
                "Microsoft EXCEL -Learn MS EXCEL for Data Analysis",
                "Getting started with Azure",
                "Modern Javascript for ReactJS – ES6",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
