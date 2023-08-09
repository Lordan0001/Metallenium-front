import React, {useEffect, useState} from "react";
import {SongService} from "../../../Service/SongService";
import {AlbumService} from "../../../Service/AlbumService";

const AddSong = () => {
    const [songData, setSongData] = useState({
        songTitle: "",
        albumId: "",
    });

    const [albumData, setAlbumData] = useState([])
    useEffect(() => {

            const  fetchData = async () => {
                try {
                    const data = await AlbumService.getAllAlbums();
                    setAlbumData(data);
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
            const newAlbum = await SongService.addSong(songData);
            console.log("New song added:", newAlbum);
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
            <select name="albumId" value={albumData.albumId} onChange={handleInputChange}>
                <option value="">Select an Album</option>
                {albumData.map((album) =>(
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
