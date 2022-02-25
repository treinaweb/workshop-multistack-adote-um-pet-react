import axios from 'axios';

export const ApiService = axios.create({
    baseURL: 'https://adote-um-pet-multistack.herokuapp.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

