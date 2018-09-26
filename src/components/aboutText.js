import React from 'react'
import styled from 'styled-components'
import { StyledLink } from './link'

const StyledBioText = styled.div`
  grid-column: 2 / 9;
  grid-row: 2 / 3;
`

const AboutText = () => (
  <StyledBioText>
    <br />

    <h3>A wee bit about me.</h3>
    <ul>
      <li>My mother says I'm handsome.</li>
      <li>My doctor says I'm healthy.</li>
      <li>My girlfriend says I'm smart.</li>
      <li>Who am I to argue?</li>
    </ul>
    <h3>What can I offer?</h3>
    <p>
      The most important part of me I can offer is my passionate desire to be helpful to others. I
      love working with great people and doing great things. I'm a great listener. I'm relentlessly
      creative, curious and hard working. I love pushing myself to master new skills. I love writing
      code and anything that keeps me creating and learning online. I also have a pretty cheeky
      sense of humour.
    </p>

    <h3>Me in 30 seconds</h3>
    <ul>
      <li>10 years ago I started learning front end web development (Wordpress, HTML, CSS)</li>
      <li>
        5 years ago started studying more programming (Ruby, Rails, Javascript, SASS, Git, Command
        Line, DOM api, etc ).
      </li>
      <li>
        2 years ago I started taking it serious (React, Functional Javascript, MongoDB, Node.js)
      </li>

      <li>
        I spent 15 years working within one of the strongest marketing teams in the world, Estee
        Lauder.
      </li>
      <li>
        I learned the value of stellar customer service, education-based marketing and the power of
        story telling.
      </li>
      <li>
        For 9 years I ran my own hair salon. During that time I also started and sold a second
        location 300kms away.
      </li>

      <li>
        I've read an indecent amount of books, mostly on business, communication, philosophy,
        computer science and health.
      </li>
    </ul>
    <h3>also...</h3>
    <ul>
      <li>I'm addicted to learning.</li>
      <li>I've travelled to 9 countries and lived in 9 different cities.</li>
      <li>
        I love my laptop,
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
          {' '}
          my text editor,{' '}
        </a>
        <a
          href="https://affinity.serif.com/en-gb/photo/desktop/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Affinity Photo,{' '}
        </a>
        <a href="https://www.danner.com/" target="_blank" rel="noopener noreferrer">
          Danner Boots,{' '}
        </a>
        <a
          href="https://www.biggerbolderbaking.com/sour-gummy-bears/"
          target="_blank"
          rel="noopener noreferrer"
        >
          sour gummy bears,{' '}
        </a>
        <a
          href="https://www.youtube.com/watch?v=gw9fKuymA0I"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shigeru Umbayeshi,{' '}
        </a>
        <a
          href="https://www.youtube.com/watch?v=-FlxM_0S2lA&t=515s"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lo-Fi instrumental hip-hop,{' '}
        </a>
        <a
          href="https://www.spin.com/2018/03/nordic-noir-guide-best-scandinavian-crime-shows/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nordic Noir TV series{' '}
        </a>
        and{' '}
        <a
          href="https://steam250.com/tag/puzzle-platformer"
          target="_blank"
          rel="noopener noreferrer"
        >
          puzzle-platform video games.
        </a>
      </li>
    </ul>

    <p>For more information on my developer skills please check out &mdash;</p>
    <StyledLink to="/devskills">My Dev Skills >></StyledLink>

    <p>To see a few of my favorite projects check out &mdash;</p>
    <StyledLink to="/portfolio">My Portfolio >></StyledLink>
  </StyledBioText>
)

export default AboutText
