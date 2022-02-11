import React from "react";
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';


class SideNav extends React.Component {
    render() {
        return(
            <StyledSideNav></StyledSideNav>
        );
    }
}

export default class SideBar extends React.Component {
    render() {
        return (
            <SideNav>
                <NavLink to="/">
                    <h1>Home</h1>
                </NavLink>
                <NavLink to="/">
                    <h2>About</h2>
                </NavLink>
            </SideNav>
        );
    }
}

const StyledSideNav = styled.div`
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 125px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    background-color: #222; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 10px;
`

const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: $15cdfc;
    }
`