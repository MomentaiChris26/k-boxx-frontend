import React, { Component } from 'react';
import {Form,Col,Table} from 'react-bootstrap';
import ConfirmBox from '../search/confirmBox';

 class Search extends Component {
    render() {
        return (
            <div style={{marginTop:'20px'}}>
                <h2 style={{textAlign:'left',color:'#BBA6F8'}}>Search</h2>
                <Form>
                    <Form.Row>
                    <Form.Group as={Col} controlId="songName">
      <Form.Control type="text" placeholder="Song Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="artistName">
      <Form.Control type="text" placeholder="Artist Name" />
    </Form.Group>
                    </Form.Row>
                </Form>
                <Table className="resultsBox">
  <tbody>
    <tr className="searchResult">
      <td>I want it that way</td>
      <td>Backstreet Boys</td>
    </tr>
    <tr className="searchResult">
      <td>Shape of my heart</td>
      <td>Backstreet Boys</td>
    </tr>
  </tbody>
</Table>
        <ConfirmBox/>
            </div>
        )
    }
}
export default Search