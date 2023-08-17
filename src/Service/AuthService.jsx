import axios from '../Network/axios'

export const AuthService = {

    async getUsers () {
        const response = await axios.get('/users')
        return response.data;
    },
    async getUserById (id) {
        const response = await axios.get(`/users/${id}`)
        return response.data;
    },
    async getMe(data) {
        try {
            const response = await axios.get('/auth/getme', {
                headers: {
                    Authorization: `bearer ${data}`
                }

            });
            return response.data;
        } catch (error) {
            console.error('Error while fetching user:', error);
            throw error;
        }
    },
    async register (data) {
        const response = await axios.post('/auth/register',data)
        return response.data;
    },
    async login (data) {
        const response = await axios.post('/auth/login',data)
        return response.data;
    },
/*    async updateAlbum (data) {
        const response = await axios.put('/albums',data)
        return response.data;
    },
    async deleteAlbum (id){
        const response = await axios.delete(`/albums/${id}`);
        return response.data;
    }*/

}