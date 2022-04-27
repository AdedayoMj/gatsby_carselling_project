import { Box, Container, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React from "react"

const useStyles = makeStyles((theme: Theme) => ({
  search: {
    position: "relative",
    backgroundColor: "white",
    height: 270,
    marginTop: -100,
    borderRadius: 20,
    marginBottom: 20,
    zIndex: 2,
    // [theme.breakpoints.down("md")]: {
    //   height: 450,
    // },

    // kkdksjdsjks
  },
}))

const SearchComponet = () => {
  const classes = useStyles()

  return (
    <section>
      <Container>
        <Box sx={{ boxShadow: 5 }} className={classes.search}></Box>
      </Container>
    </section>
  )
}

export default SearchComponet
