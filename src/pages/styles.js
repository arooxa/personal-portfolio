import styled from 'styled-components'
import pic from '../images/LinkedInPic.jpg';


export const Background = styled.div`
  min-height: 100vh;
  background: #D0F9E4;
  flex-direction: column;
  display: flex;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-color: #111111;
  //border-style: solid;
  padding-top: 25px;
  padding-bottom: 10px;
`

export const ProfilePic = styled.div`
    background-image: url(${pic});
    background-position: center;
    background-size: cover;
    width: 125px;
    height: 125px;
    border-radius: 20%;
    margin: 0 auto;
`

export const NameText = styled.h1`
    font-size: 40px;
    font-family: 'Ubuntu', sans-serif;
`
export const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-color: #111111;
  //border-style: solid;
  padding-bottom: 10px;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-color: #111111;
  //border-style: solid;
  padding-bottom: 10px;
  
`;

export const LinkText = styled.a`
    font-size: 16px;
    margin-right: 10px;
    &:hover {
        text-decoration: underline;
    }
    font-family: 'Ubuntu', sans-serif;
`

export const ContentContainer = styled.div`
//   border-color: #111111;
//   border-style: solid;
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;
  font-family: 'Ubuntu', sans-serif;
`;

export const DescriptionText = styled.h1`
  font-family: 'Space Mono';
  color: #FCFFA3;
  font-size: 16px;
  padding-top: 10px;
  padding-left: 7px;
`;

export const AboutMeTitles = styled.h1`
font-family: 'Space Mono';
color: #FCFFA3;
font-size: 40px;
padding-top: 10px;
margin-bottom: 0px;
align-self: center;
padding-bottom: 20px;
`

export const ProjectTitle = styled(AboutMeTitles)`
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
