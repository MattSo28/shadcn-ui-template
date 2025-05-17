import { Routes, Route } from "react-router-dom";
//import BlankPage from "@/pages/BlankPage";
import Dashboard from "./app/dashboard/dashboard01";
//import Login from "@/pages/Login";
import MainLayout from "@/components/layout/MainLayout";
import Home from "./pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Pages that use the MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Pages that don't use any layout */}
    <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}