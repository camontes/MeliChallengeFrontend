import axios from 'axios'

//Url where the api is running locally
const devUrl = "http://localhost:3001/";

//Url where the api is running in production
const prodUrl = "https://melifront.fly.dev/"

export default axios.create({

    baseURL: process.env.NODE_ENV !== 'production' ? devUrl : prodUrl
});