import React from 'react';
import {Table,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom'

 const ListSongsAdmin=()=> {
    return (
        <div className="tableWrapper"> 
        <Link to="admin"><span style={{ color:'white'}}>Back to Admin</span></Link>
        <Form>
        <Form.Control type="search" placeholder="Search" />
        </Form>
            <Table striped bordered hover className="tableList">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th></th>
    </tr>
  </thead>
  <tbody hover>
    <tr>
      <td>Bye Bye Bye</td>
      <td>NSYNC*</td>
      <td>
          <div className="d-flex justify-content-around">
          <Link to="/editSong">Edit</Link>
          <Link style={{color:'red'}}>Delete</Link> </div></td>
    </tr>
  </tbody>
</Table>
</div>
    )
}
export default ListSongsAdmin