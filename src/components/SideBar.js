import React from "react";
import styled from 'styled-components';
import {
    AiFillLinkedin,
    AiOutlineGithub,
    AiOutlineMail,
  } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";


  function handleIconClick(iconName) {
    if (iconName == "Linkedin") {
      window.open("https://www.linkedin.com/in/arvindmaniv/", "_blank");
    } else if (iconName == "Github") {
      window.open("https://github.com/arooxa", "_blank");
    } else {
      window.open("mailto:arvindmaniv@gmail.com", "_blank");
    }
  }

export default class SideBar extends React.Component {
    render() {
        return (
            <StyledSideNav>
                <Linkedin 
                onClick={() => handleIconClick("Linkedin")}
                />
                <Github 
                onClick={() => handleIconClick("Github")}
                />
                <Mail
                onClick={() => handleIconClick("Mail")}
                />
            </StyledSideNav>
        );
    }
}

const Linkedin = styled(AiFillLinkedin)`
    font-size: 50px;
    margin: 15% 0%;
    color: white;

    &:hover {
        font-size: 65px;
    }
`

const Github = styled(AiOutlineGithub)`
    font-size: 50px;
    margin: 15% 0%;
    color: white;

    &:hover {
        font-size: 65px;
    }
`

const Mail = styled(AiOutlineMail)`
    font-size: 50px;
    margin: 15% 0%;
    color: white;

    &:hover {
        font-size: 65px;
    }
`

const Resume = styled(IoDocumentTextOutline)`
    font-size: 50px;
    margin: 5% 0%;
    color: white;

    &:hover {
        font-size: 65px;
    }
`


const StyledSideNav = styled.div`
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 125px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    background: transparent; 
    overflow-x: hidden;     /* Disable horizontal scroll */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 100px;
    align-items: center;
`
