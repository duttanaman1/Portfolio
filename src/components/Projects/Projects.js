import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import startoff from "../../Assets/Projects/startoff.png";
import exam from "../../Assets/Projects/exam.png";
import parkinson from "../../Assets/Projects/parkinson.png";
import crime from "../../Assets/Projects/crime.png";
import testing from "../../Assets/Projects/testing.png";
import traffic from "../../Assets/Projects/traffic.jpg";
import erp from "../../Assets/Projects/epr.png";
import gesture from "../../Assets/Projects/gesture.jpg";
import attendance from "../../Assets/Projects/attendance.jpg";

import javascript from "../../Assets/Projects/javascript.jpg";
import encryption from "../../Assets/Projects/encryption.jpg";
import pythonvsR from "../../Assets/Projects/pythonvsR.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={startoff}
              isBlog={false}
              title="StartOff"
              description="An smart ecommerce website designed for small scale startup business. Website is constructed using MERN stack in microservices architecture.
               It has additional features like product recommendation, frequent association mining, time series analysis. It has google maps API and Payment API integrations."
              link="https://drive.google.com/file/d/1JcwkETpQ8JID6IU3WyJE6dLUV2K5Ihzk/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exam}
              isBlog={false}
              title="Online Examination Managment System"
              description="A web based appliaction developed using PHP, MySQL, SASS and JQuery. Apart for traditional exam portal functions, I have integrated additional features of self invigilating system.
              It check for multiple face detection using FACEAPI Library, audio detection using web audio analyzer and tab changing detection. Still working on Face Recognition Login."
              link="https://github.com/duttanaman1/Examination-managment-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parkinson}
              isBlog={false}
              title="Diagnosis of Parkinson's Disease via Speech Analysis"
              description="This project proposes a methodology to detect early signs of Parkinson?s disease (PD) through free-speech in uncontrolled background conditions.
              The dataset for this project was created by Max Little of the University of Oxford, in collaboration with the National Centre for Voice and Speech, Denver, Colorado. I have proposed three methods for creating a classification model. 
              I have used KNN Classifier, Decision Tree Classifier and Naïve Bayes Classifier."
              link="https://drive.google.com/file/d/1GThIBphycBH6eJAtVPlk79KO2BOB1FEt/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={erp}
              isBlog={false}
              title="Enterprise Resource Planning System"
              description="It is a combined projects on Online Tutorial System, Online News Portal System, Transportation Management System, Tours and Travel Management System, Online Billing System, Advertisement Management System and Job portal Managment System.
              The projects are developed using PHP and MySql.  "
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              isBlog={false}
              title="Traffic Accident Detection"
              description="A traffic intelligence application built using Arduino coding, Python Libraries like: SMTP & ImageAI, Image Processing and IaaS. The system detects accident, fire and traffic status, and relay this information to traffic control and Emergency services. This information is continously Integrated to website as well."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendance}
              isBlog={false}
              title="Attendance Management System"
              description="Developed an Attendance Managment System coded in Python language that uses OpenCV library for image processing, LBPH algorithm for training images, Haar Cascade Classifier for image classification, tkinter Library for GUI and Firebase for database."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gesture}
              isBlog={false}
              title="Login System using Gesture Recognition "
              description="An application built in python that uses image processiong techniques to recognize gestures and login into system. The application uses OpenCV library, Otsu Thresholding and cosine laws."
              link="https://drive.google.com/file/d/1FJxPj1pM-0QNRQL2d6Y7vZsV4dR0LvZ9/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={testing}
              isBlog={false}
              title="Automated Test case Generation Tool"
              description="An application developed in Python that compiles a programs and generate sample input and output for the program.
               The application can compile programs written in C++, Python, Java, R language and Ruby."
              link="https://drive.google.com/file/d/1Wn1_D_mz9knxppWCjrIU5g2-mczytXL1/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crime}
              isBlog={false}
              title="Crime Prediction System"
              description="An application built using MySql and php which uses Apriori Algorithm to show frequent patterns and correlation of crimes,
               Decision Tree Classifier to show features and its relation to crime, and Naive Bayes Classifier to display crimes based on location."
              link="https://drive.google.com/file/d/1TfidGY-hpK7ocMEwahGZ0q_ABlDv6qNE/view?usp=sharing"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={pythonvsR}
              link="https://www.linkedin.com/pulse/what-major-differences-between-python-r-data-science-naman-dutta/"
              title="Python vs R language"
              site="LinkedIn.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={encryption}
              link="https://www.linkedin.com/pulse/5-common-encryption-algorithms-unbreakables-future-naman-dutta/"
              title="5 common encryption algorithms"
              site="LinkedIn.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={javascript}
              link="https://www.linkedin.com/pulse/what-javascript-framework-choose-naman-dutta/"
              title="What javascript framework to choose"
              site="LinkedIn.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
