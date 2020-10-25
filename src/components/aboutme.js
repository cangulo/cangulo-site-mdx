import React from 'react';
import { Container, Image } from 'react-bootstrap';

const AboutMeArea = () => {
    return (
        <Container>
            <h1>About me</h1>
            <p>I'm a software engineer with experience in .NET Framework, .NET Core and Angular, I love challenges, learning and share knowledge. Feel free to contact me via LinkedIn.</p>
            <p style={{ textAlign: "center" }}>
                <Image src="./profile_picture.png" thumbnail fluid />
            </p>
        </Container>
    )
}

export default AboutMeArea