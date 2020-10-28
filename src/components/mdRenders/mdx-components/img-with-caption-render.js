import React from "react"
import CaptionRender from "./caption.render"
import ImgRender from "../mdx-renders/img-render"

const ImgWithCaptionRender = ({ src, label }) => {
  console.log(src)
  return (
    <div>
      <ImgRender src={src} />
      <CaptionRender label={label} link={src} />
    </div>
  )
}

export default ImgWithCaptionRender
