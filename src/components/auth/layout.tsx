import { useAuth } from "@/providers/AuthProvider"
import { Logo } from "../common/Logo"
import { Navigate, Outlet } from "react-router-dom"


function AuthLayout() {

    const { isAuthenticated, isLoading } = useAuth()

    if (isAuthenticated && !isLoading) {
        return <Navigate to="/vehicles" />
    }

    return (
        <div className="bg-background min-h-screen w-full text-black flex items-center justify-center">
            <div className="bg-white max-w-105 w-full p-8 rounded-lg shadow-lg ">
                <Logo size="lg" />
                <Outlet />
            </div>
        </div>
    )

}

export default AuthLayout
