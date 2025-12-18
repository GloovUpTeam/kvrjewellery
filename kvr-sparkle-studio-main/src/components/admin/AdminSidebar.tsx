
import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Package,
    Tags,
    ShoppingBag,
    Users,
    Percent,
    Video
} from "lucide-react";

const AdminSidebar = () => {
    const links = [
        { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
        { href: "/admin/products", label: "Products", icon: Package },
        { href: "/admin/categories", label: "Categories", icon: Tags },
        { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
        { href: "/admin/customers", label: "Customers", icon: Users },
        { href: "/admin/deals", label: "Deals", icon: Percent },
        { href: "/admin/video-requests", label: "Video Requests", icon: Video },
    ];

    return (
        <aside className="w-64 bg-card border-r min-h-screen hidden md:block">
            <div className="p-6 border-b">
                <h2 className="font-serif text-2xl font-bold text-primary">Admin</h2>
            </div>
            <nav className="p-4 space-y-2">
                {links.map((link) => (
                    <NavLink
                        key={link.href}
                        to={link.href}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-accent hover:text-accent-foreground"
                            }`
                        }
                    >
                        <link.icon className="w-5 h-5" />
                        {link.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default AdminSidebar;
