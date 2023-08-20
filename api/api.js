import axios from 'axios'
export const api = {
  getPosts() {
    return axios
      .get('https://641a0d32f398d7d95d4fc568.mockapi.io/articles')
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getPost(id) {
    return axios
      .get(`https://641a0d32f398d7d95d4fc568.mockapi.io/articles/${id}`)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
