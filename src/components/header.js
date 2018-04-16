import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
	margin: 10px 30px;
  img{
    max-width: 300px;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  li:hover {
    border-bottom: 4px solid #F78E23;
  }
  ul {
    display: flex;
    align-items: center;
    li {
      padding: 15px 21px;
      list-style: none;
      font-size: 14px;
      min-width: 100px;
      cursor: pointer;
      border-bottom: 4px solid #FFF;
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Link to="/"><img alt={siteTitle} src="https://d3lut3gzcpx87s.cloudfront.net/image_encoded/aHR0cHM6Ly9zaWxrc3RhcnQuczMuYW1hem9uYXdzLmNvbS8yMzUxYjhkZC05NzRiLTE3OGQtODc3Ny0wYmM0ZTQ5Y2M3NTMucG5n/540x100fPNG" /></Link>
    <nav>
      <ul>
        <li>
        <Link to="/personal-dashboard">PERSONAL DASHBOARD</Link>
        </li>
        <li>
        <Link to="/">DEALS</Link>
        </li>
        <li>
        <Link to="/">EXITS</Link>
        </li>
        <li>
        <Link to="/">USER</Link>
        </li>
      </ul>
    </nav>
  </HeaderWrapper>
)

export default Header
