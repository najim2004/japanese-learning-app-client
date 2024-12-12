import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground mt-10">
      <div className="px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* App Description */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-4">日本語 Learn</h3>
            <p className="text-sm text-muted-foreground">
              An interactive platform designed to make learning Japanese
              vocabulary engaging, accessible, and fun for language enthusiasts
              of all levels.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/lessons"
                className="block text-sm hover:text-primary transition-colors"
              >
                Lessons
              </Link>
              <Link
                to="/tutorials"
                className="block text-sm hover:text-primary transition-colors"
              >
                Tutorials
              </Link>
              <Link
                to="/login"
                className="block text-sm hover:text-primary transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block text-sm hover:text-primary transition-colors"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Facebook className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Facebook</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Twitter</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          © {currentYear} 日本語 Learn. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
