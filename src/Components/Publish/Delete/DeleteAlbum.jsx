import React, {useState, useEffect} from "react";
import {AlbumService} from "../../../Service/AlbumService";

const DeleteBand = () => {

    const [albums, setAlbums] = useState([]);
    const [selectedAlbumName, setSelectedAlbumName] = useState("");
    const [selectedAlbumId, setSelectedAlbumId] = useState("");

    useEffect(() => {
        // Fetch albums data and store them in the state
        const fetchAlbums = async () => {
            try {
                const data = await AlbumService.getAllAlbums();
                setAlbums(data);
            } catch (error) {
                console.error("Error fetching albums:", error);
            }
        };

        fetchAlbums();
    }, []);

    const handleAlbumChange = (event) => {
        setSelectedAlbumName(event.target.value);

        // Find the corresponding bandId based on the selected bandName
        const selectedAlbum = albums.find((album) => album.albumName === event.target.value);
        if (selectedAlbum) {
            setSelectedAlbumId(selectedAlbum.albumId);
        } else {
            setSelectedAlbumId("");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await AlbumService.deleteAlbum(selectedAlbumId);
            window.location.reload();//TEMP

            // Clear the selected values
            setSelectedAlbumName("");
            setSelectedAlbumId("");
        } catch (error) {
            console.error("Error deleting album:", error);
        }
    };

    return (
        <div>
            <p>Delete Album</p>
            <select value={selectedAlbumName} onChange={handleAlbumChange}>
                <option value="">Select an Album</option>
                {albums.map((album) => (
                    <option key={album.albumId} value={album.albumName}>
                        {album.albumName}
                    </option>
                ))}
            </select>
            <button onClick={handleSubmit} type="button">Delete</button>
        </div>
    );
};

export default DeleteBand;
