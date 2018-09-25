import React from 'react'
import styled from 'styled-components'

import Welcome from '../components/welcome'
import StyledCompass from '../components/compass'
import { StyledCircle, StyledSphere } from '../components/sphere'
import Layout from '../components/layout'

const StyledSection = styled.div`
  height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`

const IndexPage = () => (
  <Layout>
    <StyledSection>
      <Welcome />

      <StyledSphere>
        <StyledCircle>
          <span />
        </StyledCircle>
      </StyledSphere>

      <StyledCompass />
    </StyledSection>
  </Layout>
)

export default IndexPage
