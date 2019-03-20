import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-burger-builder-26631.firebaseio.com/"
});

export default instance;