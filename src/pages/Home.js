import './Home.css';
import React from "react";
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';
import layer1 from '../files/newfullbackground.svg';

const Home  = () => {
    return (
      
      <Background>
        
        {/* <div class="spacer layer1"></div> */}
        <Container1>
          
          <h2>
            <AnimatedText copy = "Hi, I'm Arvind" role="heading" />
          </h2>
        <DescriptionText>Computer Science Student at the University of Washington</DescriptionText>
        {/* <NavBtn>
          <NavBtnLink to="/about">Contact Me</NavBtnLink>
        </NavBtn> */}
        </Container1>
        <Container2>
          <AboutMeTitles>Welcome to me:</AboutMeTitles>
          <AboutMeDesc>
            I'm an 18 year old college student with a passion for amazing products and new technologies. 
            I'm interested to work on some cool projects, so please contact if you have good ideas!
          </AboutMeDesc>
          <AboutMeTitles>My Skills:</AboutMeTitles>
          <ProjectDesc>
            - Java, Javascript, C, Typescript, HTML, CSS <br/>
            - React.js, React Native, Git, Firestore (NoSQL), MySQL (SQL), Linux, Node.js, REST, Spring
          </ProjectDesc>
          <AboutMeTitles>Work Experience:</AboutMeTitles>\
          <ProjectTitle>
            ReThink - Sustainability Organization                            Spring 2022
          </ProjectTitle>
          <AboutMeDesc>
            Rethink is a Foster organization created to promote awareness and help people make more sustainable consumer choices <br/>
            Learning to work with Spring, MySQL, Docker, AWS, and electron to convert to desktop
          </AboutMeDesc>
          <AboutMeTitles>Current Projects:</AboutMeTitles>
          <AboutMeDesc>
            In the process of creating a full stack project management tool to be a desktop application <br/>
            Learning to work with Spring, MySQL, Docker, AWS, and electron to convert to desktop
          </AboutMeDesc>
          <AboutMeTitles>Past Projects:</AboutMeTitles>
          <ProjectTitle>
            Nudge - Weight Loss Tracker                            Spring 2022
          </ProjectTitle>
          <ProjectDesc> -Created to help motivate individuals to continue their weight loss journey by having easy access to their own results <br />
            - Users can add images of their project to a calendar and receive a collage of their progress occasionally <br />
            - Stack: React.js, Node.js, Google Cloud Firestore and File Storage <br />
            - Data was structured in firestore (noSQL database) using key-value pairs <br />
          </ProjectDesc>
          <ProjectTitle>
            Hydro - Financial Management                            Spring 2021
          </ProjectTitle>
          <ProjectDesc>- Independent project during my senior year of high school to learn about react native and JSX <br />
            - Created triple nested navigation with stack, bottom tab, and specific in-screen top tab navigators <br />
            - Learned to pass state between components, use callback methods, and write API queries (Yelp) <br />
            - Used Hooks and AsyncStorage <br />
          </ProjectDesc>
        </Container2>
      </Background>

      );

}

const Background = styled.section`
  height: 100vh;
  background: #1d1d1d;
  padding-left: 125px;
  display: flex;
  background-image: url(${layer1});
    aspect-ratio: 960/300; // full background is 2000/2000 the layer is 960/300
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const Container1 = styled.section`
  */background: pink;
w     padding-top: 30vh;
  flex: 1;
  padding-left: 100px; only if sidebar is active
`;

const Container2 = styled.section`
  background: #171717;
  border-color: #FCFFA3;
  border-style: solid;
  border-width: 1px;
  margin: 140px;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DescriptionText = styled.h1`
  font-family: 'Space Mono';
  color: #FCFFA3;
  font-size: 16px;
  padding-top: 10px;
  padding-left: 7px;
`;

const AboutMeTitles = styled.h1`
font-family: 'Space Mono';
color: #FCFFA3;
font-size: 40px;
padding-top: 10px;
margin-bottom: 0px;
align-self: center;
padding-bottom: 20px;
`

const ProjectTitle = styled(AboutMeTitles)`
font-size: 24px;
`

const AboutMeDesc = styled.h1`
font-family: 'Space Mono';
margin-left: 15px;
margin-right: 15px;
color: #FFFFFF;
font-size: 16px;
padding-bottom: 5px;
flex: display;
`

const ProjectDesc = styled(AboutMeDesc)`
  align-self: flex-start;
`

const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    padding-top: 20px;
    
    borderWeight: 4px;

    @media screen and (max-width: 768px) {
        display:none;
    }
`;

const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256cel;
    padding: 10px 22px;
    color:#A7D5FA;
    outline: none;
    border-color: #A7D5FA;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-size: 30px;

    &:hover {
        transition: all 0.9s ease-in-out;
        background: #A7D5FA;
        color: #000000;
    }
`;




export default Home;
