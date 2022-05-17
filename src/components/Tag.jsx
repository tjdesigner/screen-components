import React from "react"
import { Container, LabelTag } from "./TagStyle"

const Tag = (props) => {
  return (
    <Container style={{ backgroundColor: props.backgroundColor }}>
      <LabelTag style={{ color: props.color }}>{props.LabelName}</LabelTag>
    </Container>
  )
}

export default Tag
