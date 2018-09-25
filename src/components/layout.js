import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'
import './layout.css'
import backgroundTexture from '../images/sandpaper.png'

const StyledSiteWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 42px 1fr 50vh;
  background: rgba(0, 0, 0, 0.98);
`

const StyledBackground = styled.div`
  background-image: url(${backgroundTexture});
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`

const StyledPageWrapper = styled.div`
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  overflow: hidden;
  border-bottom: 3px solid #1d1d1d;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Isaac D. Pierce portfolio, blog and contact' },
            {
              name: 'keywords',
              content:
                'web developer, react, gatsby, graphql, functional programming, entrepreneur',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <StyledSiteWrapper>
          <StyledBackground />
          <Header siteTitle={data.site.siteMetadata.title} />
          <Sidebar />
          <StyledPageWrapper>{children}</StyledPageWrapper>
          <Footer />
        </StyledSiteWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
