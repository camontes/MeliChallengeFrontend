import axios from 'axios'

const devUrl = "http://localhost:3001/";
const prodUrl = "https://melifront.fly.dev/"

export default axios.create({

    baseURL: prodUrl
});