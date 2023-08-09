import React, {useState, useEffect} from "react";
import {SongService} from "../../../Service/SongService";

const DeleteSong = () => {

    const [songs, setSongs] = useState([]);
    const [selectedSongTitle, setSelectedSongTitle] = useState("");
    const [selectedSongId, setSelectedSongId] = useState("");

    useEffect(() => {

        const fetchSongs = async () => {
            try {
                const data = await SongService.getAllSongs();
                setSongs(data);
            } catch (error) {
                console.error("Error fetching songs:", error);
            }
        };

        fetchSongs();
    }, []);

    const handleSongChange = (event) => {
        setSelectedSongTitle(event.target.value);


        const selectedSong = songs.find((song) => song.songTitle === event.target.value);
        if (selectedSong) {
            setSelectedSongId(selectedSong.songId);
        } else {
            setSelectedSongId("");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await SongService.deleteSong(selectedSongId);

            window.location.reload();//TEMP

            // Clear the selected values
            setSelectedSongTitle("");
            setSelectedSongId("");
        } catch (error) {
            console.error("Error deleting song:", error);
        }
    };

    return (
        <div>
            <p>Delete Song</p>
            <select value={selectedSongTitle} onChange={handleSongChange}>
                <option value="">Select a Song</option>
                {songs.map((song) => (
                    <option key={song.songId} value={song.songTitle}>
                        {song.songTitle}
                    </option>
                ))}
            </select>
            <button onClick={handleSubmit} type="button">Delete</button>
        </div>
    );
};

export default DeleteSong;
