import React from 'react';
import { Card } from 'react-bootstrap';
import PreviewCompatibleImage from '../preview-compatible-image';

const PostCard = ({ title, date, description, img }) => (
    <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <PreviewCompatibleImage image={img} alt={title} />
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