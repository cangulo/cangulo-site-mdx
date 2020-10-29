import React from "react"
import { Container, Image } from "react-bootstrap"

const AboutMeArea = () => {
  return (
    <div>
      <h1>About me</h1>
      <p>
        I'm a software engineer with experience in .NET Framework, .NET Core and
        Angular, I love challenges, learning and share knowledge. Feel free to
        contact me via LinkedIn.
      </p>
      <p style={{ textAlign: "center" }}>
        <Image
          src="https://github.com/cangulo/cangulo-site-mdx/blob/master/static/profile_picture.png?raw=true"
          thumbnail
          fluid
        />
      </p>
      <div>
        <p>
          LinkedIn -{" "}
          <a href="https://www.linkedin.com/in/angulomascarell">
            Carlos Angulo Mascarell
          </a>
          <br />
          Twitter -{" "}
          <a href="https://twitter.com/angulomascarell">@AnguloMascarell</a>
          <br />
          GitHub -{" "}
          <a href="https://github.com/cangulo">
            Carlos Angulo Mascarell - cangulo
          </a>
        </p>
      </div>
    </div>
  )
}

export default AboutMeArea
