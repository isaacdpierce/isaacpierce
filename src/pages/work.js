import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import { StyledLink } from '../components/link'
import { PageGrid } from '../components/pageGrid'

const StyledServices = styled.article`
  grid-column: 2 / 9;
  grid-row: 2 / -2;
`

const WorkPage = () => (
  <Layout>
    <PageGrid>
      <StyledServices>
        <h3>Hire me.</h3>
        <p>OK OK. I'll admit it, my website got a bit out of control. Obnoxious one might say.</p>
        <p>One might be right.</p>
        <p>
          What can I say? I had a few things I really wanted to try building. Random movement
          light-sphere footer anyone? Yes please! I'll take 2. You don't get to build that every
          day. And then there were a few light tricks (the magical little blue light that shoots
          through pages) to bring attention to where I want you to look. And let's not forget the
          sliding Irish pub joke! So much fun. I couldn't help myself.
        </p>
        <p>
          There's no better place to be obnoxious and experimental than on my own site. It's my
          sandbox and I'll do what I want! Also, it gave me some content to write about for a couple
          <Link to="/blog"> blog posts</Link> if you're really bored.
        </p>
        <h3>Down to business.</h3>
        <p>
          If you are here because you are considering me for a job I may or may not have applied
          for, please go <Link to="/devskills">HERE</Link> first to uncover the details on my
          developer specific skills and see if we might be a match.
        </p>
        <StyledLink to="/devskills">My Dev Skills >></StyledLink>
        <p>
          If you are here because you are interested in having me build you a stunning,
          state-of-the-art, future-proof website please head over <Link to="/portfolio">HERE</Link>.
          Save yourself the boring developer jargon and see what I can do for you.{' '}
        </p>
        <StyledLink to="/portfolio">My Portfolio >></StyledLink>
      </StyledServices>
    </PageGrid>
  </Layout>
)

export default WorkPage
