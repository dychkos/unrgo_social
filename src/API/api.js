import * as axios from "axios"

const instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0",
    headers:{
        "API-KEY":"f72b3043-c6e1-4f55-b81a-e95aef3188c0"
    }
})


export const UsersAPI = {
    getUser (page=1,pageSize=10){
        return instance.get(`/users?page=${page}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(id){
        return instance.post(`/follow/${id}`,
            {},
        ).then(response=>response.data)
    },
    unfollow(id){
        return instance.delete(`/follow/${id}`,
            {},
        ).then(response=>response.data)
    },
    getProfile(id){
        console.warn("Obsolete method. USE PROFILEAPI")
        return ProfileAPI.getProfile(id);
    },

};

export const ProfileAPI ={
    getProfile(id){
        return instance.get(`/profile/${id}`)
            .then((response) => response.data)
    },
    getStatus(id){
        return instance.get(`/profile/status/${id}`)
            .then(response=>response.data);
    },
    updateStatus(status){
        return instance.put(`/profile/status`,{
            status:status
        });
    }
};

export const AuthAPI = {
    me() {
        return instance.get("/auth/me")
    },
    login(email,password,rememberMe = false){
        return instance.post("/auth/login",{
            email,password,rememberMe
        })
    },
    logout(){
        return instance.delete("/auth/login")
    }


};



