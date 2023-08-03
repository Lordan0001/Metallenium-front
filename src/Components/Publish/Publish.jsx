import AddBand from "./AddBand";
import AddAlbum from "./AddAlbum";
import AddSong from "./AddSong";

const Publish = () =>{
    return(
        <div>
            <div>
                <p>Add Bands</p>
                <AddBand/>
            </div>
            <div>
                <p>Add Albums</p>
                <AddAlbum/>
            </div>
            <div>
                <p>Add Songs</p>
                <AddSong/>
            </div>
        </div>
    )
}
export default Publish;