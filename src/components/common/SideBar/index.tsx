import { Car, DollarSign, LayoutDashboard, LogOutIcon, Users } from "lucide-react";
import { Logo } from "../Logo";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers/AuthProvider";



export function SideBar() {

    const { pathname } = useLocation();
    const { user, logOut } = useAuth();


    const adminMenuItems = [
        {
            label: "Dashboard",
            icons: LayoutDashboard,
            href: "/dashboard"
        },
        {
            label: "Veículos",
            icons: Car,
            href: "/vehicles"
        },
        {
            label: "Usuários",
            icons: Users,
            href: "/users"
        },
        {
            label: "Preços",
            icons: DollarSign,
            href: "/prices"
        }
    ];
    const operatorMenuItems = [

        {
            label: "Veículos",
            icons: Car,
            href: "/vehicles"
        },
    ];

    const isAdmin = user?.role === "ADMIN";
    const menuItems = isAdmin ? adminMenuItems : operatorMenuItems

    return (
        <aside className="bg-sidebar w-65 text-white fixed top-0 left-0 h-full ">
            <div className="h-18 border-b border-sidebar-border p-6 flex items-center ">
                <Logo variant="light" />
            </div>

            <nav className="py-4">
                <ul>
                    {menuItems.map((item, index) => {
                        const isActive = item.href === pathname
                        const Icon = item.icons;

                        return (
                            <li
                                key={index}
                                className={cn(
                                    "px-6 text-white/80 transition-colors ",
                                    "text-sm font-medium mt-2",
                                    isActive ? "bg-sidebar-accent text-sidebar-foreground border-l-4 border-sidebar-primary"
                                        : "hover:bg-sidebar-border/60"
                                )}
                            >
                                < a href={item.href} className="flex items-center gap-3 h-12" >
                                    <Icon className="size-5" />
                                    {item.label}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav >
            <Button className="fixed bottom-4 left-4 w-54 text-destructive hover:bg-destructive/50 hover:text-white font-semibold" onClick={logOut}>
                <LogOutIcon />
                Sair
            </Button>
        </aside >
    )
}