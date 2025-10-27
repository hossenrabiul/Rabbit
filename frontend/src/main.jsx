import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import router from "./components/Routes/Router.jsx";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-right">

    </Toaster>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </StrictMode>
);
