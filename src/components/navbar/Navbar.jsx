import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, BookOpen, Video, LogIn, UserPlus, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = ({ isLoggedIn, isAdmin }) => {
  const NavLinks = () => (
    <div className="flex flex-col md:flex-row gap-4">
      {isLoggedIn ? (
        <>
          {!isAdmin && (
            <>
              <Link
                to="/lessons"
                className="flex items-center gap-2 p-2 hover:bg-accent hover:text-accent-foreground rounded"
              >
                <BookOpen size={20} />
                Lessons
              </Link>

              <Link
                to="/tutorials"
                className="flex items-center gap-2 p-2 hover:bg-accent hover:text-accent-foreground rounded"
              >
                <Video size={20} />
                Tutorials
              </Link>
            </>
          )}

          {isAdmin && (
            <Link
              to="/dashboard"
              className="flex items-center gap-2 p-2 hover:bg-accent hover:text-accent-foreground rounded"
            >
              <Home size={20} />
              Dashboard
            </Link>
          )}
        </>
      ) : (
        <>
          <Link
            to="/login"
            className="flex items-center gap-2 p-2 hover:bg-accent hover:text-accent-foreground rounded"
          >
            <LogIn size={20} />
            Login
          </Link>

          <Link
            to="/register"
            className="flex items-center gap-2 p-2 hover:bg-accent hover:text-accent-foreground rounded"
          >
            <UserPlus size={20} />
            Register
          </Link>
        </>
      )}
    </div>
  );

  return (
    <nav className="border-b">
      <div className="mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold">
          <span className="text-xl">日本語 Learn</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLinks />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>日本語 Learn</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
