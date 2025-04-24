import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Profile from "@/components/Profile";
import Chat from "@/components/Chat";
import CalendarPage from "@/components/Calendar";
import PrivateRoute from "@/components/PrivateRoutes";
import { is_authenticated } from "@/endpoints/api";
const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  console.log(isAuthenticated, "authhh");
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await is_authenticated(); // Call the API
        setIsAuthenticated(response?.authenticated); // Update state based on response
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuth();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<PrivateRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </PrivateRoute>} />
            <Route path="/chat" element={<PrivateRoute isAuthenticated={isAuthenticated}>
              <Chat />
            </PrivateRoute>} />
            <Route path="/calendar" element={<PrivateRoute isAuthenticated={isAuthenticated}>
              <CalendarPage />
            </PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
