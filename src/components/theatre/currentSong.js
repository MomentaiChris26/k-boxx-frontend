import React from 'react'

 const currentSong=()=> {
    return (
        <div className="currentSongBox">
            <ul>
                <li> <i class="fas fa-play"></i></li>
                <li className="titleSong">Current Song</li>
                <li className="artistName">Artist</li>
            </ul>
        </div>
    )
}
export default currentSong