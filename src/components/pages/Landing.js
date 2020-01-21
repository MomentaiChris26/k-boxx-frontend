import React, { Component } from 'react';
import Playlist from '../playlist/List';
import Video from '../theatre/video';
import CurrentSong from '.././theatre/currentSong';
import SkipBtn from '../theatre/skipBtn';
import Search from '../search/Search'

class Landing extends Component {
    render() {
        return (
            <div className="landingGrid">
                <div style={{gridColumnStart:'1', gridColumnEnd:'2'}}> <Playlist/></div>
                <div className="videoWrapper">
                <CurrentSong/>
                <Video/> 
                <SkipBtn/>
                <Search/>
                </div>
            </div>
        )
    }
}
export default Landing