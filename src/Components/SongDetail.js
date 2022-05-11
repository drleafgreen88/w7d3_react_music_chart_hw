import React from 'react';

const SongDetail = ({selectedSong}) => {
    return(
        <>
        <p> Chart Position: {selectedSong.chartposition}</p>
        <p> Title: {selectedSong.title}</p>
        <p> Artist: {selectedSong.artist}</p>
        </>
    )
}

export default SongDetail