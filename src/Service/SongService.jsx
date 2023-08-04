import axios from '../Network/axios'

export const SongService = {

    async getSongsByAlbums (id) {
        const response = await axios.get(`/songs/songsbyalbum/${id}`)
        return response.data;
    }

}