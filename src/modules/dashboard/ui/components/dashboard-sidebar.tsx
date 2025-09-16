"use client"

import { Separator } from "@/components/ui/separator";
import{
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { BotIcon, StarIcon, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardUserButton } from "./dashboard-user-button";
import { DashboardTrial } from "./dashboard-trial";

const firstSection=[
    {
        icon:VideoIcon,
        label:"Meetings",
        href:"/meetings",
    },
    {
        icon:BotIcon,
        label:"Agents",
        href:"/agents",
    }
]


const secondSection=[
    {
        icon:StarIcon,
        label:"Upgrade",
        href:"/upgrade",
    },
]

export const DashboardSidebar=()=>{
    const pathname= usePathname();

    return(
        <Sidebar>
            <SidebarHeader className="text-sidebar-accent-foreground">
                <Link href="/" className="flex items-center gap-2 px-2 pt-2">
                    <Image src="/logo.svg" alt="Logo" width={36} height={36} />
                    <p className="text-2xl font-semibold">MentorAi</p>
                </Link>
            </SidebarHeader>
            <div className="px-4 py-2">
                <Separator className="opacity-10 text-muted-foreground" />

            </div>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {firstSection.map((item)=>(<SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton 
                                        asChild
                                        className={cn("h-10 hover:bg-linear-to-r/oklch border-transparent hover:border-transparent focus:bg-linear-to-r/oklch focus:border-transparent from-sidebar-accent to-sidebar-accent/50",
                                        pathname===item.href && "bg-linear-to-r/oklch border-transparent focus:border-transparent from-sidebar-accent to-sidebar-accent/50"
                                        )}
                                            isActive={pathname===item.href}
                                        >
                                        <Link href={item.href}>
                                        <item.icon className="inline mr-2 mb-1 h-4 w-4" />
                                            <span className="text-sm font tracking-tight">
                                                
                                                {item.label}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                    

                                </SidebarMenuItem>))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                    <div className="px-4 py-2">
                        <Separator className="opacity-10 text-muted-foreground" />
                    </div>
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {secondSection.map((item)=>(<SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton 
                                        asChild
                                        className={cn("h-10 hover:bg-linear-to-r/oklch border-transparent hover:border-transparent focus:bg-linear-to-r/oklch focus:border-transparent from-sidebar-accent to-sidebar-accent/50",
                                        pathname===item.href && "bg-linear-to-r/oklch border-transparent focus:border-transparent from-sidebar-accent to-sidebar-accent/50"
                                        )}
                                            isActive={pathname===item.href}
                                        >
                                        <Link href={item.href}>
                                        <item.icon className="inline mr-2 mb-1 h-4 w-4" />
                                            <span className="text-sm font tracking-tight">
                                                
                                                {item.label}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                    

                                </SidebarMenuItem>))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter className="text-white">
                    <DashboardTrial />
                    <DashboardUserButton />
                </SidebarFooter>
        </Sidebar>
    );
};