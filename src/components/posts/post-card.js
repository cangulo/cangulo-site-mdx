import React from 'react';
import { Card } from 'react-bootstrap';

const PostCard = ({ title, date, description }) => (
    <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        {/* TODO, set image */}
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            {date && <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>}
            {/* <Card.Subtitle className="mb-2 text-muted">{node.fields.postType}</Card.Subtitle> */}
            <hr></hr>
            {/* TODO Concatenate the series associated */}
            <Card.Text>
                {description}
            </Card.Text>
        </Card.Body>
    </Card>
)

export default PostCard