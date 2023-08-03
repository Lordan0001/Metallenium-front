const SongItem = ({song}) =>{
    return(
        <div className="song-item">
            <p className="song-title">  {song.songTitle}</p>
        </div>
    )
}
export default SongItem;