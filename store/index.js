import axios from 'axios'
export const state = () => ({
  webInfo: {
    isLogin: false,
    userInfo: {
      admin: 0
    }
  }
})

export const actions = {
  getWebInfo (state) {
    axios.post('http://127.0.0.1:3001/api/checkLogin').then(response => {
      console.log(response)
    })
  }
}
