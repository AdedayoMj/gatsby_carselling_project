import {
  Box,
  Container,
  Grid,
  IconButton,
  Theme,
  Typography,
} from "@mui/material"
import React from "react"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import { makeStyles } from "@mui/styles"
import { Link } from "gatsby"

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontWeight: 900,
    fontSize: 25,
    // marginTop: -20,
    marginBottom: 20,
    color: "white",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    textTransform:'capitalize'
  },
  link: {
    color: "white !important",
    textDecoration: "none"
  },
  box: {
    marginTop: 20,
    marginBottom: 20,
  },

  text: {
    color: "white",
    fontSize: "14px !important",
    marginTop: 20,
    marginBottom: 10,
  },
  contentMargin: {
    marginRight: 60,
  },
  copyright: { color: "white" },
}))
const helpfulLinks = [
  {
    name: "About Us",
    route: "/about",
  },
  {
    name: "Services",
    route: "/",
  },
  {
    name: "FAQs",
    route: "/",
  },
]
const serviceLinks = [
  {
    name: "Consultation",
    route: "/",
  },
  {
    name: "Funding",
    route: "/",
  },
  {
    name: "Delivery",
    route: "/",
  },
]

const socialMediaIcons = {
  facebook: <FacebookIcon />,
  linkedIn: <LinkedInIcon />,
  twitter: <TwitterIcon />,
  instagram: <InstagramIcon />,
}

export default function Footer() {
  const classes = useStyles()

  const socialMediaUrls = ["facebook", "instagram", "twitter", "linkedIn"]

  return (
    <footer style={{ background: "black" }}>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={7} md={9} lg={4}>
              <Box className={classes.title}>BaYinks</Box>
              <Box className={classes.contentMargin}>
                <Typography className={classes.text}>
                  We are know for specialist in importing cars from America and
                  Europe. We have connection that will delivery your cars with a
                  short timeframe. Our brands and dealers represent integrity
                  and quality. We have been in importation business for over 10
                  years and have received several awards for delivering quality
                  affordable cars.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5} sm={4} md={3} lg={2}>
              <Box>
                <Box className={classes.subTitle}>Helpful Links</Box>
              </Box>
              {helpfulLinks.map((item, index) => {
                return (
                  <Box key={index} className={classes.box}>
                    <Link to={item.route} className={classes.link}>
                      <KeyboardArrowRightIcon /> {item.name}
                    </Link>
                  </Box>
                )
              })}
            </Grid>
            <Grid item xs={5} sm={4} md={3} lg={2}>
              <Box>
                <Box className={classes.subTitle}>Our services</Box>
              </Box>
              {serviceLinks.map((name, index) => {
                return (
                  <Box key={index} className={classes.box}>
                    <Link to={name.route} className={classes.link}>
                      <KeyboardArrowRightIcon /> {name.name}
                    </Link>
                  </Box>
                )
              })}
            </Grid>
            <Grid item xs={9} sm={6} lg={3}>
              <Box>
                <Box className={classes.subTitle}>Contact us</Box>
              </Box>
              <Box className={classes.contentMargin}>
                <div className={classes.text}>
                  No. 13 Ose Olorun close off-asa road, Ilorin.
                </div>
                <div className={classes.text}>Phone: +234 080 4556 0000</div>
                <div className={classes.text}>Email: info@bayinks.com</div>
              </Box>
            </Grid>
          </Grid>

          <Box>
            <hr style={{ marginTop: 30 }} />
            <Box className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
              <Box className="flex justify-center md:order-2">
                {socialMediaUrls.map((media, index) => {
                  return (
                    <Box
                      key={index}
                      display="inline-block"
                      marginRight="1rem"
                      marginBottom="1rem"
                    >
                      <IconButton href={media} color="primary">
                        {
                          socialMediaIcons[
                            media as keyof typeof socialMediaIcons
                          ]
                        }
                      </IconButton>
                    </Box>
                  )
                })}
              </Box>
              <Box className="mt-8 md:mt-0 md:order-1">
                <p
                  className={`text-center text-base leading-6 ${classes.copyright}`}
                >
                  © {new Date().getFullYear()} {"Adedayo Adegboye"}. All rights
                  reserved.
                </p>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}
