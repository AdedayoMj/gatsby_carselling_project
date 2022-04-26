/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"



import "./layout.css"

import Navbar from  "./Global/Navbar"
import Footer from "./Global/Footer"
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"

interface MyComponentProps {
  children: React.ReactNode
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'relative',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: 'white',
  },
}))

function Layout({ children }: MyComponentProps ): JSX.Element {
  const classes = useStyles()
 return(
 <Box className={classes.root}>
 <Navbar/>
 {children}
 <Footer/>
 </Box>
 )
}
// const  Layout: React.FC =({ children })=> <>{children}</>


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default  Layout


