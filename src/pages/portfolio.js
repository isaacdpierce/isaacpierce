import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { PageGrid } from '../components/pageGrid'

const StyledPortfolioText = styled.article`
  grid-column: 2 / 9;
  grid-row: 2 / -2;
`

const PortfolioPage = () => (
  <Layout>
    <PageGrid>
      <StyledPortfolioText>
        <h3>Great work. g wiz.</h3>
        <p>I love playing with textures and subtle light effects </p>
      </StyledPortfolioText>
    </PageGrid>
  </Layout>
)

export default PortfolioPage
