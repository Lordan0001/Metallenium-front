import React, {useEffect, useState} from "react";
import {SongService} from "../../../Service/SongService";
import {AlbumService} from "../../../Service/AlbumService";
import {useRecoilState, useSetRecoilState} from "recoil";
import {albumsState, songsState} from "../../../Recoil/Atoms";

const AddSong = () => {
    const [songData, setSongData] = useState({
        songTitle: "",
        albumId: "",
    });

    const [albums, setAlbums] = useRecoilState(albumsState);
    const setSongs = useSetRecoilState(songsState);
    useEffect(() => {
            const  fetchData = async () => {
                try {
                    const data = await AlbumService.getAllAlbums();
                    setAlbums(data);
                } catch (e) {
                    console.error(e);
                }
            };
                fetchData();
    },[])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSongData({
            ...songData,
            [name]: value,
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newSong = await SongService.addSong(songData);
            setSongs((prevSongs) => [...prevSongs, newSong ])

            setSongData({
                songTitle: "",
                albumId: "",
            });
        } catch (error) {
            console.error("Error adding album:", error);
        }
    }

    return (
        <div>
            <p>Add Song</p>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="songTitle"
                placeholder="Title"
                value={songData.songTitle}
                onChange={handleInputChange}
            />
            <select name="albumId" value={albums.albumId} onChange={handleInputChange}>
                <option value="">Select an Album</option>
                {albums.map((album) =>(
                    <option key={album.albumId} value={album.albumId}>
                        {album.albumName}
                    </option>
                ))}
            </select>

            <button  type="submit">Send</button>
        </form>
        </div>
    );
};

export default AddSong;
