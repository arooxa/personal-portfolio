import './Home.css';
import React from "react";
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';

const Home  = () => {
    return (
      <Background>
        <Container1>
          <h1>
            <AnimatedText copy = "Hi, I'm Arvind" role="heading" />
          </h1>
        <DescriptionText>Computer Science Student at the University of Washington</DescriptionText>
        <NavBtn>
          <NavBtnLink to="/about">Contact Me</NavBtnLink>
        </NavBtn>
        </Container1>
        <Container2>
          <AboutMeTitles>Welcome to me:</AboutMeTitles>
          <AboutMeDesc>
            I'm an 18 year old college student with a passion for amazing products and new technologies. 
            At this point in my life I'm really motivated to find opportunities to work on some cool projects
            as well as surround myself with people that will help make me better professionally and personally.
          </AboutMeDesc>
          <AboutMeTitles>My Skills:</AboutMeTitles>
          <ProjectDesc>
            - Java, Javascript, HTML, CSS <br/>
            - React, React Native
          </ProjectDesc>
          <AboutMeTitles>Current Projects:</AboutMeTitles>
          <AboutMeDesc>
            Learning about deep learning and using tensorflow to create a music genre classification system
          </AboutMeDesc>
          <AboutMeTitles>Past Projects:</AboutMeTitles>
          <ProjectTitle>
            Hydro - Financial Management                            Spring 2021
          </ProjectTitle>
          <ProjectDesc>
            - Independent project during my senior year of high school to learn about react native and JSX <br />
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
`;

const Container1 = styled.section`
  */background: pink;
  width: 50vw;
  padding-top: 30vh;
  flex: 1;
  */padding-left: 100px; only if sidebar is active
`;

const Container2 = styled.section`
  background: #171717;
  border-color: #A7D5FA;
  border-style: solid;
  border-width: 1px;
  margin: 120px;
  margin-right: 140px;
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
  font-family: 'Open-Sans';
  color: #8D8D8D;
  font-size: 16px;
  padding-top: 10px;
`;

const AboutMeTitles = styled.h1`
font-family: 'Space Mono';
color: #FFFFFF;
font-size: 40px;
padding-bottom: 20px;
padding-top: 10px;
align-self: center;
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
align-self: center;
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
