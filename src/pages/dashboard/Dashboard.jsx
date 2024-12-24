// Dashboard.jsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sidebar } from "@/components/dashboard/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="">
      <Navbar isAdmin={true} isLoggedIn={true} />
      <div className="flex">
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1">
          {/* Dashboard Content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};
