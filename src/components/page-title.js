import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';



const PageTitle = ({ title, subtitle, imgRelativePath }) => {

    let jumboCustomStyles = {};
    if (imgRelativePath) {
        jumboCustomStyles["backgroundImage"] = `url(${imgRelativePath})`
    }

    const textH1Styles = {
        'box-shadow': 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
        'background-color': 'rgb(255, 68, 0)',
        'color': 'white',
        'line-height': 1,
        'padding': '0.75em',
        'font-size': '3rem',
        'font-weight': 700
    }

    const textH2Styles = {
        'box-shadow': 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
        'background-color': 'rgb(255, 68, 0)',
        'color': 'white',
        'line-height': 1,
        'padding': '0.75em',
        'font-size': '1.25rem',
        'font-weight': 700
    }

    const containerCustomStyles = {
        'display': 'flex',
        'height': '200px',
        // 'line-height': '1',
        'justify-content': 'center',
        'align-items': 'center',
    }

    const divCustomStyles = {
        'display': 'flex',
        'justify-content': 'space-around',
        'flex-direction': 'column',
    }
    return (
        <Jumbotron className="text-center" style={jumboCustomStyles} fluid>
            <Container style={containerCustomStyles} >
                    <div style={divCustomStyles}>

                        <h1 style={textH1Styles} >{title}</h1>
                        {subtitle && <h4 style={textH2Styles} >{subtitle}</h4>}
                    </div>
            </Container>
        </Jumbotron>
    )
}

export default PageTitle