import { Box, Grid, Container } from "@mui/material"
import { makeStyles } from "@mui/styles"
import SearchComponet from "../components/Global/SearchComponent"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BackGroundSection from "../components/Global/BackGroundSection"
import { graphql } from "gatsby"

const useStyles = makeStyles(() => ({
  root: {
    //   display: 'flex',
    width: "100%",
    height: "100vh",
    marginTop: 15,
  },
  imageStyle: {
    WebkitBackgroundSize: "cover",
    MozBackgroundSize: "cover",
    OBackgroundSize: "cover",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "40vh",
    marginTop: 15,
    position: "absolute",
  },
  container: {
    marginTop: 130,
  },
}))

type IndexPorps = {
  data: any
}

const Cars: React.FC<IndexPorps> = ({ data }) => {
  const classes = useStyles()
  return (
    <Layout>
      <Container>
        <Box className={classes.root}>
          <Seo title="cars" />
          <BackGroundSection
            img={data.backgroundImg.childImageSharp.fluid}
            title="Import and buy automobile from Europe and America"
            content="Request a consultation, our salesteam will contact you as soon
      as possible and help select your desireable automobile, more
      cheaper than the market prices"
            styleClass={classes.imageStyle}
            ishome={false}
          />
          <Grid container spacing={2}>
            <Grid item sm={10} md={10} lg={3}>
              <h1>Cars product</h1>
            </Grid>
            <Grid item sm={10} md={10} lg={7}>
              <h1>Cars product</h1>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    backgroundImg: file(relativePath: { eq: "car.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Cars
