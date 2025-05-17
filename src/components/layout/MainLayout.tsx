// src/components/layout/MainLayout.tsx
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // ShadCN utility
import { useState } from "react";

export default function MainLayout() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Dashboard", path: "/dashboard" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white">
        <div className="flex items-center justify-between h-16 px-6 max-w-7xl mx-auto">
          {/* Logo/Title */}
          <Link to="/" className="text-lg font-semibold">
            MyWebsite
          </Link>

          {/* Desktop Nav */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-4">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.path}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={link.path}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        location.pathname === link.path
                          ? "text-primary underline"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link
                      to={link.path}
                      className={cn(
                        "w-full text-sm",
                        location.pathname === link.path
                          ? "font-semibold text-primary"
                          : "text-muted-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Separator />
      </header>

      {/* Main content area */}
      <main className="flex-1 p-6 max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
