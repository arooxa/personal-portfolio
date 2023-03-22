import React from 'react'
import { Background, ImageContainer, ProfilePic, NameContainer, NameText, LinksContainer, LinkText, ContentContainer } from './styles'

const Main = () => {
    return (
        <Background>
            <ImageContainer>
                <ProfilePic />
            </ImageContainer>
            <NameContainer>
                <NameText>
                    Arvind Manivannan
                </NameText>
            </NameContainer>
            <LinksContainer>
                <LinkText
                    href="mailto:arvindmaniv@gmail.com"
                    target="_blank"
                >
                    Email
                </LinkText>
                <LinkText
                    target="_blank"
                >
                    Resume
                </LinkText>
                <LinkText
                    href="https://www.linkedin.com/in/arvindmaniv/"
                    target="_blank"
                >
                    LinkedIn
                </LinkText>
                <LinkText
                    href="https://github.com/arooxa"
                    target="_blank"
                >
                    GitHub
                </LinkText>
                <LinkText
                    target="_blank"
                >
                    Medium
                </LinkText>
            </LinksContainer>
            <ContentContainer>
                <p>
                    Hey, I'm Arvind. I'm currently a undergraduate Computer Science student at the {' '}
                    <a
                        href="https://www.washington.edu"
                        target="_blank"
                        style={{ color: '#007bff' }}
                    >
                        University of Washington
                    </a>
                    {' '} in Seattle.
                    I am particularly drawn to the problem spaces created by the intersection of software and finance.
                    Here's what I've been up to during my time in school:
                    <ul style={{ 'margin': '30px' }}>
                        <li> I'll be joining
                            {' '}
                            <a
                                href="https://pos.toasttab.com/"
                                target="_blank"
                                style={{ color: '#007bff' }}
                            >
                                Toast
                            </a>
                            {' '}
                            as a Software Engineer Intern in Summer 2023 </li>
                        <li> Currently serving as an undergraduate researcher for the
                            {' '}
                            <a
                                href="https://makeabilitylab.cs.washington.edu/"
                                target="_blank"
                                style={{ color: '#007bff' }}
                            >
                                Makeability Lab
                            </a>
                            {' '}
                            , I'm currently developing a conversational search assistant using
                            AR for the BLV community
                            <ul style={{ 'list-style-type': 'circle', 'padding-left': '2rem' }}>
                                <li> Collaborating with a team of researchers to design and
                                    implement a novel AR system that enables users to access
                                    visual information through natural language dialogue
                                </li>
                                <li> Excited to share our findings and contribute to the field
                                    of assistive technology when our research is published in
                                    April 2024
                                </li>
                            </ul>
                        </li>
                        <li>
                            Co-created Kadu, an AI email and writing assistant that
                            empowers students to improve their job application process
                        </li>
                        <li>
                            Contributed to the development and improvement of
                            {' '}
                            <a
                                href="https://www.rethinkuw.org/"
                                target="_blank"
                                style={{ color: '#007bff' }}
                            >
                                ReThink
                            </a>
                            , a UW Foster Organization that advocates for sustainable consumer choices
                        </li>
                        <li>
                            Selected for Google's Computer Science Summer Institute (
                            <a
                                href="https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute"
                                target="_blank"
                                style={{ color: '#007bff' }}
                            >
                                CSSI
                            </a>
                            ) in 2021, a program designed to provide college students with hands-on 
                            experience in computer science and software engineering
                        </li>
                    </ul>
                </p>

            </ContentContainer>
        </Background>
    );
}


export default Main