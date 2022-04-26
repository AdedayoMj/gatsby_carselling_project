import React from "react"

type Props = {
  title: string
}
const Title: React.FC<Props> = ({ title }) => {
  return (
    <div style={{ marginTop: 100, textAlign: "center", textTransform:'capitalize'}}>
      <h2>{title}</h2>
    </div>
  )
}
export default Title
