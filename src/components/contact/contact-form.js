import React from "react"
import { Button, Form } from "react-bootstrap"

const Contactform = () => (
  <Form
    name="contact"
    method="POST"
    action="/thanks"
    data-netlify="true"
    netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact" />
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Please provide your email here:</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea" rows={3} name="body" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="I'm a recruiter" name="isRecruiter" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Send
    </Button>
  </Form>
)

export default Contactform
