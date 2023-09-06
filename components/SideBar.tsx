"use client";

import Link from "next/link";
import { Home, Users, UserCog2, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Tableau de bord",
    icon: Home,
    href: "/dashboard",
  },
  {
    label: "Clients",
    icon: Users,
    href: "/clients",
  },
  {
    label: "Utilisateurs",
    icon: UserCog2,
    href: "/users",
  },
  {
    label: "Paramètres",
    icon: Settings,
    href: "/settings",
  },
];

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#F1691D] text-white">
      <div className="py-2 flex-1">
        <Link href="/dashboard" className="flex items-center mb-14">
          <div className="relative w-full h-8 mr-4 flex items-center justify-center">
            <h1 className="font-semibold text-[18px]">SISA</h1>
          </div>
        </Link>
        <div className="space-y-1 pl-3">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-center font-medium cursor-pointer hover:text-black hover:bg-white rounded-l-full transition",
                pathname === route.href ? "text-black bg-white" : "text-zinc-50"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className="h-5 w-5 mr-3" />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
