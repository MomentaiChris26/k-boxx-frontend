import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

class AddSong extends Component {
    render() {
        return (
            <div className="formWrapper">
                <h3 style={{color:'white'}}>Add Song</h3>
                <Form style={{marginTop:'20px'}}>
  <Form.Group controlId="songName">
    <Form.Control type="song" placeholder="Enter song name" />
  </Form.Group>
  <Form.Group controlId="artist">
    <Form.Control type="artist" placeholder="Enter artist name" />
  </Form.Group>
  <Form.Group controlId="url">
    <Form.Control type="url" placeholder="Enter url" />
  </Form.Group>
  <Form.Group controlId="language" style={{width:'50%'}}>
    <Form.Control as="select">
      <option>...Select Language...</option>
      <option>English</option>
      <option>Korean</option>
      <option>Chinese</option>
      <option>Japanese</option>
    </Form.Control>
  </Form.Group>
  <Button variant="secondary" type="submit" style={{marginTop:'20px', marginRight:'10px'}}>
    Submit
  </Button>
  <Link to="/admin"> 
  <Button variant="secondary" style={{marginTop:'20px'}}>
    Cancel
  </Button></Link>
</Form>
            </div>
        )
    }
}
export default AddSong