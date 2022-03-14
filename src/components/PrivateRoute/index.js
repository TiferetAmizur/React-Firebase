import React from "react"
import { Outlet } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import Login from "../Login"

export default function PrivateRoute() {
    const { currentUser } = useAuth()

    return (
        currentUser?<Outlet/>:<Login/>
    )
}
