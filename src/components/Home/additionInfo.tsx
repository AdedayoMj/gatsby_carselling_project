import React from "react"
import {Container, Grid } from "@mui/material"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"
import CustomCard from "../Global/CustomCard"
import Title from "../Global/Title"

const AdditionInfo = () => {
  const importData = [
    {
      image: <LocalShippingIcon />,
      title: "Delivery Services",
      context:
        "in order to make purchase experience of your car even more confortable we will deliver it to your doorstep.",
    },
    {
      image: <PersonOutlineIcon />,
      title: "For Dealer Registration",
      context:
        "Contact us to register as our partners dealer and take part in the ordering process and other benefits.",
    },
    {
      image: <AccountBalanceWalletIcon />,
      title: "Funding",
      context:
        "With agreed terms and conditions we help you with both your shipping, clearing and delivery. We are open to negotiation.  ",
    },
  ]

  return (
    <section>
      <Container>
          <Title title="additional services"/>
        <Grid
          container
          spacing={3}
          style={{ marginTop: 30, marginBottom: 100 }}
          display="flex"
          justifyContent="center"
        >
          {importData.map((item, index) => {
            return (
              <Grid key={index} item md={6} lg={4}>
                <CustomCard
                  title={item.title}
                  context={item.context}
                  icon={item.image}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </section>
  )
}

export default AdditionInfo
