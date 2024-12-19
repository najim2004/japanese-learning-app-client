import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux"; // Import Provider
import { store } from "./redux/store";
import { router } from "./routes/Router";
import { RouterProvider } from "react-router-dom";
import { App } from "./App";
import { Toaster } from "./components/ui/toaster";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap App with Provider and pass the Redux store */}

    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
      <Toaster />
    </Provider>
  </StrictMode>
);
