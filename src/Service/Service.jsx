import axios from '../Network/axios'

export const Service = {
 async getAllBands () {
     const response = await axios.get('/bands')
        return response.data;
    },
    async getAllAlbums () {
        const response = await axios.get('/albums')
        return response.data;
    },
    async getAlbumsByBand (id) {
        const response = await axios.get(`/albums/albumbyband/${id}`)
        return response.data;
    },
    async getSongsByAlbums (id) {
        const response = await axios.get(`/songs/songsbyalbum/${id}`)
        return response.data;
    }


}