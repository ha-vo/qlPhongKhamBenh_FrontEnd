import axios from "../axios";

const handleLoginApi = (email, password) => {
    return axios.post('/api/user/login', { email, password })
}

export default handleLoginApi