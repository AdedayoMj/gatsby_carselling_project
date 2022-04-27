import * as React from "react"
import { Link, graphql } from "gatsby"
import { getImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BackGroundSection from "../components/Global/BackGroundSection"
import { makeStyles } from "@mui/styles"
import FloatingButton from "../components/Global/FloatingButton"
import SearchComponet from "../components/Global/SearchComponent"
import AdditionInfo from "../components/Home/additionInfo"
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
    height: "80vh",
    marginTop: 15,
    position: "absolute",
  },
}))

const IndexPage: React.FunctionComponent<IndexPorps> = ({ data }) => {
  const classes = useStyles()
 

  return (
    <Layout>
      <Seo title="Home" />

      <BackGroundSection
        img={data.backgroundImg.childImageSharp.fluid}
        title="Import and buy automobile from Europe and America"
        content="Request a consultation, our salesteam will contact you as soon
      as possible and help select your desireable automobile, more
      cheaper than the market prices"
        styleClass={classes.imageStyle}
        ishome={true}
        children={<FloatingButton />}
      />
      <SearchComponet />
      <AdditionInfo />
    </Layout>
  );
}
export const query = graphql`{
  backgroundImg: file(relativePath: {eq: "desktop.jpg"}) {
    childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
  }
}
`
export default IndexPage
