import styles from './SongItem.module.css'
const SongItem = ({song}) =>{
    return(
        <div className={styles.songItem}>
            <p className={styles.songTitle}>  {song.songTitle}</p>
        </div>
    )
}
export default SongItem;