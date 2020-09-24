import axios from 'axios'

let ajax = axios.create({
  timeout: 5000
})
ajax.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

ajax.interceptors.response.use(
  response => {
    const res = response.data
    return res.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default ajax
