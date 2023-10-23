import axios from 'axios'

const instanceServer = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  headers: {
    'Content-Type': 'application/json'
  }
})
export default instanceServer
