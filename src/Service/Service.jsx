import axios from '../Network/axios'

export const Service = {
 async getAllBands () {
     const response = await axios.get('/api/bands')
        return response.data;
    },
    async getAllAlbums () {
        const response = await axios.get('/api/albums')
        return response.data;
    }


}