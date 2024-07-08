//import useAuthApi
import { useAppSelector } from "../../hooks";
import { PropsWithChildren, useEffect} from "react"
import { Navigate} from "react-router-dom"
import {selectIsAuthenticated } from "../slicers/authSlice"
import useAuthApi from "../hooks/useAuthApi";
import { useAppDispatch } from "../../hooks"
import { authenticateUser } from "../slicers/authSlice";

export default function RequireAuth(props:PropsWithChildren){
    
    const authApi = useAuthApi()
    const dispatch=useAppDispatch()
    const isAuthenticated =useAppSelector(selectIsAuthenticated)

    useEffect(()=>{
        const caca=async()=>{
            const result= await authApi.currentUser()
            if (result.error){
                console.log(result.errorMessage)
                return
            }
            if (result.data){
                dispatch(authenticateUser(result.data))
            }
        }

        caca()
    },[authApi,dispatch])



    if (!isAuthenticated){
        return<Navigate to="users/login" replace/>
    }

    return <>{props.children}</>




}