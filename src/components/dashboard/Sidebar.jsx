import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Home, Text, Users, Video } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar (md and below) */}
      <div className="lg:hidden fixed top-[100px] -left-1 z-50">
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="opacity-50">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <nav className="flex flex-col gap-4 mt-8">
              {/* Add your sidebar items here */}
              <a href="#" className="text-sm hover:underline">
                Menu Item 1
              </a>
              <a href="#" className="text-sm hover:underline">
                Menu Item 2
              </a>
              <a href="#" className="text-sm hover:underline">
                Menu Item 3
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar (lg and above) */}
      <div className="hidden lg:block w-full max-w-[300px] h-screen bg-background border-r">
        <nav className="flex flex-col gap-4 p-4">
          {/* Add your sidebar items here */}
          <NavLink
            to="/dashboard"
            className="flex items-center gap-2 p-2 hover:bg-accent hover:text-accent-foreground rounded"
          >
            <Home size={20} />
            Dashboard
          </NavLink>
          <NavLink
            to="/dashboard/lessons"
            className="flex items-center gap-2 p-2 hover:bg-accent hover:text-accent-foreground rounded"
          >
            <BookOpen size={20} />
            Lessons
          </NavLink>
          <NavLink
            to="/dashboard/vocabulary"
            className="flex items-center gap-2 p-2 hover:bg-accent hover:text-accent-foreground rounded"
          >
            <Text size={20} />
            Vocabulary
          </NavLink>
          <NavLink
            to="/dashboard/tutorials"
            className="flex items-center gap-2 p-2 hover:bg-accent hover:text-accent-foreground rounded"
          >
            <Video size={20} />
            Tutorials
          </NavLink>
          <NavLink
            to="/dashboard/users"
            className="flex items-center gap-2 p-2 hover:bg-accent hover:text-accent-foreground rounded"
          >
            <Users size={20} />
            Users
          </NavLink>
        </nav>
      </div>
    </>
  );
};
