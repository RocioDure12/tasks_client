import axios from "axios";
import { UserLogin } from "../components3/LoginForm";
import User from "../models/User";



interface LoginResponse{
    token:string
    user:User
}

const baseUrl='http://127.0.0.1:8000'

export default function useAuthApi(){
 
    const login= async(userLogin:UserLogin):Promise<LoginResponse>=>{
        const response=await axios.post(`${baseUrl}/users/login`, userLogin);
        return response.data
    }
    return {login}

}
