import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledMenu = styled.div`
  width: 21%;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: 0.8rem;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin: 0;
  }
  li {
    margin: 0 auto;
    text-align: center;
    padding: 5px;
    width: 100%;
    height: 100%;
    position: relative;
  }
`

const StyledLink = styled(Link)`
  display: block;
  transition: all 0.1s ease-in-out;
  color: #555;

  &::before {
    content: '';
    background: #333;
    display: block;
    height: 1.2px;
    border-radius: 10px;
    width: 30px;
    position: absolute;
    top: -3px;
    left: 0;
    right: 0;
    margin: auto;
    transition: background 0.2s ease-in-out;
  }

  &:hover {
    background: -webkit-linear-gradient(#fff 10%, #000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::before {
      box-shadow: 0px 0px 129px 3px rgba(255, 255, 255, 0.6),
        0px 0px 99px 1px rgba(255, 255, 255, 0.9), 0px 0px 99px 3px rgba(255, 255, 255, 0.9);

      background-color: white;
    }
  }
`

const Menu = () => (
  <StyledMenu>
    <ul>
      <li>
        <StyledLink to="/about">about</StyledLink>
      </li>
      <li>
        <StyledLink to="/work">work</StyledLink>
      </li>
      <li>
        <StyledLink to="/contact">contact</StyledLink>
      </li>
    </ul>
  </StyledMenu>
)

export default Menu
