import * as React from "react"
import { Link, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BackGroundSection from "../components/Global/BackGroundSection"
import { makeStyles } from "@mui/styles"
import FloatingButton from "../components/Global/FloatingButton"
import { getImage } from "gatsby-plugin-image"
// import SearchComponet from "../components/Global/SearchComponent"
// import AdditionInfo from "../components/Home/additionInfo"
type IndexPorps = {
  data: any
}

const useStyles = makeStyles(() => ({
  imageStyle: {
    WebkitBackgroundSize: "cover",
    MozBackgroundSize: "cover",
    OBackgroundSize: "cover",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    marginTop: 15,
    position: "absolute",
  },
}))

const AboutPage: React.FunctionComponent<IndexPorps> = ({ data }) => {
  const classes = useStyles()
  return (
    <Layout>
      <Seo title="Home" />

      <BackGroundSection
        img={data.backgroundImg.childImageSharp.fluid}
        title="About Us"
        content="Bayinks was founded by two brothers, Daniel and Dara.We are know for specialist in importing cars from America and
        Europe. We have connection that will delivery your cars with a
        short timeframe. Our brands and dealers represent integrity
        and quality. We have been in importation business for over 10
        years and have received several awards for delivering quality
        affordable cars."
        styleClass={classes.imageStyle}
        children={<FloatingButton />}
        ishome={false}
      />
    </Layout>
  )
}
export const query = graphql`{
  backgroundImg: file(relativePath: {eq: "about.jpg"}) {
    childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
  }
}
`
export default AboutPage
