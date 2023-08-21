import axios from "axios";
import createAPIService from "../../api-service/api.service";

const strapi = createAPIService({ base: "", port: 1337 })

export default strapi;