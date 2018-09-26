import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { PageGrid } from '../components/pageGrid'

const StyledServices = styled.article`
  grid-column: 2 / 9;
  grid-row: 2 / -2;
`
const DevskillsPage = () => (
  <Layout>
    <PageGrid>
      <StyledServices>
        <h3>Thank you</h3>
        <p>I really appreciate your time spent here. Let me get right to it.</p>
        <h3>What I love</h3>
        <p>
          10 years ago I began Learning to make things on the web. I owned 2 hair salons at the time
          and it was becoming essential to go beyond a simple phone-book style contact page. I tried
          talkin gto e few web designers at the time but found it frustrating to get my ideas across
          in and have something built at a reasonable cost. So I tought myself Wordpress. Utilizing
          themes of the time and getting a basic understanding of HTML and CSS I was able to build
          exactly what I wanted. I had taught myself Photoshop years prior as my staff and I did a
          lot of small photo-shoots, fashion shows, music and theater events. There were always some
          basic image processing or event posters that needed to get put together. I took it on
          mostly because I was so picky. But I quickly fell in love with all things web design. I
          was hired to build small sites for friends, wedding clientele and local event planners.
        </p>
        <p>
          In 2014 I sold my second salon and decided I wanted to do everything web. I studied online
          business and marketing. Copy writing and coding. I kept falling deeper and deeper in love
          with coding. Until it became all I wanted to do with my time. And so it remains this way.
          I study every day for a minimum of 6 hours
        </p>
        <p>
          We often end up being the best at what we love. I like knowing what's going on at every
          level of an application. And while it's satisfying to put together a server or database,
          my love is in front-end development. I'm a visual person. I've always loved design, and
          nothing gets me more excited than seeing something beautiful come together piece by piece.
          From subtle textures, gradients or obnoxious animations I could stay awake for days on end
          once I get into a project.
        </p>
        <p>
          Modern web development has made the front-end of things so much more exciting. My passion
          is in JAMstack technologies. I invest all my learning time with React, Gatsby, GraphQl and
          Apollo.
        </p>
        <p>
          5 years ago I pushed myself out of the Wordpress design comfort zone and started learning
          Fullstack Development. I commited to the entire Learn Enough system by Michael Hartyl.
          Then continued my studies in OOP with the Ruby Pickaxe book, then Eloquent Ruby and a few
          more Rails courses on Udemy.
        </p>
        <p>
          2 years ago I decided it was high time I learn proper JavaScript and stop relying on
          jQuery solutions. It was an awkward struggle because it was right at the transition
          between ES5 and ES6. Learning the old ways on top of the new ways was remarkably
          confusing. But I toughed it out. Thanks to the likes of Wes Bos and Tyler Mcguiness I
          found my way thought the darkness.
        </p>
        <p>
          I discovered the "Holy Grail" of functional programming and have made a daily habit of
          trying to unravel it's mysteries.
        </p>
        <h3>Comfort zone</h3>
        <p>
          These are the hard skills I really enjoy working with, have solid understanding of and
          love learning more about:
        </p>
        <ul>
          <li>HTML5</li>
          <li>CSS / SCSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Gatsby</li>
          <li>GraphQl</li>
          <li>Styled-components</li>
          <li>Git</li>
          <li>Terminal</li>
          <li>BEM</li>
          <li>NPM</li>
          <li>Wordpress</li>
          <li>Bootstrap</li>
          <li>Research - I know how to find out what I don't know</li>
        </ul>

        <p>
          These are the hard skills I have spent time with but either learned them years ago or I am
          presently studying and do not yet have a solid understanding:
        </p>

        <ul>
          <li>Ruby</li>
          <li>Rails</li>
          <li>Node.js</li>
          <li>Apollo</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>API's</li>
        </ul>
      </StyledServices>
    </PageGrid>
  </Layout>
)

export default DevskillsPage
