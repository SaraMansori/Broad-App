import { Form, Row, Button } from 'react-bootstrap'


const Input = ({ message, sendMessage, setMessage }) => {
  return (

    <Form.Group>
      <Row id="chatRow">
        <div className="col-10">
          <Form.Control
            style={{ resize: "none", width: "100%" }} as="textarea" rows={3} placeholder="Type a message..."
            value={message}
            onChange={(e) => { setMessage(e.target.value) }}
            onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} />
        </div>
        <div className="col-2">
          <Button onClick={(e) => sendMessage(e)} style={{ width: "100%", height: "100%", padding: "0" }}>Send</Button>
        </div>
      </Row>
    </Form.Group>
  )
}


export default Input
