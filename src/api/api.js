import axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const base = axios.create({
  baseURL
})

const withCredentials = axios.create({
  baseURL,
  withCredentials: true
})

const auth = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "589d610b-3a89-4024-a191-95da5ab1df45"
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return withCredentials.get(`users?page=${currentPage}&count=${pageSize}`, )
      .then(response => response.data);
  },
  unfollow(userId) {
    return auth.delete(`follow/${userId}`)
      .then(response => response.data);
  },
  follow(userId) {
    return auth.post(`follow/${userId}`, {},)
      .then(response => response.data);
  }
}

export const profileAPI = {
  getUserProfile(userId) {
    return base.get(`profile/${userId}`)
      .then(response => response.data);
  }
}

export const headerAPI = {
  getAuth() {
    return withCredentials.get(`auth/me`)
      .then(response => response.data);
  }

}

