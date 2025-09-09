import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

interface Props{
    Children: React.ReactNode;
}

const Layout=({Children}: Props) => {
    return (
        <SidebarProvider>
            <DashboardSidebar />
            <main className="flex flex-col h-screen w-screen bg-muted">
                {Children}
            </main>
        </SidebarProvider>
    );
};

export default Layout;