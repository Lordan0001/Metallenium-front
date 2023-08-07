import axios from '../Network/axios'

export const BandService = {

 async getAllBands () {
     const response = await axios.get('/bands')
        return response.data;
    },
    async getOneBand (id) {
        const response = await axios.get(`/bands/${id}`)
        return response.data;
    },
    async addBand (data) {
        const response = await axios.post('/bands',data)
        return response.data;
    }
}