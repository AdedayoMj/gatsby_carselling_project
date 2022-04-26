import React from "react"
import { Box, Container, Grid, Theme, Typography } from "@mui/material"
import BackgroundImage from "gatsby-background-image"
import { makeStyles } from "@mui/styles"
import CustomButton from "./CustomButton"

interface BackgroundData {
  img: any
  title?: string
  content?: string
  children?: JSX.Element[] | JSX.Element
  styleClass: any,
  ishome?:boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: 30,
    fontWeight: "bolder",
    marginTop: 100,
    color: "white",
    // [theme.breakpoints.down("md")]: {
    //   fontSize: 25,
    // },
  },
  content: {
    color: "whitesmoke",
  },
}))

const BackGroundSection: React.FC<BackgroundData> = ({
  img,
  styleClass,
  title,
  content,
  ishome,
  children,
}: BackgroundData) => {
  const classes = useStyles()

  return (
    <BackgroundImage  className={styleClass} fluid={img}>
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item sm={10} md={10} lg={6}>
              <div className={classes.title}>
                <h3>{title}</h3>
              </div>
              <div className={classes.content}>
                <Typography>{content}</Typography>
              </div>

              {ishome&&<CustomButton name="consultation" />}
            </Grid>
          </Grid>
        </Container>
      </Box>
      {children}
    </BackgroundImage>
  )
}

export default BackGroundSection
