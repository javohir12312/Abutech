import axios from "axios";

axios.defaults.baseURL = 'https://www.instagram.com/'

axios.interceptors.request.use(config => {
  const jwt = JSON.parse(localStorage.getItem("token"))
  const authorization = jwt ? `` : "   "
  config.headers.authorization = authorization
  return config
})

export default axios