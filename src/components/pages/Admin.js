import React, { Component } from 'react';
import {Link} from 'react-router-dom'

 class Admin extends Component {
    render() {
        return (
            <div className="adminList">
                <ul>
                    <li>
                    <Link to="/addSong">Add Song</Link>
                    </li>
                    <li>
                    <Link to="/listSongs">List Songs</Link>
                    </li>
                </ul>
               
                
            </div>
        )
    }
}
export default Admin