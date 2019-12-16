import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const projectp= () => (
<Layout>
    <SEO title="Projects"/>
    <h1>Projects</h1>
    
    <div
    style={{
        border: '1px solid',
        boxShadow: '3px 3px ',
        padding : '15px 20px',
        
    }}>
        <h3>Hospitality Control System</h3> 
        <p
        style={{
            color: 'rgb(90, 90, 90)',
            paddingBottom: '0px',
        }}>
            This project is a web application that caters to the <b>
                administrative needs of an established hotel.</b> It contains modules on managing booking, 
                enquiry for booking, managing visitors, billing system.
                 It is a fully automated system for performing functions required for
                  smooth functioning of a hotel.<br/>
            <br/>
            <b>Key Skills: </b>
            HTML, CSS, JS, PHP, SQL, Database handling
            
        </p>
    </div><br/>
    <div
    style={{
        border: '1px solid',
        boxShadow: '3px 3px ',
        padding : '15px 20px',
        
    }}>
        <h3>Patient Management System with Barcode</h3> 
        <p
        style={{
            color: 'rgb(90, 90, 90)',
            paddingBottom: '0px',
        }}>
            This is a Desktop application that caters to the needs of a Hospital. It adds, updadates and manages new
            patients and staff. It creates a unique Barcode for every patient for easy identificaion.
            It also keeps track of patient's treatment record and prescription.<br/>
            <br/>
            <b>Key Skills: </b> Java-core, SQL, JDBC
        </p>
    </div><br/>
    <div
    style={{
        border: '1px solid',
        boxShadow: '3px 3px ',
        padding : '15px 20px',
        
    }}>
        <h3>School Management System</h3> 
        <p
        style={{
            color: 'rgb(90, 90, 90)',
            paddingBottom: '0px',
        }}>
            This project is a Desktop application that caters to the needd of a school. It caters to the needs ofboth
            students and administration. There are different views for administration, teachers and students.
            Its functionality includes adding and updating new students and employees, taking and viewing attendance
            , adding and viewing marks in different subjects, etc.
            <br/><br/>
            <b>Key Skills: </b>
            Java-Core, SQL, JDBC
        </p>
    </div><br/>
</Layout>
)

export default projectp