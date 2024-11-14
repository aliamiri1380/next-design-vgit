'use client'

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar dir="ltr" className="bg-transparent" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent dir="rtl" justify="end">
        <NavbarItem>
          <Button dir="ltr" as={Link} color="primary" href="/auth" variant="flat">
            ورود / ثبت نام
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent  dir="rtl" className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#">
            مشاوره
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/search">
            صفحه جستجو
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/">
            صفحه اصلی
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent dir="rtl">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <Link href="/" className="font-bold text-inherit">Nomreyar</Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
