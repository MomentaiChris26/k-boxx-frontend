import React from 'react'

 const currentSong=()=> {
    return (
        <div className="currentSongBox">
            <ul>
                <li> <i class="fas fa-play"></i></li>
                <li className="titleSong">My heart will go on</li>
                <li className="artistName">Celine Dion</li>
            </ul>
        </div>
    )
}
export default currentSong