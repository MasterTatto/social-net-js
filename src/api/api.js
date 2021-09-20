import axios from "axios";

const instansAxios = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": 'f5568293-5f8e-4b65-9db2-3f550b4e7fcf'
        },
    }
)
export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instansAxios.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfolowUser: (id) => {
        return instansAxios.delete(`follow/${id}`)
    },
    followUser: (id) => {
        return instansAxios.post(`follow/${id}`)
    },
    getMineInfoPage: () => {
        return instansAxios.get(`auth/me`).then(response => response.data)

    },
    getProfileInfo: (userID) => {
        return instansAxios.get(`profile/${userID}`)
    }
}


