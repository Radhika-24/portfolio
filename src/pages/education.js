/**
*This file contains the page for .educational qualifications. Uses layout for header footer.
*/
import React, { Children } from "react";
//import {Link} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const educationp= () => (
<Layout>
    <SEO title="Education"/>
    <h1>Educational Qualification</h1>
    
    <div
    style={{
        border: '1px solid',
        boxShadow: '3px 3px ',
        padding : '15px 20px',
        
    }}>
        <h3>Graduation</h3> 
        <p
        style={{
            color: 'rgb(90, 90, 90)',
            paddingBottom: '0px',
        }}>
            <b>B. E. Computer Science and Engineering</b><br/>
            University Institute of Engineering and Technology, Panjab University<br/>
            Chandigarh.<br/>
            <b>CGPA: 8.74/10</b>
        </p>
    </div><br/>
    <div
    style={{
        border: '1px solid',
        boxShadow: '3px 3px ',
        padding : '15px 20px',
        
    }}>
        <h3>Senior Secondary</h3> 
        <p
        style={{
            color: 'rgb(90, 90, 90)',
            paddingBottom: '0px',
        }}>
            <b>Class 12th</b><br/>
            Stepping Stones Senior Secondary School,<br/>
            Chandigarh.<br/>
            <b>Percentage: 93%</b>
        </p>
    </div><br/>
    <div
    style={{
        border: '1px solid',
        boxShadow: '3px 3px ',
        padding : '15px 20px',
        
    }}>
        <h3>High School</h3> 
        <p
        style={{
            color: 'rgb(90, 90, 90)',
            paddingBottom: '0px',
        }}>
            <b>Class 10th</b><br/>
            Om PArkash Bansal Modern School,<br/>
            Mandi Gobindgarh.<br/>
            <b>CGPA: 9.8/10</b>
        </p>
    </div><br/>
</Layout>
)

export default educationp
