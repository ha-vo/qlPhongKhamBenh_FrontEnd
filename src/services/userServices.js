import axios from "../axios";

const handleLoginApi = (email, password) => {
    return axios.post('/api/user/login', { email, password })
}

const getAllUsers = () => {
    return axios.get('/api/user/all')
}
export default {
    handleLoginApi, getAllUsers
}