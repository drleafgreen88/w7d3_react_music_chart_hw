import React from 'react';
import SongItem from './SongItem';

const SongList = ({ songs }) => {

    const songsItems = songs.map((song, index) => {
        return <SongItem song={song.title.label} key={index} />
    })

    return (
        <div>
            <ol>
                {songsItems}
            </ol>
        </div>
    )
}

export default SongList;