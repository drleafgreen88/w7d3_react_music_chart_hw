import React, { useState, useEffect } from 'react';
import SongList from '../Components/SongList';

const MusicContainer = () => {
    const [songs, setSongs] = useState([]);
    // const [selectedSong, setSelectedSong] = useState(null);

    useEffect(() => {
        loadSongs();
    }, [])

    // const getSongs = function () {
    //     fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    //         .then(res => res.json())
    //         .then(songs => setSongs(songs))
    // }

    const loadSongs = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(res => res.json())
            .then(songsList => setSongs(songsList.feed.entry));
    }

    return (
        <div className="main-container">
            <SongList songs={songs} />
        </div>
    )
}

export default MusicContainer;