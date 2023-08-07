import axios from '../Network/axios'

export const AlbumService = {

    async getAllAlbums () {
        const response = await axios.get('/albums')
        return response.data;
    },
    async getAlbumsByBand (id) {
        const response = await axios.get(`/albums/albumbyband/${id}`)
        return response.data;
    },
    async addAlbum (data) {
        const response = await axios.post('/albums',data)
        return response.data;
    }

}