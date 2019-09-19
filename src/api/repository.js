import axios from 'axios';

export default axios.create({
    baseURL: 'http://satellite.test',
    timeout: 5000,
    headers: {
        'X-Auth-Token': '', //TODO: было бы неплохо
        'Content-Type': 'application/json'
    }
})
