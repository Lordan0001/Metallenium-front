import axios from '../Network/axios'

export const SongService = {

    async getAllSongs  (){
        const response  = await axios.get('/songs');
        return response.data;
},
    async getSongsByAlbums (id) {
        const response = await axios.get(`/songs/songsbyalbum/${id}`)
        return response.data;
    },
    async addSong (data) {
        const response = await axios.post(`/songs`, data)
        return response.data;
    }

}