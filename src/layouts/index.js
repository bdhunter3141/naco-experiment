import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './layout-override.css'

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`


export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.func,
  }
  render() {
    const { data, children } = this.props;

    return (
      <MuiThemeProvider>
        <div>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Header location={location.pathname} siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children()}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

