import axios from "../axios";

const handleLoginApi = (email, password) => {
    return axios.post('/api/user', { email, password })
}

export default handleLoginApi