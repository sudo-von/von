import axios from "axios";

const strapi = axios.create({
  baseURL: 'http://localhost:1337/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default strapi;