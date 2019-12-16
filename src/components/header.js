import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#3c3c3c',
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        overflow:'auto',
      }}
    >
      <div style={{
        float:'left',
        width:'50%',
      }}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <h4
          style={{
            margin:5,
            color: 'rgb(180, 180, 180)',
          }}
        >Developer</h4>
      </div>
      <div style={{
        float:'left',
        width:'50%',
        color:'white',
        textAlign:'right'
      }}>
        <br/>
        <br/>
        <h4>
        <Link to="./education" style={{color:'white',}}>Education</Link> &nbsp;&nbsp;&nbsp;
        <Link to="./skills" style={{color:'white',}}>Skills</Link> &nbsp;&nbsp;&nbsp;
        <Link to="./project" style={{color:'white',}}>Projects</Link> &nbsp;&nbsp;&nbsp;
        </h4>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
