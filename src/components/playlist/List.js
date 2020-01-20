import React from 'react';
import Song from './song'

 const List=() =>{
    return (
        <div className="playlistWrapper">
            <h2 style={{color:'#BBA6F8'}}>Playlist</h2>
                <Song/>
        </div>
    )
}
export default List