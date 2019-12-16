import React from "react"

import backg from "../images/p1.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ marginTop:'-18px', marginLeft:'-289px', marginBottom:'-28px',
    width:'1499px', height: '400px',
    backgroundImage: "url(" + backg+")", backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
}}>
      <h1 style={{color:'white',
      paddingTop:'30px', paddingLeft:'20px',
      font:'italic bold 60px/150px Georgia, serif'}}>
        Welcome to my site!
      </h1>
      <h1 style={{color:'white',
       paddingLeft:'20px',marginTop:'-30px',
       font:'italic bold 20px/50px Georgia, serif'}}>
        This site is my portfolio!<br/>
        It contains information about my educational qualification, skills and projects.
      </h1>
    </div>
  </Layout>
)

export default IndexPage
