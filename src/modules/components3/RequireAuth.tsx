//import useAuthApi
import { useAppSelector } from "../../hooks";
import { PropsWithChildren} from "react"
import { Navigate} from "react-router-dom"
import {selectIsAuthenticated } from "../slicers/authSlice"

export default function RequireAuth(props:PropsWithChildren){
    const isAuthenticated =useAppSelector(selectIsAuthenticated)

    if (!isAuthenticated){
        return<Navigate to="users/login" replace/>
    }

    return <>{props.children}</>




}