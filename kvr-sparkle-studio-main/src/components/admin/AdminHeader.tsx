
import { Button } from "@/components/ui/button";
import { useAuth } from "../../hooks/useAuth";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOut();
        navigate("/admin/login");
    };

    return (
        <header className="bg-card border-b p-4 flex justify-between items-center md:justify-end">
            {/* Mobile toggle could go here */}
            <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Admin User</span>
                <Button variant="ghost" size="sm" onClick={handleSignOut} className="gap-2">
                    <LogOut className="w-4 h-4" />
                    Logout
                </Button>
            </div>
        </header>
    );
};

export default AdminHeader;
