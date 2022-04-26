import * as React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"


interface Props {
  title: string
  context: string
  icon: any
}

const CustomCard: React.FC<Props> = ({ title, context, icon }: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "#ff1493", height: "70px", width: "70px" }}
            aria-label="recipe"
          >
            {icon}
          </Avatar>
        }
      />
      <div style={{ marginLeft: 20 }}>
        <h4>{title}</h4>
      </div>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {context}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CustomCard
