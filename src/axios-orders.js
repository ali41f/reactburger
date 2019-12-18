import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burgerbuilder-b328c.firebaseio.com/"
});

export default instance;