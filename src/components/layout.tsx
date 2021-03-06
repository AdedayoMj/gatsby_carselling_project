/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import "./layout.css"

import Navbar from "./Global/Navbar"
import Footer from "./Global/Footer"

interface MyComponentProps {
  children: React.ReactNode
}



function Layout({ children }: MyComponentProps): JSX.Element {
 
  return (
    <>
    
      <Navbar />
      {children}
      <Footer />
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
