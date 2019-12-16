/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * contains footer definition 
 * SOCIALICON is used for social media icons
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

import Header from "./header"
import "./layout.css"
import { SSL_OP_TLS_ROLLBACK_BUG } from "constants"
import socialIcon from "react-social-icons/dist/social-icon";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        </div>
        <footer 
          style={{
            background:'rgb(60,60,60)',
            margin: `0 auto`,
            padding: `1.45rem 1.0875rem`,
            left : 0,
            right :0,
            width :'100%' ,
            color: 'white',
          }}
        >
          <div>
            <h3 style={{
              padding:'0px 270px',
            }}>
              Contact me
            </h3>
            <div style={{width:'100%', padding:'0px 270px'}}>
              <div style={{float: 'left', width:'50%'}}>
               <h6>Email:</h6>
               <p>bansal.radhika14@gmail.com</p>
              </div>
              <div style={{float: 'left', width:'50%'}}>
                <h6>Contact</h6>
                <p>+91-7814921940<br/>+91-9478684554</p>
              </div>
              <div style={{padding:'0px 33%'}}>
              <SocialIcon  url="https://www.facebook.com/radhika.bansal.7311" />
                &nbsp;&nbsp;&nbsp;
              <SocialIcon  url="https://www.linkedin.com/in/radhika-bansal-311250a3/" />&nbsp;&nbsp;&nbsp;
              <SocialIcon url="https://www.instagram.com"/>&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>
          
        </footer>
        
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
